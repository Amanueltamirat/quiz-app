import React, { useContext, useState } from 'react'
import { QuestionsContext } from '../helpers/Context'
import {motion} from 'framer-motion'

function MenuScreen({setIsVisible}) {

const {quizState, setQuizeState, userName, setUserName } = useContext(QuestionsContext)

  const showContent = () => {
    setIsVisible(true);
  };
  return (
    <div className='menu'>
         {/* <label>Enter Your Name:</label>
      <input
        type="text"
        placeholder="Ex. John Smith"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      /> */}
      <h2>Start your quiz</h2>
      <motion.button
      className='start-btn'
        onClick={() => {
          setQuizeState("playing");
          showContent()
        }}
      >
        Start Quiz
      </motion.button>
    </div>
  )
}

export default MenuScreen