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
}
