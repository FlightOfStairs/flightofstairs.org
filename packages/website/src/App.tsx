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
          <Typography variant="h5" component="h2">
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
          <Typography variant="h5" component="h2">
            Employment History
          </Typography>

          <Box>
            <Typography variant="h6" component="h3">
              Amazon: Software Development
            </Typography>
            <Typography variant="subtitle1">2011 to current date</Typography>
            <p>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </p>
            <p>
              <Typography variant="body1">
                Teams and business areas (recent first)
              </Typography>
            </p>
            <List>
              <ListItem>
                <ListItemText
                  primary="Ivy"
                  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Noble"
                  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Amazon Registry"
                  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Amazon Registry"
                  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Talent Management"
                  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Talent Analytics"
                  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Dynamic Retail Ads"
                  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </ListItem>
            </List>
          </Box>
          <Divider />
          <Box>
            <Typography variant="h6" component="h3">
              Defence Science and Technology Laboratory: Software Engineer
              (intern)
            </Typography>
            <Typography variant="subtitle1">
              August 2010 to July 2011
            </Typography>
            <p>
              <Typography variant="body1">
                Work included C#, Java, Python, Haskell, Evolutionary
                Computation, Trusted Computing, analysis of “Big Data”, creating
                tooling to understand program disassembles, and missing code
                prediction.
              </Typography>
            </p>
          </Box>
          <Divider />
          <Box>
            <Typography variant="h6" component="h3">
              University of Strathclyde: Research Intern
            </Typography>
            <Typography variant="subtitle1">Summer 2009</Typography>
            <p>
              <Typography variant="body1">
                Worked on “Capturing Task Related Knowledge.” I worked
                independently to investigate ways to identify relevant resources
                to those currently in-use.
              </Typography>
            </p>
          </Box>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            Education
          </Typography>
          <Box>
            <Typography variant="h6" component="h3">
              University of Strathclyde: BSc Software Engineering (Hons 1st
              class)
            </Typography>
            <Typography variant="subtitle1">2007 - 2012</Typography>

            <p>
              <Typography variant="body1">
                Demonstrated my coursework to university applicants at open days
                in 2nd, 3rd and 4th years, and was a lab demonstrator for 1st
                and 3rd year classes.
              </Typography>
            </p>
            <p>
              <Typography variant="body1">
                Awards: Young Software Engineer of the Year (Scotland) – Best
                Engineered Project, Charles Babbage prize for best honours
                project, Sword Ciboodle prize runner-up for best project, Dean’s
                List for applicable years of study (2007, 2008, 2009).
              </Typography>
            </p>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
