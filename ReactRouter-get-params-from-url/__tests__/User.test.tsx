import { cleanup, render, RenderResult } from "@testing-library/react";
import User from "..";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    userId: "1",
  }),
}));

describe("<User />", () => {
  let view: RenderResult;

  beforeEach(() => {
    view = render(<User />);
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it("should render", () => {
    expect(view.asFragment()).toMatchSnapshot();
  });
});
