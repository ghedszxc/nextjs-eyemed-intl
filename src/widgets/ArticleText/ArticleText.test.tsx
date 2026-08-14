import { render, screen } from "@testing-library/react";
import mock from "@/logic/mocks/faker";
import ArticleText from ".";

describe("ArticleText unit test", () => {
  it("Texts renders correctly", async () => {
    const mockH1 = mock.faker.company.name();
    const mockBody = mock.faker.company.catchPhraseDescriptor();

    render(<ArticleText bodyText={mockBody} title1={mockH1} padding="both" />);

    const title1 = await screen.getByText(mockH1);
    const bodyText = await screen.getByText(mockBody);

    expect(title1).toBeInTheDocument();
    expect(bodyText).toBeInTheDocument();
  });
});
