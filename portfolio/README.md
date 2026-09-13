# 박성환 | Publisher Portfolio

React + Vite + SCSS 기반 퍼블리셔 포트폴리오입니다.

---

## 화면 확인 방법

### 1) 가장 간단한 방법 (추천) — 빌드된 `index.html` 열기

면접·서류용으로 **개발 서버 없이** 화면을 볼 때 사용합니다.

```bash
npm install
npm run build
```

빌드가 끝나면 `dist/index.html` 파일이 생성됩니다.

- **Windows**: `dist` 폴더의 `index.html`을 더블클릭하거나 브라우저로 드래그해서 엽니다.
- 또는 터미널에서:

```bash
npm run open
```

> CSS·JS가 `index.html` 하나에 포함되도록 빌드되어, `localhost` 없이도 화면 확인이 가능합니다.

### 2) 개발 중 실시간 확인 (`localhost`)

코드를 수정하면서 바로 확인할 때 사용합니다.

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:5173/](http://localhost:5173/) 접속

### 3) 빌드 결과 미리보기 서버

```bash
npm run build
npm run preview
```

터미널에 표시되는 주소(기본 `http://localhost:4173/`)로 접속합니다.

---

## 제출·공유 팁

| 상황 | 방법 |
|------|------|
| 메일·메신저로 전달 | `npm run build` 후 **`dist` 폴더 전체**를 압축해서 전달 → 받는 사람이 `index.html` 실행 |
| 본인 PC에서만 확인 | `dist/index.html` 더블클릭 또는 `npm run open` |
| 수정하면서 작업 | `npm run dev` |

---

## 폴더 구조

```
src/
  components/     # Header, Hero, About, Skills, Projects, Footer
  data/           # profile, skills, projects (목록 데이터)
  styles/         # 공통 SCSS (_variables, _mixins, _reset, _typography, global)
  assets/         # 이미지 등 정적 리소스
  App.jsx
  main.jsx
dist/             # 빌드 결과물 (제출용 index.html 포함)
```

## 기술

- React
- JavaScript
- SCSS / CSS
- Vite
