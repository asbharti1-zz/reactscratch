
import { render, fireEvent } from 'test-utils';
import App from "./App"



describe("when setting up test", ()=>{

    it('render landing', () => { 
        render(<App name="Sanjay" a={20} b={30}/>);
    });

});