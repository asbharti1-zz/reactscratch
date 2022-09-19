import React from 'react'
import PropTypes from 'prop-types';

import { processTable} from '../jsonshema';
import Footer from './footer';
import Continue from './continue';
import Turn from './turn';
import Hero from './hero';
function Sum(props) {
    return (
        <h1> Author  Quiz {props.a} +{props.b} = {props.a +props.b}</h1>
    );
}


Sum.propTypes = {
    a: PropTypes.number.isRequired,
    b:PropTypes.number.isRequired
}

function AuthorQuiz( {...props}) {
  return (
    <div className='container-fluid'>
      <Hero/>
      <Turn/>
      <Continue/>
      <Footer/>
    </div>
  )
}

export default AuthorQuiz