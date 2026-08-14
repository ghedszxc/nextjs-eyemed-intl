import { getCoreMediaUrl } from "@/logic/utilities";
import mock from "@/logic/mocks/faker";

describe("getCoreMediaUrl test", () => {
  it("Returns formatted coremedia URL for frontend", () => {
    const result = getCoreMediaUrl("coremedia://cap/content/id");
    expect(result).toEqual(`${window.location.origin}/cap/content/id/`);
  });

  it("Returns normal URL for non coremedia URL", () => {
    const url = mock.faker.internet.url();
    const result = getCoreMediaUrl(url);

    expect(result).toEqual(url);
  });
});
