package controllers

import javax.inject._
import play.api.mvc._


@Singleton
class HomeController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {


  def index: Action[AnyContent] = Action {
    Ok(views.html.index())
  }
  def contactData: Action[AnyContent] =Action{ implicit request=> //implicit request because bindFromRequest() requires an implicit request
    import controllers.ContactForm.messageForm
    val data=messageForm.bindFromRequest().get
    if(messageForm.hasErrors)
      Redirect(routes.HomeController.contact()).flashing("error"->"Form has errors")
    else
      Redirect(routes.HomeController.index())
        .flashing("success"->s"Thank you for Contacting us ${data.name}, we will get back to you via ${data.email}")
  }
  def contact: Action[AnyContent] = Action {implicit request=>
    import controllers.ContactForm.messageForm
    Ok(views.html.contact(messageForm))
  }
  def quiz: Action[AnyContent] = Action {
    Ok(views.html.quiz())
  }


}
