module "test-server" {
  sourse = "./node-server"

  ami-id   = "ami-booolshit"
  key-pair = aws_key_pair.microservices-app-key.key_name
  name     = "Test Server"
}
