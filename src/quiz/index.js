import React from 'react'
import PropTypes from 'prop-types';
function Sum(props) {
    return (
        <h1> Author  Quiz {props.a} +{props.b} = {props.a +props.b}</h1>
    );
}

Sum.propTypes = {
    a: PropTypes.number.isRequired,
    b:PropTypes.number.isRequired
}

function AuthorQuiz( props) {
  return (
    <div className='row'>
        <Sum a={props.a} b={props.b}/>
    </div>
  )
}

export default AuthorQuiz