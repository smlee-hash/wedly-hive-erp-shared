// 수식 컬럼 세부 정의 — formula 타입의 customColumns 만 사용. 단순 식 1개만 지원.
// 예: { refKey: "예상수수료", op: "*", operand: 0.3 } → 예상수수료 × 30%
export type FormulaSpec = {
  refKey: string;                        // 참조할 다른 컬럼의 키
  op: "*" | "+" | "-" | "/";             // 연산자
  operand: number;                       // 곱·더·빼·나눌 숫자 (퍼센트는 0.3 형태로 저장)
};

export type ColumnDef = {
  key: string;
  label: string;
  type:
    | "title"
    | "text"
    | "number"
    | "date"
    | "select"
    | "multi_select"
    | "person"
    | "checkbox"
    | "formula"
    | "file"
    | "email"
    | "phone_number"
    | "status"
    | "auto_increment_id"
    | "last_edited_time"
    | "last_edited_by";
  defaultVisible: boolean;
  width?: number;
  sticky?: boolean;
  format?: "currency";
  formula?: FormulaSpec;                 // type === "formula" 일 때만 사용 (customColumns 한정)
};

export const COLUMNS: ColumnDef[] = [
  { key: "ID", label: "ID", type: "auto_increment_id", defaultVisible: true, width: 60, sticky: true },
  { key: "_createdTime", label: "등록일시", type: "last_edited_time", defaultVisible: true, width: 130 },
  { key: "_hiveTransferredAt", label: "하이브 전환일시", type: "last_edited_time", defaultVisible: true, width: 130 },
  { key: "02상호명", label: "상호명", type: "title", defaultVisible: true, width: 300, sticky: true },
  { key: "03대표자명", label: "대표자명", type: "text", defaultVisible: true, width: 100 },
  { key: "04연락처", label: "연락처", type: "phone_number", defaultVisible: true, width: 130 },
  { key: "05경정계약진행상태", label: "진행상태", type: "select", defaultVisible: true, width: 120 },
  { key: "06국세환급액", label: "국세환급액", type: "number", defaultVisible: true, width: 120, format: "currency" },
  { key: "07지방세환급액", label: "지방세환급액", type: "number", defaultVisible: true, width: 120, format: "currency" },
  { key: "08농어촌특별세", label: "농어촌특별세", type: "number", defaultVisible: false, width: 120, format: "currency" },
  { key: "09이월공제금액", label: "이월공제금액", type: "number", defaultVisible: false, width: 120, format: "currency" },
  { key: "10총환급금", label: "총환급금", type: "number", defaultVisible: true, width: 120, format: "currency" },
  { key: "11통합관리코드", label: "통합관리코드", type: "text", defaultVisible: false, width: 120 },
  { key: "12환급금승인완료일", label: "환급금승인완료일", type: "date", defaultVisible: false, width: 130 },
  { key: "13세무업체", label: "세무업체", type: "select", defaultVisible: true, width: 80 },
  { key: "14사업자유형", label: "사업자유형", type: "select", defaultVisible: true, width: 100 },
  { key: "15사업자번호", label: "사업자번호", type: "text", defaultVisible: false, width: 130 },
  { key: "16조회통화자", label: "조회통화자", type: "select", defaultVisible: false, width: 100 },
  { key: "17최초컨택자", label: "최초컨택자", type: "person", defaultVisible: true, width: 100 },
  { key: "18계약담당자", label: "계약담당자", type: "person", defaultVisible: true, width: 100 },
  { key: "1차 담당자", label: "1차 담당자", type: "person", defaultVisible: true, width: 100 },
  { key: "19계약서작성일", label: "계약서작성일", type: "date", defaultVisible: true, width: 110 },
  { key: "20확정수수료", label: "확정수수료", type: "number", defaultVisible: true, width: 120, format: "currency" },
  { key: "21경정청구신청일", label: "경정청구신청일", type: "date", defaultVisible: false, width: 130 },
  { key: "22인용확인일", label: "인용확인일", type: "date", defaultVisible: false, width: 110 },
  { key: "23최종업데이트일시", label: "최종업데이트", type: "last_edited_time", defaultVisible: true, width: 130 },
  { key: "24최종편집자", label: "최종편집자", type: "last_edited_by", defaultVisible: false, width: 100 },
  { key: "25전체 수수료", label: "전체 수수료", type: "formula", defaultVisible: false, width: 120 },
  { key: "26환급금승인3개월이후", label: "승인3개월이후", type: "formula", defaultVisible: false, width: 120 },
  { key: "27환급금승인완료7일7일갱신", label: "승인7일갱신", type: "formula", defaultVisible: false, width: 120 },
  { key: "28환급금승인완료10일", label: "승인완료10일", type: "formula", defaultVisible: false, width: 120 },
  { key: "29예상수수료", label: "예상수수료", type: "number", defaultVisible: false, width: 120, format: "currency" },
  { key: "30반론유형", label: "반론유형", type: "multi_select", defaultVisible: false, width: 160 },
  { key: "31보완처리마감일", label: "보완처리마감일", type: "date", defaultVisible: false, width: 130 },
  { key: "32선정산 날짜", label: "선정산 날짜", type: "date", defaultVisible: false, width: 110 },
  { key: "33후정산 날짜", label: "후정산 날짜", type: "date", defaultVisible: false, width: 110 },
  { key: "34일주일이내수금", label: "일주일이내수금", type: "formula", defaultVisible: false, width: 120 },
  { key: "35수금마감일", label: "수금마감일", type: "formula", defaultVisible: false, width: 110 },
  { key: "36수금완료", label: "수금완료", type: "formula", defaultVisible: false, width: 100 },
  { key: "37일차영업팀소속", label: "1차영업팀소속", type: "select", defaultVisible: false, width: 130 },
  { key: "38이차영업팀소속", label: "2차영업팀소속", type: "select", defaultVisible: false, width: 130 },
  { key: "39계약담당자소속", label: "계약담당자소속", type: "select", defaultVisible: false, width: 130 },
  { key: "40수금완료일", label: "수금완료일", type: "date", defaultVisible: false, width: 110 },
  { key: "41계약취하일", label: "계약취하일", type: "date", defaultVisible: false, width: 110 },
  { key: "42기장계약진행상태", label: "기장계약진행상태", type: "select", defaultVisible: false, width: 140 },
  { key: "43예상매출이익", label: "예상매출이익", type: "formula", defaultVisible: false, width: 120 },
  { key: "44확정매출이익", label: "확정매출이익", type: "formula", defaultVisible: false, width: 120 },
  { key: "45기장계약일", label: "기장계약일", type: "date", defaultVisible: false, width: 110 },
  { key: "46월기장료", label: "월기장료", type: "number", defaultVisible: false, width: 100 },
  { key: "47조정료", label: "조정료", type: "number", defaultVisible: false, width: 100 },
  { key: "48계약보류한달후", label: "계약보류한달후", type: "formula", defaultVisible: false, width: 120 },
  { key: "49계약보류두달후", label: "계약보류두달후", type: "formula", defaultVisible: false, width: 120 },
  { key: "50계약보류일", label: "계약보류일", type: "date", defaultVisible: false, width: 110 },
  { key: "51계약취하정산반영일", label: "계약취하정산반영일", type: "date", defaultVisible: false, width: 140 },
  { key: "52사업장주소지", label: "사업장주소지", type: "text", defaultVisible: false, width: 200 },
  { key: "53이메일", label: "이메일", type: "email", defaultVisible: false, width: 180 },
  { key: "54DB분류", label: "DB분류", type: "multi_select", defaultVisible: false, width: 140 },
  { key: "54환급금승인완료일주일오늘", label: "승인일주일오늘", type: "formula", defaultVisible: false, width: 130 },
  { key: "55환급금승인완료삼일오늘", label: "승인삼일오늘", type: "formula", defaultVisible: false, width: 120 },
  { key: "56방문일시", label: "방문일시", type: "date", defaultVisible: false, width: 110 },
  { key: "57당일리마인더", label: "당일리마인더", type: "checkbox", defaultVisible: false, width: 110 },
  { key: "58업종", label: "업종", type: "text", defaultVisible: false, width: 120 },
  { key: "AID", label: "AID", type: "formula", defaultVisible: false, width: 80 },
  { key: "검토보고서", label: "검토보고서", type: "file", defaultVisible: false, width: 100 },
  { key: "경정청구 신고서", label: "경정청구 신고서", type: "file", defaultVisible: false, width: 120 },
  { key: "계약리드타임", label: "계약리드타임", type: "formula", defaultVisible: false, width: 110 },
  { key: "녹취 계약 파일", label: "녹취 계약 파일", type: "file", defaultVisible: false, width: 120 },
  { key: "수수료 청구서", label: "수수료 청구서", type: "file", defaultVisible: false, width: 120 },
  { key: "전자계약서", label: "전자계약서", type: "file", defaultVisible: false, width: 100 },
  { key: "최종 편집 일시", label: "최종 편집 일시", type: "last_edited_time", defaultVisible: false, width: 130 },
  { key: "01발송체크", label: "발송체크", type: "checkbox", defaultVisible: false, width: 80 },
  { key: "02발송상태", label: "발송상태", type: "status", defaultVisible: false, width: 100 },
];

export const DEFAULT_VISIBLE = new Set(
  COLUMNS.filter((c) => c.defaultVisible).map((c) => c.key)
);
