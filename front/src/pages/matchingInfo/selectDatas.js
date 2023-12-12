export const regions = [
  { value: "init", label: "전체 ▼" },
  { value: "seoul", label: "서울" },
  { value: "daegu", label: "대구" },
];
export const region_details = {
  init: [
    { value: "detail_all", label: "구/시/군 ▼" },
    { value: "message", label: "지역을 선택해주세요." },
  ],
  seoul: [
    { value: "detail_all", label: "구/시/군 ▼" },
    { value: "서울1", label: "서울1" },
    { value: "서울2", label: "서울2" },
  ],
  daegu: [
    { value: "region_detail_all", label: "구/시/군 ▼" },
    { value: "대구1", label: "대구1" },
    { value: "대구2", label: "대구2" },
  ],
};

export const period_years = [];
for (let i = 1; i <= 9; i++) {
  period_years.push({
    value: `period_year${i}`,
    label: `${i}년`,
  });
}
period_years.unshift({
  value: "periodYearAll",
  label: "년 ▼",
});
period_years.push({
  value: "period_year10",
  label: "10년 이상",
});

export const period_months = [];
for (let i = 1; i <= 11; i++) {
  period_months.push({
    value: `period_month${i}`,
    label: `${i}개월`,
  });
}
period_months.unshift({
  value: "periodMonthAll",
  label: "개월 ▼",
});

export const period_weeks = [];
for (let i = 1; i <= 4; i++) {
  period_weeks.push({
    value: `period_week${i}`,
    label: `${i}주`,
  });
}
period_weeks.unshift({
  value: "periodWeekAll",
  label: "주 ▼",
});

export const period_days = [];
for (let i = 1; i <= 6; i++) {
  period_days.push({
    value: `period_day${i}`,
    label: `${i}일`,
  });
}
period_days.unshift({
  value: "periodDayAll",
  label: "일 ▼",
});

export const conditions = [
  { value: "conditionAll", label: "전체 ▼" },
  { value: "condition1", label: "조건1" },
  { value: "condition2", label: "조건2" },
];

export const condition_details = [
  { value: "conditionDetailAll", label: "상세조건 ▼" },
  { value: "condition_detail1", label: "상세조건1" },
  { value: "condition_detail2", label: "상세조건2" },
];
