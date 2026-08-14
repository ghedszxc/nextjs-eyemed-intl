import { render, screen } from "@testing-library/react";
import mock from "@/logic/mocks/faker";
import PhotoList2 from ".";
import PhotoList from "./PhotoList2Photo";

describe("Photolist2 unit test", () => {
  it("Photolist2 renders correctly", async () => {
    const mockLongtext = mock.faker.commerce.productDescription();
    const mockTitle = mock.faker.company.name();

    render(
      <PhotoList2
        longText={mockLongtext}
        sectionTitle={mockTitle}
        padding="both"
        photoList={[]}
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

    const mockUrl = mock.faker.internet.url();
    const randomPhoto = mock.faker.image.url();

    render(
      <PhotoList
        cta={{ label: "", url: mockUrl }}
        longText={mockLongtext}
        photos={randomPhoto}
        title={mockTitle}
      />
    );

    const longText = await screen.findByText(mockLongtext);
    const title = await screen.findByText(mockTitle);
    const url = await screen.getByRole("link");

    expect(longText).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(url).toHaveAttribute("href", mockUrl);
  });
});
