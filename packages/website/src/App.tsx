import React, { ReactNode } from "react";
import Button from "@mui/material/Button";
import {
  AppBar,
  Box,
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

    <Typography variant="body1">{props.children}</Typography>
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

const name = "Alistair Smith";
const url = "https://flightofstairs.org";
const email = "alistairsmith@flightofstairs.org";
const github = "https://github.com/FlightOfStairs";
const linkedIn = "https://www.linkedin.com/in/alistairfsmith/";

const WebsitePreamble = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h5" component="h1" sx={{ flexGrow: 1 }}>
        {name}
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
    <Grid item sx={{ mt: 0.7, pr: 0.7 }}>
      {props.icon}
    </Grid>
    <Grid item>{props.details}</Grid>
  </Grid>
);

const PrintPreamble = () => (
  <Card
    sx={{
      my: 2,
      borderRadius: 0,
    }}
  >
    <CardContent>
      <Typography variant="h4" component="h2">
        {name}
      </Typography>
      <Typography variant="subtitle1">
        <PrintPreambleContact icon={<Link />} details={url} />
        <PrintPreambleContact icon={<EmailOutline />} details={email} />
        <PrintPreambleContact icon={<Github />} details={github} />
        <PrintPreambleContact icon={<Linkedin />} details={linkedIn} />
      </Typography>
    </CardContent>
  </Card>
);

function App() {
  const isPrintView = useMediaQuery("print");

  return (
    <Container sx={{ paddingY: 5 }}>
      {isPrintView ? <PrintPreamble /> : <WebsitePreamble />}

      <CvCard title="Skills">
        <Grid container spacing={2}>
          <Grid item component="dl">
            <SkillCategory category="Languages">
              Kotlin, Java, Typescript, Javascript, SQL
            </SkillCategory>
            <SkillCategory category="Platforms and Frameworks">
              React, AWS (numerous services), Infrastructure as Code (CDK,
              CloudFormation, Helm), Spark, Kafka, Headless CMS', Microservices,
              Service-oriented Architecture, Databases (PostgreSQL, ArangoDB,
              Athena, ElasticSearch, Redshift)
            </SkillCategory>
            <SkillCategory category="Environments and Methodolgies">
              Continuous Deployment, AB Testing and Experimentation, Low-latency
              Systems, Distributed Systems, 'Big Data'
            </SkillCategory>
            <SkillCategory category="Other Skills">
              Functional and Behavioural interviewing
            </SkillCategory>
          </Grid>
        </Grid>
      </CvCard>

      <CvCard title="Employment">
        <Job
          employer="Mutiny HQ"
          role="Lead Software Engineer"
          dates="2022 to current date"
        >
          <p>Led "Data & Analytics" and "Data Resolution" teams.</p>
          <p>
            Proposed significant architectural change to Mutiny's data
            processing pipeline, and then led the effort to deliver
            graph-database-backed identity resolution system. System improved
            correctness and timeliness of customer data while reducing
            development cost for future integrations. System was delivered with
            a significantly lower TCO than original architecture.
          </p>
          <p>
            Delivered Operational Excellence improvements, both reducing on-call
            burden on developers and increasing engagement with issues needing
            attention.
          </p>
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
            Registry Services (managing gTLDs), Advertising Analytics, and
            Real-time auctions for online advertising.
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
              Responsible for multiple security assessments and compliance for
              applications of all levels.
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

        <Typography variant="body1" paragraph>
          <p>
            Scottish 4-year Honours degree, with a year in industry between 3rd
            and 4th years.
          </p>
        </Typography>
      </CvCard>

      <CvCard title="Awards and Accolades">
        <Typography variant="h6" component="h3">
          Professional
        </Typography>
        <Typography variant="body1" paragraph>
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

        <Typography variant="body1" paragraph>
          <ul>
            <li>
              Young Software Engineer of the Year (Scotland) – Best Engineered
              Project
            </li>
            <li>Charles Babbage prize for best honours project</li>
            <li>Sword Ciboodle prize runner-up for best project</li>
            <li>
              Dean’s List for applicable years of study (2007, 2008, 2009)
            </li>
          </ul>
        </Typography>
      </CvCard>
    </Container>
  );
}

export default App;
