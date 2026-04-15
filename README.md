# 🦖 Dino Game

Chromium 오프라인 T-Rex Runner를 **TypeScript + React 19 + HTML5 Canvas**로 직접 포팅한 프로젝트.

> 상세 포팅 계획은 [PLAN.md](PLAN.md), 원본 게임 분석은 [chrome-dino-game-data.md](chrome-dino-game-data.md) 참고.

## 기술 스택

- **언어**: TypeScript
- **UI**: React 19
- **렌더링**: HTML5 Canvas 2D API
- **빌드**: Vite
- **스타일**: Tailwind CSS v4
- **린트**: ESLint + typescript-eslint

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (HMR)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview

# 린트
npm run lint
```

## 프로젝트 구조

```
.
├── public/              # 정적 에셋 (스프라이트 시트 등)
├── src/                 # 게임 로직 및 React 컴포넌트
├── index.html
├── vite.config.ts
└── PLAN.md              # 마일스톤 기반 포팅 로드맵
```

## 원본 출처 & 라이선스

- 원본 코드: [Chromium offline.js](https://source.chromium.org/chromium/chromium/src/+/main:components/neterror/resources/offline.js)
- 스프라이트: [100-offline-sprite.png](https://source.chromium.org/chromium/chromium/src/+/main:components/neterror/resources/default_100_percent/offline/100-offline-sprite.png)
- 라이선스: BSD 3-Clause (Chromium Authors)
