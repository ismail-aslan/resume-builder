import { render } from "@testing-library/react";
import Logo from ".";

describe("Logo component", () => {
  it("renders with correct styles and text", () => {
    const { getByText } = render(<Logo />);

    const logoElement = getByText("Ismail Aslan");

    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveStyle("color: var(--color-text)");
    expect(logoElement).toHaveClass(
      "inline-block font-agustina p-4 md:text-4xl font-bold transform -rotate-6 m-10"
    );
  });
});
