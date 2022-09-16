
import { screen , render } from "@testing-library/react";
import App from "./App"



describe("when setting up test", ()=>{

    it('render landing', () => { 
        render(<App name="Sanjay" a={20} b={30}/>);
    });

});