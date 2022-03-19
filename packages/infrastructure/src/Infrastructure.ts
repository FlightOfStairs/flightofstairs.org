import { App, RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import {
  CloudFrontWebDistribution,
  OriginAccessIdentity,
} from "aws-cdk-lib/aws-cloudfront";
import {
  BlockPublicAccess,
  Bucket,
  BucketEncryption,
} from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { Construct } from "constructs";
import { dirname } from "path";

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
      }
    );

    new BucketDeployment(this, "BucketDeployment", {
      destinationBucket: websiteBucket,
      sources: [
        Source.asset(dirname(require.resolve("flightofstairs-website"))),
      ],
      distribution,
    });
  }
}

const app = new App();
new Infrastructure(app, "Infrastructure", {
  env: {
    region: "us-east-1", // The worst region, but saves complexity handling global resources
  },
});
