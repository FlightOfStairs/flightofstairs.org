import React, { ReactNode } from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Linkedin, Github, Email, EmailOutline, Link } from "mdi-material-ui";

const SkillCategory = (props: { category: string; children: ReactNode }) => (
  <>
    <Typography
      component="dt"
      sx={{
        fontWeight: "bold",
      }}
    >
      {props.category}
    </Typography>
    <Typography component="dd" variant="body2">
      {props.children}
    </Typography>
  </>
);

const Job = (props: {
  employer: string;
  role: string;
  dates: string;
  children: ReactNode;
}) => (
  <Box
    sx={{
      mt: 2,
    }}
  >
    <Typography variant="h5" component="h3">
      {props.employer}: {props.role}
    </Typography>
    <Typography variant="subtitle1" component="span">
      {props.dates}
    </Typography>

    <Typography variant="body1" component="span">{props.children}</Typography>
  </Box>
);

const CvCard = (props: { title: string; children: ReactNode }) => (
  <Card
    sx={{
      my: 2,
      borderRadius: 0,
    }}
  >
    <CardContent>
      <Typography variant="h4" component="h2">
        {props.title}
      </Typography>

      {props.children}
    </CardContent>
  </Card>
);

const name = "Alistair Smith"
const subheadding = "Lead Software Engineer with 15+ years experience";
const url = "https://flightofstairs.org";
const email = "alistairsmith@flightofstairs.org";
const github = "https://github.com/FlightOfStairs";
const linkedIn = "https://www.linkedin.com/in/alistairfsmith/";

const WebsitePreamble = () => (
  <AppBar position="static" sx={{displayPrint: 'none'}}>
    <Toolbar>
      <Typography variant="h5" component="h1" sx={{ flexGrow: 1 }}>
        {name} - {subheadding}
      </Typography>
      <Button color="inherit" href={`mailto:${email}`} aria-label="Email">
        <Email />
      </Button>
      <Button color="inherit" href={github} aria-label="GitHub">
        <Github />
      </Button>
      <Button color="inherit" href={linkedIn} aria-label="LinkedIn">
        <Linkedin />
      </Button>
    </Toolbar>
  </AppBar>
);

const PrintPreambleContact = (props: { icon: ReactNode; details: string }) => (
  <Grid container direction="row" alignItems="center">
    <Grid sx={{ mt: 0.7, pr: 0.7 }}>
      {props.icon}
    </Grid>
    <Grid>{props.details}</Grid>
  </Grid>
);

const PrintPreamble = () => (
  <Card
    sx={{
      my: 2,
      borderRadius: 0,
      display: 'none',
      displayPrint: 'block',
    }}
  >
    <CardContent>
      <hgroup>
        <Typography variant="h4" component="h2">{name}</Typography>
        <p>{subheadding}.</p>
      </hgroup>
      <Typography variant="subtitle1" component="span">
        <PrintPreambleContact icon={<Link />} details={url} />
        <PrintPreambleContact icon={<EmailOutline />} details={email} />
        <PrintPreambleContact icon={<Github />} details={github} />
        <PrintPreambleContact icon={<Linkedin />} details={linkedIn} />
      </Typography>
    </CardContent>
  </Card>
);

