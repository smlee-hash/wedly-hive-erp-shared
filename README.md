# @wedly/ui-shared

WEDLY 공용 화면 부품 보관함 (하이브·일루아·ERP 공유).

상세 모달, 세부 섹션, 표, 셀 입력기, 페이지 위쪽 컨트롤, 공통 모달, 레이아웃 등 양쪽 앱이 공유하는 모든 화면 부품을 모은다.

## 적용 단계

- 1차 — 메인 페이지 + 상세 모달 (약 1~2주)
- 2차 — 공통 모달 (약 1주)
- 3차 — 레이아웃·공통 부품 (약 1주)
- 4차 — ERP 통합 (정책자금 1개 → 나머지 8개)

## 의존 연결 (개발 중)

하이브·ERP 둘 다 `package.json` 의 의존에 로컬 경로로 추가:

```json
"@wedly/ui-shared": "file:../wedly-ui-shared"
```

또는 절대 경로:

```json
"@wedly/ui-shared": "file:/Users/00.logico.l/wedly-ui-shared"
```

안정 검증 끝나면 깃허브 저장소로 이전 + GitHub URL 의존으로 변경.

## 자체 디자인 토큰 사용

사용 앱은 위들리 디자인 토큰(`bg-wedly-accent`, `text-wedly-t1` 등)이 globals.css 에 정의되어 있어야 한다. 이 보관함은 토큰 이름만 참조한다.

## ⚠️ Tailwind 스캔 경로 필수 (가장 자주 놓치는 사고)

사용 앱의 `globals.css` (또는 tailwind.config) 에 이 보관함의 코드를 스캔하도록 경로를 추가해야 한다. 안 하면 보관함 부품의 스타일 클래스가 빌드 결과 CSS 에 안 들어가서 화면이 통째 깨져 보인다.

```css
/* Tailwind v4 — globals.css */
@import "tailwindcss";
@source "../**/*.{ts,tsx,js,jsx}";
/* @wedly/* 모든 보관함을 한꺼번에 스캔 (새 보관함 추가해도 자동 적용) */
@source "../../node_modules/@wedly/*/src/**/*.{ts,tsx}";
```

하이브 앱은 빌드 단계에서 자동 점검 (`scripts/check-wedly-design.mjs`) 으로 누락 시 빌드 중단.
