terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  required_version = ">= 0.14.9"
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_vpc" "vpc_jelou" {
  cidr_block = "10.0.0.0/16"
}

resource "aws_subnet" "subnet_jelou" {
  vpc_id            = aws_vpc.vpc_jelou.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = "us-east-1a"
}

resource "aws_security_group" "example" {
  name        = "terraform-example"
  description = "SG for example instance"
  vpc_id      = aws_vpc.example.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.example.id
  security_groups = [aws_security_group.example.name]

  tags = {
    Name = "TerraformJelouInstance"
  }
}


resource "aws_ecr_repository" "my_docker_images" {
  name                 = "my-docker-images"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}

