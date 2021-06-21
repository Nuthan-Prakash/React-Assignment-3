import { render, screen } from "@testing-library/react";
import { Footer } from "../Components/Footer/Footer";

describe("Footer component", () => {
  test("renders the text copyrights", () => {
    render(<Footer />);
    const linkElement = screen.getByText(/copyrights/i);
    expect(linkElement).toBeInTheDocument();
  });
});
