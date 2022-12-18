import { render } from "test";

import Pagination from "./pagination";
import { MemoryRouter } from "react-router-dom";

describe("Pagination component tests", () => {
  it("renders without crashing", () => {
    const view = render(<Pagination total_count={30} />);
    expect(view).toBeTruthy();
  });

  it("snapshot test", () => {
    const view = render(<Pagination total_count={30} />);
    expect(view).toMatchSnapshot();
  });
});
