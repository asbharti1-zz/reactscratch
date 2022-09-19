import React, { useContext } from 'react'
import AuthorQuiz from '.'
import { booksContext } from '../../'

function Book({title , onClick}){
    return (
        <div className='answer' onClick={(event =>{ onClick(title)})}>
            <h4>{title}</h4>
        </div>
    );
}


function Turn( {author,books,highlight}) {
  const data = useContext(booksContext);
  highlight = data.highlight;
  console.log(highlight);

  const quizd = {...data.turnData};

    const highlightToBgColor = (highlight) =>{
        const mapping ={
            'none':'',
            'correct':'green',
            'wrong':'red'

        }
        return mapping[highlight];
    }

    const onAnswerSelected = (answer) =>{
        const isCorrect = data.turnData.author.books.some((book) => book === answer);
        console.log(isCorrect)
        if(isCorrect){
            highlight = 'correct'
        }else{
            highlight = 'wrong'
        }
    }

  console.log(quizd);
  return (
    <div className='row turn' style={{backgroundColor : highlightToBgColor(highlight)}}>
        <div className='col-4 offset-1'>
            <img src={quizd.author.imageUrl} className="authorimage" alt='Author'/>
        </div>
        <div className='col-6'>
                {
                    quizd.books.map((title,i) => <Book title ={title} key={i} onClick ={onAnswerSelected}/>)
                }
        </div>
    </div>
  )
}

export default Turn