function App() {
  return (
    <Container sx={{ paddingY: 5 }}>
      <WebsitePreamble />
      <PrintPreamble />

      <CvCard title="Skills">
        <Grid container spacing={2}>
          <Grid component="dl">
            <SkillCategory category="Languages">
              Kotlin, Java, Typescript, Javascript, SQL
            </SkillCategory>
            <SkillCategory category="Platforms and Frameworks">
              React, AWS, Infrastructure as Code (CDK, CloudFormation,
              Terraform, Helm), Spark, Kafka, Headless CMS, Microservices,
              Service-oriented Architecture, Databases (PostgreSQL, ArangoDB,
              Athena, ElasticSearch)
            </SkillCategory>
            <SkillCategory category="Environments and Methodolgies">
              CI/CD, AB Testing and Experimentation, Low-latency Systems,
              Distributed Systems, Big Data, REST/GraphQL.
            </SkillCategory>
            <SkillCategory category="Other Skills">
              Functional and Behavioural interviewing, Mentoring, On-call
              support, Distributed teams, Team leadership.
            </SkillCategory>
          </Grid>
        </Grid>
      </CvCard>

      <CvCard title="Employment">
        <Job
          employer="Mutiny"
          role="Lead Software Engineer"
          dates="2022 to Present"
        >
          <p>
            Led the design and implementation of core platform and user-facing
            services in collaboration with team members, product, and leadership
            teams.
            Re-architected foundational services to improve consistency,
            reliability, and end-to-end latency. Reduced customer-reported
            defects through stronger validation, observability and auditability.
          </p>

          <Typography variant="h6" component="h4">
            Key Projects
          </Typography>
          <ul>
            <li>
              Proposed, designed, and led delivery of "Tortuga", the
              system-of-record for customer data, consolidating CRM/MAP/first-
              party sources and exposing strongly-consistent data to product
              teams.<br />
              Directly supported interactive CRM features (segmentation, search,
              import/export)<br />
              Implemented workflow to incorporated AI-powered research and
              enrichment at scale.
            </li>
            <li>
              Proposed, designed, and led delivery "Dumpster Detective", a
              cross-store data consistency auditor to detect and track data
              divergence across stores and services.<br />
              Surfaced remediation dashboards for engineering and leadership
              teams, enabling systematic reduction of mismatches.
            </li>
            <li>
              Proposed, designed, and led delivery "GADS": A graph-backed
              identity-resolution datastore. Captured learnings, patterns, and
              applicable technology and carried forward into later systems,
              reducing time-to-delivery and clear understanding of constraints.
            </li>
            <li>
              Improved operations across all projects, setting company standards
              for CI/CD, Docker/ECR, Helm/ArgoCD, Autoscaling, Observability
              (metrics, audits, dashboards), and drove changes to incident
              management.
            </li>
          </ul>
        </Job>

        <Divider />

        <Job
          employer="Amazon"
          role="Software Development Engineer"
          dates="2011 to 2022"
        >
          <p>
            Significant experience delivering scalable, secure, and pragmatic
            applications to customers and stakeholders across a wide range of
            Amazon's business areas: HR Applications, HR Analytics, Amazon
            Registry Services, Advertising Analytics, and Real-time auctions for
            online advertising.
          </p>
          <Typography variant="h6" component="h4">
            Deliveries
          </Typography>
          <ul>
            <li>
              Proposed, designed, and led delivery of "Sandcastles", a web-based
              analytics platform that enabled users to create ephemeral Spark
              clusters in order to work with Amazon's HR data in a secure
              environment.
            </li>
            <li>
              Designed and implemented multiple applications with complex
              Infrastructure as a Service (IaaS) stacks.
            </li>
            <li>
              Designed and implemented stable, reactive, and self-healing search
              platform for HR content with ElasticSearch, respecting users'
              locale and access roles.
            </li>
            <li>
              Participated in rapid delivery of multiple new HR applications
              supporting Annual Reviews, Promotions, and others. Led delivery of
              multiple foundational microservices.
            </li>
            <li>
              Designed and implemented an innovative data architecture, merging
              batch-processed bulk updates with interactive user changes,
              allowing for a stable, self-healing, notification datastore.
            </li>
            <li>
              Individually designed and developed a real-time video compositing
              system to enable product images and information to be embedded
              within video ads.
            </li>
            <li>
              Migrated large on-host datasets onto distributed Redis fleet while
              maintaining very low latency, unlocking future experimentation in
              machine learning.
            </li>
            <li>
              Led deep-dive investigation into latency of our applications,
              producing action-items with clear cost and impact estimates that
              have led to incremental investment of 2.5 engineers.
            </li>
            <li>
              Led urgent response to security event, conducting investigation,
              communication, and follow-up actions. Impact was seen at
              SVP-level.
            </li>
          </ul>

          <Typography variant="h6" component="h4">
            Cross-project responsibilities
          </Typography>
          <ul>
            <li>
              Amazon Bar Raiser: Conducted 900+ technical and behavioural
              interviews. Mentored multiple Bar Raisers individually through 6+
              month training process.
            </li>
            <li>
              Delivered multiple security assessments and ensured for
              compliance for applications of all levels.
            </li>
            <li>
              Mentored multiple engineers through their promotion processes.
            </li>
          </ul>
        </Job>
      </CvCard>

      <CvCard title="Education">
        <Typography variant="h6" component="h3">
          University of Strathclyde: BSc Software Engineering (Hons 1st class)
        </Typography>
        <Typography variant="subtitle1" component="span">
          2007 - 2012
        </Typography>

        <Typography variant="body1">
            Scottish 4-year Honours degree, with a year in industry between 3rd
            and 4th years.
        </Typography>
      </CvCard>

      <CvCard title="Awards and Accolades">
        <Typography variant="h6" component="h3">
          Professional
        </Typography>
        <Typography variant="body1" component="span">
          <ul>
            <li>
              Recipient of 3 patents for work on Real-time Advertising and Video
              Compositing systems.
            </li>
          </ul>
        </Typography>

        <Typography variant="h6" component="h3">
          Academic
        </Typography>

        <Typography variant="body1" component="span">
          <ul>
            <li>
              Young Software Engineer of the Year (Scotland) – Best Engineered
              Project
            </li>
            <li>Charles Babbage prize for best honours project</li>
            <li>Sword Ciboodle prize runner-up for best project</li>
            <li>Dean’s List for all years of study.</li>
          </ul>
        </Typography>
      </CvCard>
    </Container>
  );
}

export default App;
