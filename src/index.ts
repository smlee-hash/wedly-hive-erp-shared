// @wedly/hive-erp-shared — WEDLY 하이브·ERP 공용 부품 보관함
//
// 사용 앱은 자체 위들리 디자인 토큰(bg-wedly-accent 등)을 globals.css 에 정의해야 합니다.
//
// 도메인 분리 원칙:
//   - 보관함은 타입(ColumnDef, FormulaSpec)과 도구 함수(formatDate, getOptionColorClass 등)만 보유
//   - 도메인 데이터(STATUS_COLORS, COLUMNS, FIELD_OPTIONS 등)는 각 앱 _components/에 정의
//   - 부품은 도메인 데이터를 props 로 받음 (statusKey, getStatusClass, titleKey 등)

// 도우미
export { cn } from "./lib/cn";
export * from "./lib/utils";
export * from "./lib/options";

// 타입
export type { ColumnDef, FormulaSpec } from "./types/columns";

// 부품 — 메인 페이지 영역
export { ColumnToggleModal } from "./components/ColumnToggleModal";
export type { ColumnToggleColumn } from "./components/ColumnToggleModal";

export { SettingsDropdown } from "./components/SettingsDropdown";
export type { SettingsMenuItem, SettingsCustomItem } from "./components/SettingsDropdown";

export { MobileCardList } from "./components/MobileCardList";

export { DesktopTable } from "./components/DesktopTable";

export { TopControls } from "./components/TopControls";

// 표 셀 입력기 (글자·숫자·날짜) — Select 입력기는 도메인 의존성으로 각 앱이 자체 정의
export { CellTextEditor, CellNumberEditor, CellDateEditor } from "./components/CellEditors";

export const __MODULE_VERSION__ = "0.6.0";
