import { App, RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import {
  Certificate,
  CertificateValidation,
} from "aws-cdk-lib/aws-certificatemanager";
import {
  CloudFrontWebDistribution,
  OriginAccessIdentity,
  ViewerCertificate,
} from "aws-cdk-lib/aws-cloudfront";
import {
  ARecord,
  CnameRecord,
  HostedZone,
  MxRecord,
  RecordTarget,
  TxtRecord,
} from "aws-cdk-lib/aws-route53";
import { CloudFrontTarget } from "aws-cdk-lib/aws-route53-targets";
import {
  BlockPublicAccess,
  Bucket,
  BucketEncryption,
} from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { Construct } from "constructs";
import { dirname } from "path";

const domainName = "flightofstairs.org";

export class Infrastructure extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    const websiteBucket = new Bucket(this, "WebsiteBucket", {
      autoDeleteObjects: true,
      removalPolicy: RemovalPolicy.DESTROY,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      encryption: BucketEncryption.S3_MANAGED,
    });

    const originAccessIdentity = new OriginAccessIdentity(this, "OIA");
    websiteBucket.grantRead(originAccessIdentity);

    // Using email-validated certs is somewhat dodgy, but will wait till migrating to Route53
    // before moving to DNS-validated.
    const certificate = new Certificate(this, "Cert", {
      domainName,
      subjectAlternativeNames: [`www.${domainName}`],
      validation: CertificateValidation.fromEmail(),
    });

    const distribution = new CloudFrontWebDistribution(
      this,
      "CloudFrontDistribution",
      {
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: websiteBucket,
              originAccessIdentity,
            },
            behaviors: [{ isDefaultBehavior: true }],
          },
        ],
        viewerCertificate: ViewerCertificate.fromAcmCertificate(certificate, {
          aliases: [domainName, `www.${domainName}`],
        }),
      }
    );

    new BucketDeployment(this, "BucketDeployment", {
      destinationBucket: websiteBucket,
      sources: [
        Source.asset(dirname(require.resolve("flightofstairs-website"))),
      ],
      distribution,
    });

    const zone = new HostedZone(this, "HostedZone", {
      zoneName: domainName,
    });

    const target = RecordTarget.fromAlias(new CloudFrontTarget(distribution));

    new ARecord(this, "ApexRecord", {
      zone,
      target,
    });

    new ARecord(this, "WildcardRecord", {
      zone,
      recordName: "*",
      target,
    });

    new TxtRecord(this, "GoogleDomainKey", {
      zone,
      recordName: "google._domainkey",
      values: [
        "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCNUiCjniyND0rPGdCm/or+c72h2OfC3fSk2in6PjT4Ys1GA5w/xRJbBWaBYlca9+JSEBA61Tbc71Pe/SAuHaBv6e44OlwqLURF8ejpCdK8fmdtZqc4artmAGp5TUCBVWuOIH5dnMSQuejohUvDeWQzyAR5b81/UBxKFDx6XRhdBQIDAQAB",
      ],
    });

    // Probably not needed, but doesn't hurt
    new CnameRecord(this, "GoogleDomainValidation", {
      zone,
      recordName: "googleffffffffc36b6473",
      domainName: "google.com",
    });

    new MxRecord(this, "MailRecords", {
      zone,
      values: [
        {
          hostName: "ASPMX.L.GOOGLE.COM.",
          priority: 1,
        },
        {
          hostName: "ALT1.ASPMX.L.GOOGLE.COM.",
          priority: 5,
        },
        {
          hostName: "ALT2.ASPMX.L.GOOGLE.COM.",
          priority: 5,
        },
        {
          hostName: "ASPMX2.GOOGLEMAIL.COM.",
          priority: 10,
        },
        {
          hostName: "ASPMX3.GOOGLEMAIL.COM.",
          priority: 10,
        },
      ],
    });
  }
}

const app = new App();
new Infrastructure(app, "Infrastructure", {
  env: {
    region: "us-east-1", // The worst region, but saves complexity handling global resources
  },
});
