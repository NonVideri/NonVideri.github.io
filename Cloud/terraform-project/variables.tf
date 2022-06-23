variable "aws_access_key" {
  type = string
  description = "AWS Access Key"
  sensitive = true
}

variable "aws_secret_key" {
  type = string
  description = "AWS Secret Key"
  sensitive = true
}

variable "aws_region" {
  type = string
  description = "AWS Region to use for resources"
  default = "us-east-1"
}

variable "vpc_cidr_block" {
  type = string
  description = "Base CIDR Block for VPC"
  default = "10.0.0.0/16"
}

variable "subnet1_cidr_block" {
  type = string
  description = "CIDR Block for Subnet1 in VPC"
  default = "10.0.0.0/24"
}

variable "enable_dns_hostnames" {
  type = bool
  description = "Enable DNS hostnames in VPC"
  default = true
}

variable "map_public_ip_on_launch" {
  type = bool
  description = "Map a public IP address for Subnet instance"
  default = true
}

variable "instance_type" {
  type = string
  description = "Type for EC2 instance"
  default = "t2.micro"
}