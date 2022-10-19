import React, { useState } from 'react'
import "../App.css";
const PopUpAnswer = ({message, style, nextQuiz }) => {

    

  return (
    <div className={`${style}`}>
        <p>{message}</p>
        <button onClick={nextQuiz} className='btn'>
            AVANTI
        </button>
    </div>
  )
}

export default PopUpAnswer