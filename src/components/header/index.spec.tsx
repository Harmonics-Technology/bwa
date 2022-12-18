import { render } from "test";

import { Header } from "./index";

describe("Header component testing with testing-library", () => {
  it("renders without crashing", () => {
    const view = render(<Header />);
    expect(view).toBeTruthy();
  });

  it("snapshot test", () => {
    const view = render(<Header />);
    expect(view).toMatchSnapshot();
  });
  
});
