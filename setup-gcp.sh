#!/bin/bash

# GCP 프로젝트 설정 스크립트
# 사용법: ./setup-gcp.sh YOUR_PROJECT_ID

set -e

# 환경 변수 또는 명령행 인수에서 프로젝트 ID 가져오기
PROJECT_ID=${PROJECT_ID:-$1}
SERVICE_ACCOUNT_NAME=${SERVICE_ACCOUNT_NAME:-"github-actions"}

# 프로젝트 ID 확인
if [ -z "$PROJECT_ID" ]; then
    echo "사용법: ./setup-gcp.sh YOUR_PROJECT_ID"
    echo "또는 환경 변수 설정: export PROJECT_ID=YOUR_PROJECT_ID"
    echo "예시: ./setup-gcp.sh addeep-project-123"
    exit 1
fi

echo "🚀 GCP 프로젝트 설정을 시작합니다..."
echo "프로젝트 ID: $PROJECT_ID"

# 1. 프로젝트 설정
echo "📋 프로젝트 설정 중..."
gcloud config set project $PROJECT_ID

# 2. 필요한 API 활성화
echo "🔌 필요한 API들을 활성화 중..."
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com
gcloud services enable iam.googleapis.com

# 3. 서비스 계정 생성 (GitHub Actions용)
echo "👤 서비스 계정 생성 중..."
gcloud iam service-accounts create $SERVICE_ACCOUNT_NAME \
    --display-name="GitHub Actions Service Account" \
    --description="GitHub Actions에서 GCP 리소스에 접근하기 위한 서비스 계정"

# 4. 필요한 권한 부여
echo "🔑 권한 부여 중..."
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:$SERVICE_ACCOUNT_NAME@$PROJECT_ID.iam.gserviceaccount.com" \
    --role="roles/run.admin"

gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:$SERVICE_ACCOUNT_NAME@$PROJECT_ID.iam.gserviceaccount.com" \
    --role="roles/storage.admin"

gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:$SERVICE_ACCOUNT_NAME@$PROJECT_ID.iam.gserviceaccount.com" \
    --role="roles/iam.serviceAccountUser"

gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:$SERVICE_ACCOUNT_NAME@$PROJECT_ID.iam.gserviceaccount.com" \
    --role="roles/cloudbuild.builds.builder"

# 5. 서비스 계정 키 생성
echo "🔐 서비스 계정 키 생성 중..."
gcloud iam service-accounts keys create key.json \
    --iam-account=$SERVICE_ACCOUNT_NAME@$PROJECT_ID.iam.gserviceaccount.com

echo ""
echo "✅ GCP 설정이 완료되었습니다!"
echo ""
echo "📝 다음 단계:"
echo "1. 생성된 key.json 파일의 내용을 복사하세요"
echo "2. GitHub 저장소의 Settings > Secrets and variables > Actions로 이동"
echo "3. GCP_SA_KEY라는 이름으로 새 시크릿을 생성하고 key.json 내용을 붙여넣기"
echo "4. .github/workflows/deploy.yml 파일에서 PROJECT_ID를 '$PROJECT_ID'로 변경"
echo ""
echo "⚠️  보안: key.json 파일을 Git에 커밋하지 마세요!"
echo "   .gitignore에 key.json이 포함되어 있는지 확인하세요."
