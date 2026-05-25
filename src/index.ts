// @wedly/hive-erp-shared — WEDLY 하이브·ERP 공용 부품 보관함
//
// 단계적으로 부품을 추가해 나갑니다. 사용 앱은 자체 위들리 디자인 토큰
// (bg-wedly-accent 등)을 globals.css 에 정의해야 합니다.
//
// 추가 순서 (가치 우선):
//   1차 — 메인 페이지 + 상세 모달
//     - ColumnToggleModal, SettingsDropdown, TopControls, MobileCardList, DesktopTable (이미 하이브에 분리)
//     - 셀 입력기 4개 + EditableCell + TableRow + CalendarView
//     - 상세 모달 본체 + 6개 세부 섹션 + 안 부품들
//   2차 — 공통 모달
//     - BulkEditModal, AutoFillRulesModal, AlimtalkPanel, UpdatePopup
//   3차 — 레이아웃·공통 부품
//     - Sidebar, TopNav, MainLayoutClient, AccessContext, wedly-dialog

// 첫 부품은 다음 응답에서 추가 — 우선 ColumnToggleModal 부터 시작.
export const __MODULE_VERSION__ = "0.1.0";
