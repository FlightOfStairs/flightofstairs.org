name := "flightofstairs.org"

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(
  cache, filters,
  "org.webjars" %% "webjars-play" % "2.2.0",
  "org.webjars" % "bootstrap" % "3.0.2" exclude("org.webjars", "jquery"),
  "org.webjars" % "jquery" % "1.8.3",
  "org.webjars" % "font-awesome" % "4.0.3"
)

play.Project.playScalaSettings
