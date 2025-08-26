#!/bin/bash
set -eux
echo "[startup] begin: $(date -Is)" | tee -a /var/tmp/startup.log

# 1) sshd 설치/기동
apt-get update || true
DEBIAN_FRONTEND=noninteractive apt-get install -y openssh-server sudo || true
systemctl enable ssh || true
systemctl restart ssh || systemctl start ssh || true

# 2) 호스트 방화벽 해제(있다면)
if command -v ufw >/dev/null 2>&1; then
  ufw --force disable || true
fi
if systemctl is-active --quiet firewalld; then
  systemctl stop firewalld || true
  systemctl disable firewalld || true
fi

# 3) 사용자/키/권한
USER="__USER__"
PUB="__PUB__"
id -u "$USER" >/dev/null 2>&1 || useradd -m -s /bin/bash "$USER"
install -d -m 700 -o "$USER" -g "$USER" /home/$USER/.ssh
echo "$PUB" > /home/$USER/.ssh/authorized_keys
chown "$USER:$USER" /home/$USER/.ssh/authorized_keys
chmod 600 /home/$USER/.ssh/authorized_keys
chown -R "$USER:$USER" /home/$USER
usermod -aG sudo "$USER"

# 4) 임시로 sudo 비번 없이 허용 (들어간 뒤 꼭 삭제)
echo "$USER ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/90-recovery
chmod 440 /etc/sudoers.d/90-recovery


# 5) sshd 22포트 보장
sed -i 's/^#\?Port .*/Port 22/' /etc/ssh/sshd_config
sed -i 's/^#\?ListenAddress .*/# ListenAddress 0.0.0.0/' /etc/ssh/sshd_config
systemctl restart ssh || true

# 상태 로그
(ss -ltnp | grep :22 || true) | tee -a /var/tmp/startup.log
systemctl status ssh --no-pager || true
echo "[startup] end: $(date -Is)" | tee -a /var/tmp/startup.log
EOF