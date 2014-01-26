package models

case class LikeCategory(heading: String, lead: String, likes: List[Like])
case class Like(title: String, description: String)

object Likes {
  def likes = List(
    LikeCategory("Software Engineering", "I would like to see the following if I were to work with your company (where applicable).", List(
        Like("Continuous Deployment",  "Failing that, Continuous Integration and easy deployment at a minimum. I strongly believe that working in an environment where small changes are deployed often will lead to better automated tests, better code and better responsiveness. This website is not quite there: it takes one additional command to deploy to Heroku after pushing changes to GitHub."),
        Like("Static type-checking",  "…for large, mature, shared codebases and libraries. Type inference is a bonus. I enjoy the safety that static types give to refactors that touch large numbers of clients or consumers. With a large codebase it's likely that it will not fit in one brain. It is nice to be able to change a parameter or return type and have a compiler point out all the effects."),
        Like("Duck typing",  "…for small, single-developer projects and prototypes. If the code does fit in one brain, is not tightly coupled, and is rapidly changing, why should I care that the compiler isn't sure what's going on? I enjoy using Clojure and Groovy for scripting; with optional types now available in each, there's little downside."))),

    LikeCategory("Space", "I am very interested in space and access to space. I watch most rocket launches.", List(
      Like("SpaceX", "I am a fan of SpaceX and Elon Musk's companies in general. I'm excited about getting to see the two Dragon abort tests this year, along with the Falcon Heavy (first HLV with fuel crossfeed) maiden flight and progress towards recovering Falcon cores in the near future."))
    ))
}