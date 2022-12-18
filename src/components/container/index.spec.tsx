import { render } from "test";

import { Container } from "./index";

describe("Wrapper component testing with testing-library", () => {
  const view = render(<Container> </Container>);

  it("renders without crashing", () => {
    expect(view).toBeTruthy();
  });
});
