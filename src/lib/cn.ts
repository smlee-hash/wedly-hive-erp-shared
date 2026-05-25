// className 합치기 — clsx 가벼운 사본. 양쪽 앱이 clsx 의존성 없이도 동작하도록 자체 포함.
//
// 주의: tailwind-merge 없음. 같은 Tailwind 유틸리티 그룹(예: text-* / bg-* / p-*)을
// 한 부품 안에서 중복으로 쓰지 말 것. 중복 시 CSS 선언 순서에 따라 마지막 규칙이 이김.
// 변형(hover·focus·disabled 등) 추가 시 같은 그룹 충돌 가능성 점검 필요.

type ClassValue = string | number | boolean | undefined | null | Record<string, boolean | undefined | null> | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  const push = (v: ClassValue): void => {
    if (!v) return;
    if (typeof v === "string" || typeof v === "number") {
      out.push(String(v));
      return;
    }
    if (Array.isArray(v)) {
      for (const x of v) push(x);
      return;
    }
    if (typeof v === "object") {
      for (const [k, val] of Object.entries(v)) {
        if (val) out.push(k);
      }
    }
  };
  for (const i of inputs) push(i);
  return out.join(" ");
}
