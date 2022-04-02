import React from "react";
import Button from "@mui/material/Button";
import {
  AppBar,
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Linkedin, Github, Email } from "mdi-material-ui";

function App() {
  return (
    <Container fixed sx={{ paddingY: 5 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="h1" sx={{ flexGrow: 1 }}>
            Alistair Smith
          </Typography>
          <Button
            color="inherit"
            href="mailto:alistairsmith@flightofstairs.org"
            aria-label="Email"
          >
            <Email />
          </Button>
          <Button
            color="inherit"
            href="https://github.com/FlightOfStairs"
            aria-label="GitHub"
          >
            <Github />
          </Button>
          <Button
            color="inherit"
            href="https://www.linkedin.com/in/alistairfsmith/"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </Button>
        </Toolbar>
      </AppBar>
      <Card>
        <CardContent>
          <Typography variant="h4" component="h2">
            Skills
          </Typography>

          <List>
            <ListItem>
              <ListItemText
                primary="Languages"
                secondary="Kotlin, Java, Typescript, Javascript, SQL"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Platforms and Frameworks"
                secondary="React, AWS (numerous
                  services), Infrastructure as Code (CDK, CloudFormation), Spark,
                  ElasticSearch, Headless CMS, Microservices, Service-oriented Architecture"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Environments and Methodolgies"
                secondary="Continuous Deployment, AB Testing and Experimentation, Low-latency Systems, Distributed Systems, 'Big Data'"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Other Skills"
                secondary="Functional and Behavioural interviewing"
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h4" component="h2">
            Employment History
          </Typography>

          <Box>
            <Typography variant="h5" component="h3">
              Amazon: Software Development
            </Typography>
            <Typography variant="subtitle1" component="span">
              2011 to current date
            </Typography>

            <Typography variant="body1">
              <p>
                Significant experience delivering value to customers and
                stakeholders across a wide range of Amazon's business areas: HR
                Applications, HR Analytics, Amazon Registry Services
                (registering gTLDs on customers' behalf), Advertising Analytics,
                and Real-time auctions for online advertising.
              </p>
              <p>Cross-cutting responsibilities and achievements:</p>

              <ul>
                <li>
                  Amazon Bar Raiser: Conducted 900+ technical and behavioural
                  interviews. Mentored multiple Bar Raisers individually through
                  6+ month training process. Supported and mentored Amazon's
                  Early Insights program in its early years.
                </li>
                <li>
                  Responsible for multiple security assessments and compliance
                  for applications of all levels.
                </li>
                <li>
                  Mentored multiple engineers through their promotion processes.
                </li>
                <li>
                  Recipient of 3 patents for work on Real-time Advertising and
                  Video Compositing systems.
                </li>
              </ul>
            </Typography>

            <Typography variant="h6" component="h4">
              Teams and business areas
            </Typography>
            <Typography variant="subtitle1" component="span">
              Recent first
            </Typography>

            <Typography variant="body1">
              Ivy
              <ul>
                <li>
                  Currently leading design of an HR-wide experimentation
                  platform, enabling teams to understand how their changes
                  impact employees, while enforcing legal, policy, and ethical
                  constraints.
                </li>
                <li>
                  Designed and implemented multiple applications with complex
                  Infrastructure as a Service (IaaS) stacks.
                </li>
                <li>
                  Led deep-dive investigation into latency of our applications,
                  producing action-items with clear cost and impact estimates
                  that have led to incremental investment of 2.5 engineers.
                </li>
                <li>
                  Built stable, reactive, and self-healing search platform for
                  HR content with ElasticSearch, respecting users' locale and
                  access roles.
                </li>
                <li>
                  Led urgent response to security event, conducting
                  investigation, communication, and follow-up actions. Impact
                  was seen at SVP-level.
                </li>
              </ul>
            </Typography>

            <Typography variant="body1" paragraph>
              Noble
              <ul>
                <li>
                  Designed and implemented an innovative data architecture
                  merging batch-processed bulk updates with interactive user
                  changes, allowing for a stable, self-healing, notification
                  datastore.
                </li>
                <li>
                  Proposed and conducted ridealong exercises with analyst
                  partner team, giving insight into how we could support their
                  needs, and influencing how we structured our working
                  relationship.
                </li>
              </ul>
            </Typography>

            <Typography variant="body1" paragraph>
              Amazon Registry
              <ul>
                <li>
                  Implemented bot-validation workflows to ensure eligibility of
                  customers of Amazon Registry's .bot domain.
                </li>
              </ul>
            </Typography>

            <Typography variant="body1" paragraph>
              Talent Management
              <ul>
                <li>
                  Participated in rapid delivery of multiple new HR applications
                  supporting Annual Reviews, Promotions, and others.
                </li>
                <li>
                  Led design and implementation of attachment and on-line
                  analytics microservices.
                </li>
              </ul>
            </Typography>

            <Typography variant="body1" paragraph>
              Talent Analytics
              <ul>
                <li>
                  Proposed, designed, and led delivery of Sandcastles, a
                  web-based analytics platform that enabled users to create
                  ephemeral Spark clusters in order to work with Amazon's HR
                  data in a secure environment.
                </li>
              </ul>
            </Typography>

            <Typography variant="body1" paragraph>
              Dynamic Retail Ads
              <ul>
                <li>
                  Individually designed and developed a real-time video
                  compositing system to enable product images and information to
                  be embedded within video ads.
                </li>
                <li>
                  Migrated large on-host targetting datasets onto distributed
                  Redis fleet while maintaining very low response times,
                  allowing additional data to be considered and unlocking future
                  experimentation in machine learning.
                </li>
                <li>
                  Productionized team's AB-testing tooling. Conducted numerous
                  experiments optimising advertising creatives.
                </li>
              </ul>
            </Typography>
          </Box>
          <Divider />
          <Box>
            <Typography variant="h5" component="h3">
              Defence Science and Technology Laboratory: Software Engineer
              (intern)
            </Typography>
            <Typography variant="subtitle1" component="span">
              August 2010 to July 2011
            </Typography>
            <Typography variant="body1">
              <p>
                Work included C#, Java, Python, Haskell, Evolutionary
                Computation, Trusted Computing, analysis of “Big Data”, creating
                tooling to understand program disassembles, and missing code
                prediction.
              </p>
            </Typography>
          </Box>
          <Divider />
          <Box>
            <Typography variant="h5" component="h3">
              University of Strathclyde: Research Intern
            </Typography>
            <Typography variant="subtitle1" component="span">
              Summer 2009
            </Typography>
            <Typography variant="body1">
              <p>
                Worked on “Capturing Task Related Knowledge.” I worked
                independently to investigate ways to identify relevant resources
                to those currently in-use.
              </p>
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h4" component="h2">
            Education
          </Typography>
          <Box>
            <Typography variant="h6" component="h3">
              University of Strathclyde: BSc Software Engineering (Hons 1st
              class)
            </Typography>
            <Typography variant="subtitle1" component="span">
              2007 - 2012
            </Typography>

            <Typography variant="body1" paragraph>
              <p>
                Demonstrated my coursework to university applicants at open days
                in 2nd, 3rd and 4th years, and was a lab demonstrator for 1st
                and 3rd year classes.
              </p>
              <p>
                Awards: Young Software Engineer of the Year (Scotland) – Best
                Engineered Project, Charles Babbage prize for best honours
                project, Sword Ciboodle prize runner-up for best project, Dean’s
                List for applicable years of study (2007, 2008, 2009).
              </p>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
