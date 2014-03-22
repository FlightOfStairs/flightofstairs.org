package models

case class LikeCategory(heading: String, lead: String, likes: List[Like])
case class Like(title: String, description: String)

object Likes {
  def likes = List(
    LikeCategory("Tech", "I would like to see the following if I were to work with you.", List(
      Like("Continuous Deployment", "Failing that, Continuous Integration and easy deployment at a minimum. I strongly believe that working in an environment where small changes are deployed often will lead to better automated tests, better code and better responsiveness. This website requires only a push to GitHub, after which Wercker will deploy to Heroku."),
      Like("Static type-checking", "…for large, mature, shared codebases and libraries. Type inference is a bonus. I enjoy the safety that static types give to refactors that touch large numbers of clients or consumers. With a large codebase it's likely that it will not fit in one brain. It is nice to be able to change a parameter or return type and have a compiler point out all the effects."),
      Like("Duck typing", "…for small, single-developer projects and prototypes. If the code does fit in one brain, is not tightly coupled, and is rapidly changing, why should I care that the compiler isn't sure what's going on? I enjoy using Clojure and Groovy for scripting; with optional types now available in each, there's little downside. As soon as code becomes team-owned, it becomes too expensive for everyone to know all changes and the pain starts."),
      Like("IntelliJ IDEA", "By far the best IDE I've used. At university we were encouraged to use Eclipse, but I quickly moved to Netbeans. That suited me fine for Java development for a long time, but after moving to less-popular languages IDEA has grown on me a lot - everything else feels painful now."),
      Like("WebJars", "I strongly dislike checking dependencies into VC. WebJars are client-side libraries packaged and available in a central repository. It becomes easy to express dependencies on Bootstrap, JQuery, etc. No dependencies are checked in for this website."))),

    LikeCategory("Space", "I am very interested in space and access to space. I watch most rocket launches.", List(
      Like("SpaceX", "I am a fan of SpaceX and Elon Musk's companies in general. I'm excited about getting to see the two Dragon abort tests this year, along with the Falcon Heavy (first HLV with fuel crossfeed) maiden flight and progress towards recovering Falcon cores in the near future."),
      Like("Dream Chaser", "The coolest of the spacecraft being developed for NASA's commercial crew program. I hope one day to see SpaceX delivering this to orbit."),
      Like("Spaceflight Now", "Always a great source of info for upcoming events, has good launch coverage."))),

    LikeCategory("Games", "I'm pretty keen on playing games, particularly those that are single-player and story-driven.", List(
      Like("The Witcher 2", "Very impressed with this game. It's got a great story, good mechanics, good replayability and surprisingly good graphics. I'd recommend it to anyone who had 40 hours to kill, and I'm looking forward to the next in the series."),
      Like("Starbound", "This sort of game usually would not appeal to me. I typically get bored of procedurally generated content - it feels a bit pointless to continue knowing that there's an infinite amount of the same. Somehow I've managed to spend 40+ hours on this game so far, and it's not even finished."))))
}