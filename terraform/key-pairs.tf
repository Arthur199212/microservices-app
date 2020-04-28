resource "aws_key_pair" "microservices-app-key" {
  key_name   = "microservices-app-key"
  public_key = file("./microservices_app.pem")
}
