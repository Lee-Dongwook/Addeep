provider "google" {
    project = var.project_id
    region  = var.region
    credentials = file(var.credentials_file_path)
}

resource "google_compute_instance" "web" {
    name         = "addeep-landing"
    machine_type = "e2-micro"
    zone         = "${var.region}-a"

    boot_disk {
        initialize_params {
            image = "ubuntu-2204-jammy-v20240701"
        }
    }

    network_interface {
        network = "default"
        access_config {}  # 외부 IP 할당
    }

    metadata = {
        ssh-keys = "${var.ssh_user}:${file(var.ssh_public_key_path)}"
    }

    tags = ["http-server", "https-server"]
}

resource "google_compute_firewall" "http" {
    name    = "allow-http-https"
    network = "default"

    allow {
        protocol = "tcp"
        ports    = ["80", "443"]
    }

    source_ranges = ["0.0.0.0/0"]
    target_tags = ["http-server", "https-server"]
}

output "vm_ip" {
    value = google_compute_instance.web.network_interface[0].access_config[0].nat_ip
}