# 서버 구동 상태 확인

## ✅ 서버 실행 완료

개발 서버가 성공적으로 실행되었습니다!

### 접속 정보

- **서버 주소:** http://localhost:3000
- **포트:** 3000
- **상태:** 실행 중

### 접속 경로

다국어 라우팅이 설정되어 있으므로 다음 경로로 접속하세요:

1. **영어 (기본):** http://localhost:3000/en
2. **한국어:** http://localhost:3000/ko
3. **중국어:** http://localhost:3000/zh

### 사용 가능한 페이지

- **홈:** http://localhost:3000/en (또는 /ko, /zh)
- **회사 소개:** http://localhost:3000/en/company
- **장비 목록:** http://localhost:3000/en/equipment
- **문의하기:** http://localhost:3000/en/contact
- **Sanity Studio:** http://localhost:3000/studio

### 주의사항

1. **Sanity 설정 필요**
   - `.env.local` 파일을 생성하고 Sanity 프로젝트 ID를 추가해야 Equipment 페이지가 정상 작동합니다.
   - 현재 Sanity 프로젝트가 설정되지 않으면 Equipment 페이지에서 데이터를 불러올 수 없습니다.

2. **환경 변수 설정**
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

3. **Node.js 버전 경고**
   - 현재 Node.js v18.20.8을 사용 중이며, 일부 패키지는 Node.js 20+를 권장합니다.
   - 대부분의 기능은 정상 작동하지만, 가능하면 Node.js 20 이상으로 업그레이드하는 것을 권장합니다.

### 서버 중지

서버를 중지하려면:
```bash
# 포트 3000에서 실행 중인 프로세스 찾기
lsof -ti:3000

# 프로세스 종료
kill -9 $(lsof -ti:3000)
```

또는 터미널에서 `Ctrl + C`를 누르세요.

### 다음 단계

1. 브라우저에서 http://localhost:3000/en 접속
2. Sanity 프로젝트 생성 및 설정
3. Equipment 데이터 추가
4. 실제 이미지 및 콘텐츠 추가

---

**서버가 정상적으로 실행 중입니다!** 🎉
