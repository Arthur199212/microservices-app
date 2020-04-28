resource "aws_inctance" "default" {
  ami                    = var.ami-id
  iam_instanse_profile   = var.iam-instanse-profile
  instanse_type          = var.instanse-type
  key_name               = var.key-pair
  private_ip             = var.private-ip
  subnet_id              = var.subnet-id
  vpc_security_group_ids = var.vpc-security-ids

  tags = {
    Name = var.name
  }
}
