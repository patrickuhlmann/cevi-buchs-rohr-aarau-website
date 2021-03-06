import { formatDateFilter } from "@/filters";

describe("DateFilter", () => {
  test("format a date", () => {
    expect(formatDateFilter(new Date(2021, 0, 1))).toBe("01.01.2021");
  });
  test("format null gives empty string", () => {
    expect(formatDateFilter(null)).toBe("");
  });
});
