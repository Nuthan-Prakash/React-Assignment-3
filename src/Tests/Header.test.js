import { render, screen } from "@testing-library/react";
import { Header } from "../Components/Header/Header";

describe("Header component", () => {
  test("renders the text owner", () => {
    render(<Header />);
    const linkElement = screen.getByText(/owner/i);
    expect(linkElement).toBeInTheDocument();
  });
});
