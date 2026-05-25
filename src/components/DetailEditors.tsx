"use client";

/**
 * 상세 모달 안 입력기 — 글자·숫자·날짜
 *
 * 표 셀 입력기(CellEditors)와 디자인이 약간 다름(상세 모달 위들리 입력 패턴).
 * Select 입력기는 도메인 의존성(SelectDropdownBody)으로 각 앱이 자체 정의.
 */

import { useEffect, useRef, useState } from "react";
import { toLocalInputValue } from "../lib/utils";

// ── 글자 입력 ──
export function TextEditor({ value, onSave }: { value: string; onSave: (v: string) => void }) {
  const [draft, setDraft] = useState(value);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
    ref.current?.select();
  }, []);

  const commit = () => onSave(draft);

  return (
    <input
      ref={ref}
      type="text"
      className="w-full rounded-lg border border-wedly-bd bg-white px-2 py-1 text-sm text-wedly-navy outline-none focus:border-wedly-accent focus:ring-1 focus:ring-wedly-accent/30"
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={commit}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          commit();
        }
        if (e.key === "Escape") {
          onSave(value);
        }
      }}
    />
  );
}

// ── 숫자 입력 ──
export function NumberEditor({ value, onSave }: { value: number | null; onSave: (v: number | null) => void }) {
  const [draft, setDraft] = useState(value?.toString() ?? "");
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
    ref.current?.select();
  }, []);

  const commit = () => {
    const trimmed = draft.trim();
    if (trimmed === "") {
      onSave(null);
    } else {
      const num = Number(trimmed.replace(/,/g, ""));
      onSave(isNaN(num) ? value : num);
    }
  };

  return (
    <input
      ref={ref}
      type="text"
      inputMode="numeric"
      className="w-full rounded-lg border border-wedly-bd bg-white px-2 py-1 text-sm text-wedly-navy outline-none focus:border-wedly-accent focus:ring-1 focus:ring-wedly-accent/30"
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={commit}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          commit();
        }
        if (e.key === "Escape") {
          onSave(value);
        }
      }}
    />
  );
}

// ── 날짜 입력 ──
export function DateEditor({ value, onSave }: { value: string; onSave: (v: string) => void }) {
  const ref = useRef<HTMLInputElement>(null);
  const [draft, setDraft] = useState(toLocalInputValue(value));

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const commit = () => onSave(draft);

  return (
    <input
      ref={ref}
      type="datetime-local"
      className="w-full rounded-lg border border-wedly-bd bg-white px-2 py-1 text-sm text-wedly-navy outline-none focus:border-wedly-accent focus:ring-1 focus:ring-wedly-accent/30"
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={commit}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          commit();
        }
        if (e.key === "Escape") {
          onSave(value);
        }
      }}
    />
  );
}
