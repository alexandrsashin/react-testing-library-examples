import {
  cleanup,
  fireEvent,
  screen,
  render,
  RenderResult,
} from "@testing-library/react";
import Input from "..";

const onChange = jest.fn();

describe("<Input />", () => {
  let view: RenderResult;

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  describe("with type=text", () => {
    beforeEach(() => {
      view = render(
        <Input name="name" value={undefined} type="text" onChange={onChange} />
      );
    });

    it("should render", () => {
      expect(view.asFragment()).toMatchSnapshot();
    });

    it("onChange() is called after input change", () => {
      const input = screen.getByRole("textbox");

      fireEvent.change(input, { target: { value: "test text" } });
      expect(onChange).toHaveBeenCalledWith({
        name: "name",
        value: "test text",
        valueAsNumber: NaN,
      });
    });
  });

  describe("with type=number", () => {
    beforeEach(() => {
      view = render(
        <Input
          name="name"
          value={undefined}
          type="number"
          onChange={onChange}
        />
      );
    });

    it("should render", () => {
      expect(view.asFragment()).toMatchSnapshot();
    });

    it("onChange() is called after input change", () => {
      const input = screen.getByRole("spinbutton");

      fireEvent.change(input, { target: { value: "4" } });
      expect(onChange).toHaveBeenCalledWith({
        name: "name",
        value: "4",
        valueAsNumber: 4,
      });
    });
  });
});
