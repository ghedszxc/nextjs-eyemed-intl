import { render, screen } from "@testing-library/react";
import LRDynamicText from ".";
import mock from "@/logic/mocks/faker";
import { getAkamayUrl } from "@/logic/utilities";

jest.mock("../../components/Icon/index", () => {
  return {
    __esModule: true,
    default: () => {
      return <div></div>;
    },
  };
});

describe("LRDynamicText test", () => {
  const header1Mock = mock.faker.book.title();
  const header2Mock = mock.faker.book.title();
  const longTextMock = mock.faker.commerce.productDescription();
  const pictureMock = getAkamayUrl(mock.faker.image.url());
  const videoMock = mock.faker.image.url();

  it("LRDynamicText renders properties", async () => {
    render(
      <LRDynamicText
        direction="left"
        header1={header1Mock}
        header2={header2Mock}
        longText={longTextMock}
        padding="both"
        picture={pictureMock}
        video={videoMock}
      />
    );

    const header1 = await screen.getByText(header1Mock);
    const header2 = await screen.getByText(header2Mock);
    expect(header1).toBeInTheDocument();
    expect(header2).toBeInTheDocument();

    const photo = await screen.getByRole("img");
    const src = photo.getAttribute("src")?.replace(/[?].*/, "");
    expect(src).toEqual(pictureMock);
  });

  it("LRDynamicText direction is left", async () => {
    render(
      <LRDynamicText
        direction="left"
        header1={header1Mock}
        header2={header2Mock}
        longText={longTextMock}
        padding="both"
        picture={pictureMock}
        video={videoMock}
      />
    );

    const wrapper = await screen.getByTestId("lrd-flex-wrapper");
    const isFlexReverse = wrapper
      .getAttribute("class")
      ?.includes("flex-row-reverse");

    expect(!isFlexReverse).toBeTruthy();
  });

  it("LRDynamicText direction is right", async () => {
    render(
      <LRDynamicText
        direction="right"
        header1={header1Mock}
        header2={header2Mock}
        longText={longTextMock}
        padding="both"
        picture={pictureMock}
        video={videoMock}
      />
    );

    const wrapper = await screen.getByTestId("lrd-flex-wrapper");
    const isFlexReverse = wrapper
      .getAttribute("class")
      ?.includes("flex-row-reverse");

    expect(isFlexReverse).toBeTruthy();
  });
});
