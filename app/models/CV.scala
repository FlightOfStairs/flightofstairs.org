package models

import org.joda.time.YearMonth
import play.api.i18n.Messages
import play.api.Play.current
import play.api.i18n.Messages.Implicits._


case class CV(name: String, email: String, phone: String, skills: List[SkillArea], employment: List[Work], uni: Education)
case class SkillArea(area: String, details: String)
case class Work(org: String, title: String, from: YearMonth, to: Option[YearMonth], details: List[String])
case class Education(university: Work, awards: List[String])


object CV extends CV("Alistair Smith", Messages("email"), "+447512853460",
    List(
      SkillArea("Familiar languages", "Java, Scala, HTML, JS, CSS"),
      SkillArea("Previous experience", "Groovy, C#, R, some Lisps, SQL, Haskell, Python, C"),
      SkillArea("Technology", "Redis, FFMpeg, Android, Various AWS products, IaaS, PaaS, continuous integration/deployment."),
      SkillArea("Design", "Distributed systems, low-latency systems, managing big data, Service Oriented Architectures"),
      SkillArea("Other", "VC (Git, SVN, Others), Agile development")),
    List(
      Work("Amazon.com", "Software Development Engineer II", new YearMonth(2012, 7), None, List(
        "My team is responsible for a customer-facing service with many performance and scalability challenges. I've learned to build and manage distributed systems and service oriented architectures to satisfy very low latency requirements. I've worked with big data analysis to produce ongoing metrics, as well as answering ad-hoc questions to drive specific business decisions.",
      "I've worked on innovative projects and prototypes individually and in small sub-teams to open up new areas of business for Amazon. I have a strong desire for high standards, and there are many occasions where I've improved and simplified my team's world, either in my own time or by getting buy-in from other stakeholders.",
      "Recently, I've worked individually, then lead a small team, to design and build a new advertising product which is launching now. I've had to solve many complex technical problems, and the project has received great interest from all levels within the company.",
      "In addition to my primary responsibilities, I've been involved with other aspects of Amazon. I am very involved with recruitment and interviewing for the centre. I've taken ownership of several projects that are shared across teams in the centre, including externally facing websites and an app used to teach early secondary school children the basics of programming. I encourage the development of my colleagues: I frequently run centre-wide hackathons, and I've been a mentor for interns and new graduates.")),

      Work("Defence Science and Technology Laboratory", "Software Engineer (intern)", new YearMonth(2010, 8), Some(new YearMonth(2011, 7)), List(
        "Worked as a member of a small software department. I had a great deal of freedom to design and implement solutions as I chose. Technologies I used included C#, Java, Python, Haskell, Evolutionary computation, and Trusted Computing. Areas of work included analysis of “big data”, creating tools to work with program disassembles, and prediction of missing data.")),

      Work("University of Strathclyde", "Research Intern", new YearMonth(2009, 6), Some(new YearMonth(2009, 9)), List(
        "The subject was “Capturing Task Related Knowledge.” I worked independently to explore ways of finding other resources relevant to the set of resources currently being used. I learned and gained experience on how to manage a medium-sized software project from start to finish."))
    ),
    Education(Work("University of Strathclyde", "Software Engineering", new YearMonth(2007, 9), Some(new YearMonth(2012, 6)), List(
      "Secured a 10-week paid research internship over the summer 2009, have demonstrated my coursework to university applicants at open days in 2nd, 3rd and 4th years, and was a lab demonstrator for 1st and 3rd year classes.")),
      List(
        "BSc Hons. 1st class",
        "Young Software Engineer of the Year (Scotland) &ndash; Best Engineered Project",
        "Charles Babbage prize for best honours project",
        "Sword Ciboodle prize runner-up for best project",
        "Dean’s List for applicable years of study (2007, 2008, 2009)"
      )))
