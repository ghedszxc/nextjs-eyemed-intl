import mock from "@/logic/mocks/faker";
import { getAdapterImage } from "@/logic/utilities";

describe("getAdapterImage", () => {
  it("getAdapterImage return list of URL", () => {
    const mockdata = [
      { data: { uri: mock.faker.image.url() } },
      { data: { uri: mock.faker.image.url() } },
      { data: { uri: mock.faker.image.url() } },
      { data: { uri: mock.faker.image.url() } },
    ];

    const result = getAdapterImage(mockdata as []);

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toEqual(mockdata.length);
  });
});
