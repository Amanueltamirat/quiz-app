import React, { useContext } from 'react'
import { QuestionsContext } from '../helpers/Context'
import { EnglishQuestions, MathsQuestions, Questions, RandomQuestions } from '../helpers/Questions';

function ResultScreen() {

const {score, setScore, quizState,category ,setCategory, setQuizeState} = useContext(QuestionsContext)

const restartQuiz = () => {
    setScore(0);
    // setQuizeState("menu");
    setCategory('category')
  };


  return (
    <div className='result-screen'>

<h2>
        You Scored 
        
        {quizState === 'english' && ` ${score} / ${EnglishQuestions.length}`}
        {quizState === 'it' && ` ${score} / ${Questions.length}`}
        {quizState === 'mathematics' && ` ${score} / ${MathsQuestions.length}`}
        {quizState === 'random' && ` ${score} / ${RandomQuestions.length}`}
      </h2>
      <button className='next' onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default ResultScreen