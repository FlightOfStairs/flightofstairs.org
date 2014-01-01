package models

import org.joda.time.YearMonth
import play.api.i18n.Messages


case class CV(name: String, email: String, phone: String, skills: List[SkillArea], employment: List[Work], uni: Education)
case class SkillArea(area: String, details: String)
case class Work(org: String, title: String, from: YearMonth, to: Option[YearMonth], description: String)
case class Education(university: Work, awards: List[String])


object cv {
  val alistair = CV("Alistair Smith", "alistairsmith@flightofstairs.org", "07512853460",
    List(
      SkillArea("Familiar languages", "Java, Scala, R, HTML, JS, CSS"),
      SkillArea("Previous use", "Groovy, C#, SQL, Haskell, some Lisps, Python, C"),
      SkillArea("Design", "Distributed systems, managing big data, service oriented architecture"),
      SkillArea("Systems", "Various AWS products, LAMP stack, continuous integration/deployment, IaaS, PaaS"),
      SkillArea("Other", "VC (Git, SVN, Others), Agile methodologies")),
    List(
      Work("Amazon", "Software Development Engineer", new YearMonth(2012, 7), None, Messages("amzn.description")),
      Work("Defence Science and Technology Laboratory", "Software Engineer", new YearMonth(2010, 8), Some(new YearMonth(2011, 7)), Messages("dstl.description")),
      Work("University of Strathclyde", "Research Intern", new YearMonth(2009, 6), Some(new YearMonth(2009, 9)), Messages("epsrc.description"))
    ),
    Education(Work("University of Strathclyde", "Software Engineering", new YearMonth(2007, 9), Some(new YearMonth(2012, 6)), Messages("uni.description")),
      List(
        "BSc Hons. 1st class",
        "Young Software Engineer of the Year (Scotland) -- Best Engineered Project",
        "Charles Babbage prize for best honours project",
        "Sword Ciboodle prize runner-up for best project",
        "Dean’s List for applicable years of study (2007, 2008, 2009)"
      )))
}
