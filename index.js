import React, { createContext, useContext } from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import {shuffle,sample} from "underscore";

const authors = [
  {
    name: 'Mark Twain',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['The Adventures of Huckleberry Finn',"Life on the Missisipi"]
  },
  {
    name: 'Joseph Conrad',
    imageUrl: 'images/authors/josephconrad.png',
    imageSource: 'Wikimedia Commons',
    books: ['Heart of Darkness']
  },
  {
    name: 'J.K. Rowling',
    imageUrl: 'images/authors/jkrowling.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Daniel Ogren',
    books: ['Harry Potter and the Sorcerers Stone']
  },
  {
    name: 'Stephen King',
    imageUrl: 'images/authors/stephenking.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Pinguino',
    books: ['The Shining', 'IT']
  },
  {
    name: 'Charles Dickens',
    imageUrl: 'images/authors/charlesdickens.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['David Copperfield', 'A Tale of Two Cities']
  },
  {
    name: 'William Shakespeare',
    imageUrl: 'images/authors/williamshakespeare.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
  }
];
 const getTurnData = (authors) =>{
  const allBooks = authors.reduce(function (p, c, i) {
    return p.concat(c.books);
}, []);
const fourRandomBooks = shuffle(allBooks).slice(0,4);
const answer = sample(fourRandomBooks);

return {
    books: fourRandomBooks,
    author: authors.find((author) => 
        author.books.some((title) => 
            title === answer))
}
 }
const state ={
  turnData: getTurnData(authors),
  highlight:'correct'
}

export const booksContext = createContext();
const root = ReactDOMClient.createRoot(document.getElementById("app"));
root.render(
  
    <booksContext.Provider value={{...state}}>
    <App/>
    </booksContext.Provider>
);
