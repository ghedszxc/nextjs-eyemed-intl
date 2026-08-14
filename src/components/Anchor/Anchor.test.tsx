import { render, screen } from "@testing-library/react";
import mock from "@/logic/mocks/faker";
import Anchor from "./Anchor";

describe("Anchor tag", () => {
  it("Akamai URL works correctly", async () => {
    const mockHref = mock.faker.internet.url();
    const mockLabel = mock.faker.word.adverb();

    render(<Anchor href={mockHref}>{mockLabel}</Anchor>);
    const url = await screen.getByRole("link");

    expect(url).toHaveAttribute("href", mockHref);
  });
});
