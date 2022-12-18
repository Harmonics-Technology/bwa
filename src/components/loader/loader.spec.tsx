import { render } from "test";

import Loader from "./loader";

describe("Loader component tests", () => {
  it("renders without crashing", () => {
    const view = render(<Loader />);

    expect(view).toBeTruthy();
  });

  it("snapshot test", () => {
    const view = render(<Loader />);

    expect(view).toMatchSnapshot();
  });
});
