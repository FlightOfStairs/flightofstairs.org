name := "flightofstairs.org"

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(
  cache,
  "org.webjars" %% "webjars-play" % "2.2.0",
  "org.webjars" % "jquery" % "2.0.3",
  "org.webjars" % "bootstrap" % "3.0.2",
  "org.webjars" % "font-awesome" % "4.0.3"
)

play.Project.playScalaSettings
