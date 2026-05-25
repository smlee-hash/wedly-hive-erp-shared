// @wedly/hive-erp-shared — WEDLY 하이브·ERP 공용 부품 보관함
//
// 사용 앱은 자체 위들리 디자인 토큰(bg-wedly-accent 등)을 globals.css 에 정의해야 합니다.
//
// ⚠️ 현 단계 한계:
//   - lib/options.ts 와 types/columns.ts 의 COLUMNS·FIELD_OPTIONS 등은 하이브 도메인
//     (정책자금/경정청구) 데이터가 그대로 포함됨. ERP 통합 시 ColumnDef·FormulaSpec 타입과
//     getOptionColorClass·formatDate 같은 도구 함수만 남기고, COLUMNS·DEFAULT_VISIBLE·
//     FIELD_OPTIONS·STATUS_COLORS 같은 도메인 데이터는 각 앱이 자체 정의하도록 분리 예정.

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

export const __MODULE_VERSION__ = "0.5.0";
