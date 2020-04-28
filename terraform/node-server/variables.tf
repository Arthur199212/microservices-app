variable "ami-id" {
  type = string
}

variable "iam-instanse-profile" {
  default = ""
  type    = string
}

variable "instanse-type" {
  type    = string
  default = "t2.micro"
}

variable "key-pair" {
  type = string
}

variable "name" {
  type = string
}

variable "private-api" {
  default = ""
  type    = string
}

variable "subnet-id" {
  default = ""
  type = string
}

variable "vpc-security-ids" {
  default = []
  type    = list(string)
}
