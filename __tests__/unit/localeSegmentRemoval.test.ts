import { localeSegmentRemoval } from "@/logic/utilities";

describe("localeSegmentRemoval test", () => {
  it("localeSegmentRemoval returns staring without the CM extra character ex. OS-, EL-, EM-", () => {
    const segment = localeSegmentRemoval("/em-en/our-solution/");

    expect(!segment.includes("em-")).toBeTruthy();
  });
});
