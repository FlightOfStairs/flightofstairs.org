package controllers

import play.api.mvc._
import models.Likes

object Application extends Controller {

  def index = Action {
    Ok(views.html.index())
  }

  def cv = Action {
    Ok(views.html.cv(models.CV))
  }

  def likes = Action {
    Ok(views.html.likes(Likes.likes))
  }
}