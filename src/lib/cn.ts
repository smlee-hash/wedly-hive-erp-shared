// className 합치기 — clsx 가벼운 사본. 양쪽 앱이 clsx 의존성 없이도 동작하도록 자체 포함.

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
