package controllers


case class Message(name:String,email:String,message:String)
object ContactForm {
  import play.api.data.validation.Constraints._
  import play.api.data.Forms._
  import play.api.data.Form
  val messageForm =Form(
    mapping(
      "name"-> nonEmptyText,
      "email"-> nonEmptyText,
      "email"-> nonEmptyText
    )(Message.apply)(Message.unapply)
  )


}