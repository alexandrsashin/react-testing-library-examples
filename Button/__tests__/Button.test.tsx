import {
  cleanup,
  screen,
  render,
  RenderResult,
  fireEvent,
} from "@testing-library/react";
import Button from "..";

const onClick = jest.fn();

describe("<Button />", () => {
  let view: RenderResult;

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it("should render with type=button", () => {
    view = render(
      <Button type="button" onClick={onClick}>
        Button
      </Button>
    );

    expect(view.asFragment()).toMatchSnapshot();
  });

  it("should render with type=submit", () => {
    view = render(
      <Button type="submit" onClick={onClick}>
        Button
      </Button>
    );

    expect(view.asFragment()).toMatchSnapshot();
  });

  it("should render with type=reset", () => {
    view = render(
      <Button type="reset" onClick={onClick}>
        Button
      </Button>
    );

    expect(view.asFragment()).toMatchSnapshot();
  });

  it("onClick() is called after click", () => {
    render(
      <Button type="button" onClick={onClick}>
        Button
      </Button>
    );
    const button = screen.getByRole("button", { name: "Button" });

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
