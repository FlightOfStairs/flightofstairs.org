package models

import org.joda.time.YearMonth
import play.api.i18n.Messages


case class CV(name: String, email: String, phone: String, skills: List[SkillArea], employment: List[Work], uni: Education)
case class SkillArea(area: String, details: String)
case class Work(org: String, title: String, from: YearMonth, to: Option[YearMonth], description: String)
case class Education(university: Work, awards: List[String])


object CV extends CV("Alistair Smith", Messages("email"), "07512853460",
    List(
      SkillArea("Familiar languages", "Java, Scala, R, HTML, JS, CSS"),
      SkillArea("Previous experience", "Groovy, C#, some Lisps, SQL, Haskell, Python, C"),
      SkillArea("Design", "Distributed systems, managing big data, service oriented architecture"),
      SkillArea("Systems", "Various AWS products, LAMP stack, continuous integration/deployment, IaaS, PaaS"),
      SkillArea("Other", "VC (Git, SVN, Others), Agile methodologies")),
    List(
      Work("Amazon", "Software Development Engineer", new YearMonth(2012, 7), None, "Worked on a team responsible for real-time services used by Amazon. Agile practises are widely used."),

      Work("Defence Science and Technology Laboratory", "Software Engineer", new YearMonth(2010, 8), Some(new YearMonth(2011, 7)), "Worked as a member of a small software department. I had a great deal of freedom to design and implement solutions as I chose. Technologies I used included C#, Java, Python, Haskell, Evolutionary computation, and Trusted Computing. Areas of work included analysis of large datasets, creating tools to work with program disassembles, and recovering missing data through stochastic methods."),

      Work("University of Strathclyde", "Research Intern", new YearMonth(2009, 6), Some(new YearMonth(2009, 9)), "The subject was \"Capturing Task Related Knowledge.\" I worked largely independently to explore ways of finding other resources relevant to the set of resources currently being used. I learned and gained experience on how to manage a medium-sized software project from start to finish.")
    ),
    Education(Work("University of Strathclyde", "Software Engineering", new YearMonth(2007, 9), Some(new YearMonth(2012, 6)), "Secured a 10-week paid research internship over the summer 2009, have demonstrated my coursework to university applicants at open days in 2nd, 3rd and 4th years, and was a lab demonstrator for 1st and 3rd year classes."),

      List(
        "BSc Hons. 1st class",
        "Young Software Engineer of the Year (Scotland) &ndash; Best Engineered Project",
        "Charles Babbage prize for best honours project",
        "Sword Ciboodle prize runner-up for best project",
        "Dean’s List for applicable years of study (2007, 2008, 2009)"
      )))
