import org.specs2.mutable._
import org.specs2.runner._
import org.junit.runner._

import play.api.test._

@RunWith(classOf[JUnitRunner])
class IntegrationSpec extends Specification {

  "Application" should {
    "show the index page" in new WithBrowser {
      browser.goTo("http://localhost:" + port)
      browser.pageSource must contain("About me")
      browser.pageSource must contain("Please check out")
    }

    "show my cv" in new WithBrowser {
      browser.goTo("http://localhost:" + port + "/cv")
      browser.pageSource must contain("Tech skills")
      browser.pageSource must contain("Work history")
      browser.pageSource must contain("Amazon.com")
      browser.pageSource must contain("Education")
      browser.pageSource must contain("Contact")
    }
  }
}
