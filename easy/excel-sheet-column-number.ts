//-----------------
// Treat the Excel column title as a base-26 number.
// Walk each uppercase letter, multiply the accumulator by 26, then add charCodeAt(0) - 64 (A=65 → 1).
//-----------------

const titleToNumber = (columnTitle: string) =>
  columnTitle
    .split("")
    .reduce((prev, curr) => prev * 26 + curr.charCodeAt(0) - 64, 0);
