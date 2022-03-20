# flightofstairs.org

Alistair Smith's CV and website.

## Development and deployment

This NPM Workspace consists of two packages: website, and infrastructure. Website produces a static react application. Infrastrucure defines a CDK stack configuring AWS hosting infrastructure. CDK deployment also uploads and deploys the static site.

### Website development

```sh
npm run start -w packages/website
```

### Deployment

```sh
npm run build -w packages/website
npm run deploy -w packages/infrastructure
```
