import { render, screen } from "@testing-library/react";
import TextColumn from ".";
import mock from "@/logic/mocks/faker";

describe("TextColumn test", () => {
  it("TextColumn renders properties", async () => {
    const bodyMock = mock.faker.commerce.productDescription();
    const titleMock = mock.faker.commerce.productName();

    render(<TextColumn bodyText={bodyMock} title1={titleMock} />);

    const body = await screen.getByText(bodyMock);
    const title = await screen.getByText(titleMock);

    expect(body).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
