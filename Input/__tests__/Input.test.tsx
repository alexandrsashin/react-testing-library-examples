import { cleanup, screen, render, RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

    it("onChange() is called after input change", async () => {
      const input = screen.getByRole("textbox");

      await userEvent.type(input, "test text");
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

    it("onChange() is called after input change", async () => {
      const input = screen.getByRole("spinbutton");

      await userEvent.type(input, "4");
      expect(onChange).toHaveBeenCalledWith({
        name: "name",
        value: "4",
        valueAsNumber: 4,
      });
    });
  });
});
