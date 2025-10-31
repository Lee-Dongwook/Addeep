# Figma MCP 설정 가이드

> Cursor AI 에디터에서 Figma 디자인을 직접 참조할 수 있도록 연결하는 방법입니다.

## 📌 이게 뭔가요?

Figma MCP(Model Context Protocol)를 설정하면, Cursor AI가 Figma 디자인 파일을 직접 읽고 이해할 수 있습니다.

**이렇게 활용할 수 있어요:**

- 💬 "이 Figma 디자인을 보고 React 컴포넌트 만들어줘"
- 🎨 디자인 시스템의 색상, 폰트, 간격 등을 자동으로 가져오기
- 📐 디자인 스펙을 코드로 정확하게 구현
- 🔄 디자인 변경사항을 실시간으로 반영

---

## 🚀 설정 방법

### 1단계: Figma Access Token 발급받기

Figma에서 개인 액세스 토큰을 생성해야 합니다.

1. **Figma 웹사이트 접속**
   - 브라우저에서 [https://www.figma.com](https://www.figma.com)에 로그인

2. **설정 페이지로 이동**
   - 우측 상단 프로필 아이콘 클릭
   - 드롭다운 메뉴에서 **Settings** 선택

3. **Personal Access Token 생성**
   - 설정 페이지 좌측 메뉴에서 **Account** 탭 선택
   - 아래로 스크롤하여 **Personal access tokens** 섹션 찾기
   - **Generate new token** 버튼 클릭

4. **토큰 이름 입력**
   - 토큰 이름: `Cursor MCP` (원하는 이름으로 입력)
   - **Generate token** 버튼 클릭

5. **토큰 복사하기** ⚠️ 중요!
   - 생성된 토큰이 화면에 표시됩니다
   - **반드시 복사해서 안전한 곳에 저장하세요**
   - 이 토큰은 다시 확인할 수 없습니다!
   - 형식: `figd_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

> ⚠️ **보안 주의사항**: 이 토큰은 비밀번호처럼 중요합니다. 절대 다른 사람과 공유하거나 공개 저장소에 올리지 마세요!

---

### 2단계: Cursor에서 MCP 설정하기

#### 방법 1: 설정 UI로 접근

1. **Cursor 설정 열기**
   - Mac: `Cmd + ,`
   - Windows: `Ctrl + ,`
   - 또는 상단 메뉴: `Cursor` → `Preferences` → `Settings`

2. **MCP 설정 찾기**
   - 설정 검색창에 `MCP` 입력
   - **Features** > **Model Context Protocol** 섹션 확인

3. **설정 파일 편집**
   - **Edit in settings.json** 또는 **Configure MCP Servers** 버튼 클릭

#### 방법 2: Command Palette로 바로 접근

1. Command Palette 열기
   - Mac: `Cmd + Shift + P`
   - Windows: `Ctrl + Shift + P`

2. 검색창에 입력: `Preferences: Open User Settings (JSON)`

3. Enter를 눌러 설정 파일 열기

---

### 3단계: 설정 코드 추가하기

`settings.json` 파일이 열리면, 다음 코드를 추가합니다:

```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-figma"],
      "env": {
        "FIGMA_PERSONAL_ACCESS_TOKEN": "여기에_발급받은_토큰_붙여넣기"
      }
    }
  }
}
```

**⚙️ 설정 방법:**

1. `"여기에_발급받은_토큰_붙여넣기"` 부분을 실제 토큰으로 교체
2. 따옴표(`"`)는 유지하고 그 안의 내용만 변경
3. 예시:
   ```json
   "FIGMA_PERSONAL_ACCESS_TOKEN": "figd_abcd1234efgh5678ijkl"
   ```

**📝 기존 설정이 있는 경우:**

파일에 이미 다른 설정이 있다면, 중괄호 `{}` 안에 추가하세요:

```json
{
  "editor.fontSize": 14,
  "editor.tabSize": 2,
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-figma"],
      "env": {
        "FIGMA_PERSONAL_ACCESS_TOKEN": "figd_your_token_here"
      }
    }
  }
}
```

4. **저장하기**
   - Mac: `Cmd + S`
   - Windows: `Ctrl + S`

---

### 4단계: Cursor 재시작

설정을 적용하기 위해 Cursor를 완전히 종료하고 다시 실행합니다.

