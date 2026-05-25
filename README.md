# @wedly/hive-erp-shared

WEDLY 하이브·ERP 공용 부품 보관함.

상세 모달, 세부 섹션, 표, 셀 입력기, 페이지 위쪽 컨트롤, 공통 모달, 레이아웃 등 양쪽 앱이 공유하는 모든 화면 부품을 모은다.

## 적용 단계

- 1차 — 메인 페이지 + 상세 모달 (약 1~2주)
- 2차 — 공통 모달 (약 1주)
- 3차 — 레이아웃·공통 부품 (약 1주)
- 4차 — ERP 통합 (정책자금 1개 → 나머지 8개)

## 의존 연결 (개발 중)

하이브·ERP 둘 다 `package.json` 의 의존에 로컬 경로로 추가:

```json
"@wedly/hive-erp-shared": "file:../wedly-hive-erp-shared"
```

또는 절대 경로:

```json
"@wedly/hive-erp-shared": "file:/Users/00.logico.l/wedly-hive-erp-shared"
```

안정 검증 끝나면 깃허브 저장소로 이전 + GitHub URL 의존으로 변경.

## 자체 디자인 토큰 사용

사용 앱은 위들리 디자인 토큰(`bg-wedly-accent`, `text-wedly-t1` 등)이 globals.css 에 정의되어 있어야 한다. 이 보관함은 토큰 이름만 참조한다.
