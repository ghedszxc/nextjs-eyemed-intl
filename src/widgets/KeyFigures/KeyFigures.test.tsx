import { render, screen } from "@testing-library/react";
import mock from "@/logic/mocks/faker";
import KeyFigures from ".";
import { IKeyFigure } from "./KeyFigures.interface";

describe("KeyFigures unit test", () => {
  it("KeyFigures renders correctly", async () => {
    const keyFigures1: IKeyFigure = {
      value: mock.faker.number.int({ min: 10, max: 20000 }).toString(),
      description: mock.faker.company.buzzPhrase(),
    };

    const keyFigures2: IKeyFigure = {
      value: mock.faker.number.int({ min: 10, max: 20000 }).toString(),
      description: mock.faker.company.buzzPhrase(),
    };

    render(<KeyFigures keyFigures={[keyFigures1, keyFigures2]} />);

    const title1 = await screen.getByText(keyFigures1.value);
    const bodyText1 = await screen.getByText(keyFigures1.description);

    const title2 = await screen.getByText(keyFigures2.value);
    const bodyText2 = await screen.getByText(keyFigures2.description);

    expect(title1).toBeInTheDocument();
    expect(bodyText1).toBeInTheDocument();

    expect(title2).toBeInTheDocument();
    expect(bodyText2).toBeInTheDocument();
  });
});
