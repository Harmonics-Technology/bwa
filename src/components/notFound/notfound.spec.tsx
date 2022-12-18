import { ErrorResponse } from "interfaces/errorResponse";
import { render } from "test";

import  NotFound  from "./notFound";

const sampleData : ErrorResponse ={
    documentation_url: "https://developer.github.com/v3",
    message: "Not Found",

}

describe("NotFound component tests", () => {
    const view = render(<NotFound message={sampleData.message}  
        documentation_url={sampleData.documentation_url}/>);
    it("renders without crashing", () => {
        expect(view).toBeTruthy();
    });

    it("snapshot test", () => {
        expect(view).toMatchSnapshot();
    });
});