name := "flightofstairs.org"

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(
  cache, filters,
  "org.webjars" %% "webjars-play" % "2.2.1-2",
  "org.webjars" % "webjars-locator" % "0.13",
  "org.webjars" % "bootstrap" % "3.1.1-1" exclude("org.webjars", "jquery"),
  "org.webjars" % "jquery" % "2.1.1",
  "org.webjars" % "font-awesome" % "4.0.3"
)

play.Project.playScalaSettings
