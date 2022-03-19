import { App, RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { Construct } from "constructs";
import { dirname } from "path";

export class Infrastructure extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    const destinationBucket = new Bucket(this, "WebsiteBucket", {
      autoDeleteObjects: true,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    new BucketDeployment(this, "BucketDeployment", {
      destinationBucket,
      sources: [
        Source.asset(dirname(require.resolve("flightofstairs-website"))),
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
