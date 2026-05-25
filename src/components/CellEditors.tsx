"use client";

/**
 * 표 셀 인라인 입력기 — 글자·숫자·날짜
 *
 * 셀을 더블클릭하면 떠올라 편집 후 onSave 호출. 외부 클릭·ESC 로 취소.
 * select 입력기는 도메인 의존성(SelectDropdownBody)이 있어 호출 앱에서 자체 정의.
 */

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { toLocalInputValue } from "../lib/utils";

// ── 글자 입력 ──
export function CellTextEditor({ value, onSave }: { value: string; onSave: (v: string) => void }) {
  const [draft, setDraft] = useState(value);
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    ref.current?.focus();
    ref.current?.select();
  }, []);
  return (
    <input
      ref={ref}
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={() => onSave(draft)}
      onKeyDown={(e) => {
        if (e.key === "Enter") onSave(draft);
        if (e.key === "Escape") onSave(value);
      }}
      className="w-full px-1.5 py-0.5 text-[13px] border border-wedly-accent/40 rounded outline-none focus:ring-1 focus:ring-wedly-accent/20 bg-white"
    />
  );
}

// ── 숫자 입력 ──
export function CellNumberEditor({ value, onSave }: { value: number | null; onSave: (v: number | null) => void }) {
  const [draft, setDraft] = useState(value !== null ? String(value) : "");
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    ref.current?.focus();
    ref.current?.select();
  }, []);
  const getNum = () => (draft === "" ? null : Number(draft.replace(/,/g, "")));
  return (
    <input
      ref={ref}
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={() => onSave(getNum())}
      onKeyDown={(e) => {
        if (e.key === "Enter") onSave(getNum());
        if (e.key === "Escape") onSave(value);
      }}
      className="w-full px-1.5 py-0.5 text-[13px] border border-wedly-accent/40 rounded outline-none focus:ring-1 focus:ring-wedly-accent/20 bg-white tabular-nums"
      inputMode="numeric"
    />
  );
}

// ── 날짜 입력 ──
export function CellDateEditor({ value, onSave, onClose }: { value: string; onSave: (v: string) => void; onClose: () => void }) {
  const ref = useRef<HTMLInputElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);
  const initialValue = value ? toLocalInputValue(value) : "";
  const [draft, setDraft] = useState(initialValue);

  useEffect(() => {
    if (wrapRef.current) {
      const rect = wrapRef.current.getBoundingClientRect();
      setPos({ top: rect.top + window.scrollY, left: rect.left + window.scrollX });
    }
  }, []);

  useEffect(() => {
    if (pos && ref.current) ref.current.showPicker?.();
  }, [pos]);

  const commit = () => {
    if (draft !== initialValue) onSave(draft);
    onClose();
  };

  return (
    <>
      <div ref={wrapRef} className="h-6" />
      {pos && typeof document !== "undefined" && createPortal(
        <input
          ref={ref}
          type="datetime-local"
          autoFocus
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={commit}
          onKeyDown={(e) => {
            if (e.key === "Enter") { e.preventDefault(); commit(); }
            if (e.key === "Escape") onClose();
          }}
          className="fixed px-1.5 py-0.5 text-[13px] border border-wedly-accent/40 rounded outline-none focus:ring-1 focus:ring-wedly-accent/20 bg-white shadow-lg z-[9999]"
          style={{ top: pos.top, left: pos.left }}
        />,
        document.body,
      )}
    </>
  );
}
