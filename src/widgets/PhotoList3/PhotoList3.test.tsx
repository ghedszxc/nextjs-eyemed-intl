import { render, screen } from "@testing-library/react";
import mock from "@/logic/mocks/faker";
import PhotoList3 from ".";
import PhotoList from "./PhotoList3Photo";
describe("Photolist3 unit test", () => {
  it("Photolist3 renders correctly", async () => {
    const mockLongtext = mock.faker.commerce.productDescription();
    const mockTitle = mock.faker.company.name();

    render(
      <PhotoList3
        header1={mockTitle}
        header2={mockLongtext}
        padding="both"
        photoList={[{ imgUri: "", longText: "", title: "" }]}
      />
    );

    const title = await screen.findByText(mockTitle);
    const longtext = await screen.findByText(mockLongtext);

    expect(title).toBeInTheDocument();
    expect(longtext).toBeInTheDocument();
  });

  it("PhotoList item renders correctly", async () => {
    const mockLongtext = mock.faker.commerce.productDescription();
    const mockTitle = mock.faker.company.name();
    const randomPhoto = mock.faker.image.url();

    render(
      <PhotoList
        longText={mockLongtext}
        title={mockTitle}
        imgUri={randomPhoto}
      />
    );

    const longText = await screen.findByText(mockLongtext);
    const title = await screen.findByText(mockTitle);

    expect(longText).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
