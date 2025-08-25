#!/bin/bash
# ----------------------------
# Landing Page Standalone Deploy
# ----------------------------

# === 1. 로컬에서 빌드 ===
echo "🛠  Building Next.js standalone..."
yarn install
yarn build

# === 2. VM 정보 ===
VM_USER="ubuntu"
VM_IP="34.64.69.63"
VM_PATH="/home/ubuntu/landing-app"

# === 3. VM에 파일 복사 ===
echo "📦  Copying files to VM..."
scp -r .next/standalone/* $VM_USER@$VM_IP:$VM_PATH/
scp ../package.json $VM_USER@$VM_IP:$VM_PATH/
scp ../yarn.lock $VM_USER@$VM_IP:$VM_PATH/

# === 4. VM에서 Node.js 설치 + 서버 실행 ===
echo "🚀  Starting server on VM..."
ssh $VM_USER@$VM_IP << 'EOF'
cd /home/ubuntu/landing-app
# yarn install (production)
yarn install --production

# pm2가 설치되어 있으면 pm2로 실행, 없으면 node 직접 실행
if ! command -v pm2 &> /dev/null
then
    echo "pm2 not found, installing..."
    yarn global add pm2
fi

pm2 stop landing-app || true
pm2 start server.js --name landing-app
pm2 save
EOF


# === 5. Nginx 리버스 프록시 재시작 ===
echo "🔄  Restarting Nginx..."
ssh $VM_USER@$VM_IP "sudo systemctl restart nginx"

echo "✅ Deployment complete! Visit http://$VM_IP"