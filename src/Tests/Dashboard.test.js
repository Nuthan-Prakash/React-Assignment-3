import { render, screen } from "@testing-library/react";
import { Dashboard } from "../Components/Dashboard/Dashboard";

describe("Dashboard component", () => {
  test("renders table", async () => {
    render(<Dashboard />);
    const linkElement = await screen.findAllByRole('table')
    expect(linkElement).not.toHaveLength(0);
  });

  test("render issues", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
        json : async () =>[{id:'1',title:'test',user:'Nuthan'}]
    });
    render(<Dashboard />);
    const linkElement = await screen.findAllByRole('table')
    expect(linkElement).toHaveLength(1);
  });
});
