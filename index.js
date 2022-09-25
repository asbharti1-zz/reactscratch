import React, { createContext, useContext } from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import {shuffle,sample} from "underscore";
import Randomizer from "./src/quiz/randomize";


const state = {
  turnData : Randomizer().getSingleQuiz(),
  highlight:'',
  setHighlight:(highlight)=>{ state.highlight= highlight}
}
export const booksContext = createContext();
const root = ReactDOMClient.createRoot(document.getElementById("app"));
root.render(
  
    <booksContext.Provider value={{...state}}>
    <App/>
    </booksContext.Provider>
);


