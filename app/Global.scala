import play.api._
import play.api.mvc._
import play.api.libs.concurrent.Execution.Implicits._

object Global extends GlobalSettings {
  override def doFilter(action: EssentialAction): EssentialAction = EssentialAction { request =>
    action.apply(request).map(_.withHeaders(
      "X-Clacks-Overhead" -> "GNU Terry Pratchett"
    ))
  }
}