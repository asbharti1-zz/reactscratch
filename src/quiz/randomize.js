
import {shuffle,sample} from "underscore";

const Randomizer = () => {
    
    return {
        authors : [
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
          ],
        getAllBooks : function(authors){
                if(!authors){
                    authors = this.authors;
                }
                const allBooks = authors.reduce(function (p, c, i) {
                return p.concat(c.books);
            }, []);
            return allBooks;
        },
        fourRandomBooks : function(allbooks){
            return shuffle(allbooks).slice(0,4);
        },
        answer: function(randomBooks){
            return sample(randomBooks)
        },
        getSingleQuiz: function(authors){
            if(!authors){
                authors = this.authors;
            }
            let allBooks1 = this.getAllBooks(authors);
            let fourRandomBooks1 = this.fourRandomBooks(allBooks1);
            let answer1 = this.answer(fourRandomBooks1)
            return {
                
                books: fourRandomBooks1,
                author: authors.find((author) => 
                    author.books.some((title) => 
                        title === answer1))
            };
        }

    };

    
}

export default Randomizer;