export function formatCurrency(value: number | null): string {
  if (value === null || value === undefined) return "-";
  return value.toLocaleString("ko-KR");
}

export function formatDate(isoDate: string | null): string {
  if (!isoDate) return "-";
  try {
    const d = new Date(isoDate);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    // 시간 정보가 있으면 함께 표시 (date-only는 그대로 날짜만)
    const hasTimeMarker = isoDate.includes("T");
    if (hasTimeMarker) {
      const hh = d.getHours();
      const mm = d.getMinutes();
      if (hh !== 0 || mm !== 0) {
        return `${y}.${m}.${day} ${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
      }
    }
    return `${y}.${m}.${day}`;
  } catch {
    return isoDate;
  }
}

/** datetime-local input value 변환 ('YYYY-MM-DDTHH:mm') */
export function toLocalInputValue(v: string | null | undefined): string {
  if (!v) return "";
  if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(v)) return v.slice(0, 16);
  if (/^\d{4}-\d{2}-\d{2}$/.test(v)) return `${v}T00:00`;
  try {
    const d = new Date(v);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    return `${y}-${m}-${day}T${hh}:${mm}`;
  } catch {
    return "";
  }
}

export function formatDateTime(isoDate: string | null): string {
  if (!isoDate) return "-";
  try {
    const d = new Date(isoDate);
    // invalid date 가드 — 정규식 형식만 통과한 "2026-13-45T99:99:99" 같은 입력에서
    // "NaN.NaN.NaN NaN:NaN" 가 화면에 노출되는 것을 차단. 원본 텍스트 그대로 표시.
    if (Number.isNaN(d.getTime())) return isoDate;
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    return `${y}.${m}.${day} ${hh}:${mm}`;
  } catch {
    return isoDate;
  }
}

// STATUS_COLORS 같은 도메인 데이터는 보관함에 두지 않음. 각 앱의 _components/utils.ts 에 정의.
// 부품에서 상태 색상이 필요하면 props 로 statusColors 를 받아 전달한다.