1. Cursor 종료
   - Mac: `Cmd + Q`
   - Windows: Alt + F4 또는 창 닫기

2. Cursor 다시 실행

---

## ✅ 연결 확인하기

### 테스트 방법

1. Cursor에서 새 채팅 시작

2. 다음과 같이 질문:

   ```
   Figma MCP가 연결되었나요?
   ```

3. 또는 실제 Figma 파일로 테스트:
   ```
   이 Figma 파일의 디자인을 분석해줘:
   https://www.figma.com/file/YOUR_FILE_KEY
   ```

### 정상 작동 시

- AI가 Figma 파일의 내용을 읽고 분석할 수 있습니다
- 디자인 요소, 색상, 폰트, 레이아웃 정보를 가져올 수 있습니다

---

## 💡 활용 예시

### 1. 컴포넌트 생성

```
이 Figma 디자인을 보고 React 컴포넌트를 만들어줘:
https://www.figma.com/file/xxxxx

- Tailwind CSS 사용
- TypeScript로 작성
- 반응형 디자인 적용
```

### 2. 디자인 시스템 추출

```
이 Figma 파일에서 사용된 색상 팔레트를 추출해서
tailwind.config.ts에 추가해줘
```

### 3. 스펙 확인

```
이 버튼 컴포넌트의 정확한 패딩, 폰트 사이즈,
border radius를 Figma에서 가져와서 알려줘
```

### 4. 레이아웃 구현

```
이 Figma 페이지의 레이아웃을 Next.js 페이지로 구현해줘
```

---

## 🔧 문제 해결

### 문제 1: "MCP 서버 연결 실패"

**해결 방법:**

1. Figma 토큰이 올바른지 확인
2. 토큰 양쪽에 따옴표가 있는지 확인
3. 설정 파일의 JSON 문법이 올바른지 확인 (쉼표, 중괄호 등)
4. Cursor를 완전히 재시작

### 문제 2: "Figma 파일을 읽을 수 없음"

**확인 사항:**

- Figma 파일이 공개(Public)이거나 토큰 소유자가 접근 권한이 있는지
- Figma 파일 URL이 올바른지 확인
- 파일 URL 형식: `https://www.figma.com/file/FILE_KEY/FILE_NAME`

### 문제 3: "토큰을 잃어버렸어요"

**해결 방법:**

1. Figma 설정으로 돌아가기
2. 기존 토큰 삭제 (Revoke token)
3. 새 토큰 생성
4. Cursor 설정 업데이트

### 문제 4: "JSON 문법 오류"

**확인 사항:**

- 모든 중괄호 `{}`, 대괄호 `[]` 쌍이 맞는지
- 각 항목 뒤에 쉼표가 있는지 (마지막 항목 제외)
- 문자열이 따옴표로 감싸져 있는지

**도움이 필요하면:**

- [JSON Validator](https://jsonlint.com/)에서 설정 파일 검증
- 개발자에게 설정 파일 검토 요청

---

## 🔒 보안 팁

### DO ✅

- 토큰을 안전한 비밀번호 관리 도구에 저장
- 개인 컴퓨터의 로컬 설정 파일에만 보관
- 필요 없는 토큰은 Figma에서 삭제(Revoke)

### DON'T ❌

- 토큰을 Slack, 이메일, 메신저로 공유
- 토큰을 Git 저장소에 커밋
- 토큰을 스크린샷 찍어서 공유
- 공용 컴퓨터에서 설정

---

## 📞 추가 도움

- **Cursor 공식 문서**: [https://cursor.sh/docs](https://cursor.sh/docs)
- **Figma API 문서**: [https://www.figma.com/developers/api](https://www.figma.com/developers/api)
- **MCP 프로토콜**: [https://modelcontextprotocol.io](https://modelcontextprotocol.io)

---

## 📝 체크리스트

설정을 완료했다면 다음 항목을 확인하세요:

- [ ] Figma Personal Access Token 발급 완료
- [ ] 토큰을 안전한 곳에 저장
- [ ] Cursor의 `settings.json` 파일에 설정 추가
- [ ] 토큰을 올바르게 붙여넣기
- [ ] Cursor 재시작
- [ ] Figma 파일로 테스트 완료

---

**마지막 업데이트**: 2025-10-31
**문의**: 설정 중 문제가 발생하면 개발팀에 연락주세요.
