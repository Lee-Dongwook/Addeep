provider "google" {
    project = var.project_id
    region  = var.region
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
        ssh-keys = "${var.ssh_user}:${file("~/.ssh/id_rsa.pub")}"
    }

    tags = ["http-server", "https-server"]

    # VM 초기 세팅: Nginx 설치
    provisioner "remote-exec" {
        inline = [
            "sudo apt update",
            "sudo apt install -y nginx",
            "sudo rm -rf /var/www/html/*"
        ]

        connection {
            type       = "ssh"
            user        = var.ssh_user
            private_key = file("~/.ssh/id_rsa")
            host        = self.network_interface[0].access_config[0].nat_ip
        }
    }
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