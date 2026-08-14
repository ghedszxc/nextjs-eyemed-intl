import "@testing-library/jest-dom";
import HeroBanner from "./";
import { render, screen } from "@testing-library/react";
import mock from "@/logic/mocks/faker";
import { getAdapterCroppings } from "@/logic/utilities";

const mockData = [
  {
    id: "6444",
    title: "",
    type: "CMPicture",
    viewtype: null,
    uriTemplate:
      "/caas/v1/media/6444/data/d720d5b6d0c9131967de16cfb5c67551/{cropName}/{width}/pic1.jpg",
    detailText: {text: ""},
    crops: [
      {
        aspectRatio: {
          height: 1,
          width: 2,
        },
        name: "heroBanner1140",
        sizes: [
          {
            height: 648,
            width: 1140,
          },
        ],
        minWidth: 1140,
      },
      {
        aspectRatio: {
          height: 1,
          width: 3,
        },
        name: "heroBanner1920",
        sizes: [
          {
            height: 1080,
            width: 1920,
          },
        ],
        minWidth: 1920,
      },
      {
        aspectRatio: {
          height: 6,
          width: 6,
        },
        name: "heroBanner375",
        sizes: [
          {
            height: 683,
            width: 668,
          },
        ],
        minWidth: 668,
      },
    ],
    data: {
      uri: "http://preview-stageinteyemed-eu.luxgroup.net/caas/v1/media/6444/data/picture/77ac3e68c631d53959b7b9b04293fe69.jpg",
      size: 736439,
      contentType: "image/jpeg",
    },
    subjectTaxonomy: [],
    teaserText: {text: null},
  },
];

describe("HeroBanner unit test", () => {
  it("Herobanner header renders   ", async () => {
    const randomTitle = mock.faker.company.catchPhrase();
    render(<HeroBanner variant="large" title1={randomTitle} />);

    const header = await screen.getByText(randomTitle);
    expect(header).toBeInTheDocument();
  });

  it("Herobanner fallback image works", async () => {
    const randomPhoto = mock.faker.image.url();

    render(<HeroBanner variant="large" fallbackImage={randomPhoto} />);

    const testImage = document.querySelector("img") as HTMLImageElement;
    expect(testImage.src).toContain(randomPhoto);
    expect(testImage.alt).toContain(randomPhoto);
  });

  it("Herobanner responsive image works", async () => {
    const randomPhoto = mock.faker.image.url();

    render(
      <HeroBanner
        variant="large"
        fallbackImage={randomPhoto}
        picture={getAdapterCroppings(mockData)[0]}
      />
    );

    const testImage = document.querySelector("img") as HTMLImageElement;
    expect(testImage.src).toContain(
      "https://preview-stageinteyemed-eu.luxgroup.net/caas/v1/media/6444/data/d720d5b6d0c9131967de16cfb5c67551/heroBanner375/668/pic1.jpg"
    );
    expect(testImage.alt).toContain(
      "https://preview-stageinteyemed-eu.luxgroup.net/caas/v1/media/6444/data/d720d5b6d0c9131967de16cfb5c67551/heroBanner375/668/pic1.jpg"
    );
  });
});
