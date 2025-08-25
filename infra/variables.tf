variable "project_id" {
    description = "GCP Project ID"
    type        = string    
}

variable "region" {
    description = "GCP Region"
    type        = string
    default     = "asia-northeast3"
}

variable "ssh_user" {
    description = "SSH User for GCP VM"
    type        = string
    default     = "ubuntu"
}

variable "ssh_public_key_path" {
    description = "Path to the SSH public key for GCP VM"
    type        = string
    default     = "/Users/dlehddnr0713/.ssh/id_rsa.pub"
}

variable "ssh_private_key_path" {
    description = "Path to the SSH private key for GCP VM"
    type        = string
    default     = "/Users/dlehddnr0713/.ssh/id_rsa_tf"
}

variable "credentials_file_path" {
  description = "Path to GCP service account JSON"
  type        = string
  default     = "./service_account.json" # 프로젝트 루트 기준
}

