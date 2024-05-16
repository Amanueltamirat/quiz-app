import React, { useContext } from 'react'
import { QuestionsContext } from '../helpers/Context'
import { Questions } from '../helpers/Questions';

function ResultScreen() {

const {score, setScore, quizState, setQuizeState} = useContext(QuestionsContext)

const restartQuiz = () => {
    setScore(0);
    setQuizeState("menu");
  };


  return (
    <div>
<h1>Quiz Finished</h1>
<h1>
        You Scored {score} / {Questions.length}
      </h1>
      <button className='next' onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default ResultScreen