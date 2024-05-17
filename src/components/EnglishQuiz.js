import React, { useContext, useState } from 'react'
import { QuestionsContext } from '../helpers/Context'
import {NavLink, useLocation} from 'react-router-dom'
import {AnimatePresence, inView, motion} from 'framer-motion'
import { EnglishQuestions } from '../helpers/Questions'

const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

function EnglishQuiz({isVisible}) {

const [currentQuestion, setCurrentQuestion] = useState(0)
const [chosenOption, setChosenOption] = useState('')
const {score, setScore, quizState, setQuizeState,category, setCategory} = useContext(QuestionsContext)
const [active, setActive] = useState('')
let missedQuestions = []
  const chooseOption = (option) => {
    setChosenOption(option);
  };
 const handleClick = (event) => {
    setActive(event.target.id);
    
  }
  const nextQuestion = () => {
    if (EnglishQuestions[currentQuestion].asnwer == chosenOption) {
      setScore(score + 1);
    }
    else if (EnglishQuestions[currentQuestion].asnwer !== chosenOption){
      missedQuestions.push(EnglishQuestions[currentQuestion])
    }
    setCurrentQuestion(currentQuestion + 1);
    setActive('')

  };

  const finishQuiz = () => {
    if (EnglishQuestions[currentQuestion].asnwer == chosenOption) {
      setScore(score + 1);
    }
    setQuizeState("english");
    setCategory('finished')
    
console.log(missedQuestions)
  };



  return (
    <div className='question-box'>
        <h1>Q.{currentQuestion + 1}: {EnglishQuestions[currentQuestion].question}</h1>
       <motion.div
         className='choose-option'>
        <AnimatePresence>
         <motion.button
         id={'1'}
         className={active === "1" ? "active" : "not-active"} 
          variants={{
                loading: { opacity: 0 },
                entering: { opacity: 1 },
                exiting: { opacity: 0 }
            }}
      initial="loading"
      animate={isVisible ? "entering" : "exiting"}
    //   animate="entering"
      exit="exiting"
      transition={{delay:0.1}}
        //   className={`${isActive? 'active':'not-active'}`}
          onClick={(e) => {
            handleClick(e)
            chooseOption("A");
          }}

        >
          A. {EnglishQuestions[currentQuestion].A}
        </motion.button>
        <motion.button
          id={'2'}
          className={active === "2" ? "active" : "not-active"} 
          variants={{
              loading: { opacity: 0 },
              entering: { opacity: 1 },
              exiting: { opacity: 0 }
            }}
            initial="loading"
            exit="exiting"
            animate={isVisible ? "entering" : "exiting"}
    //   animate="entering"  
            transition={{delay:0.25}}
          onClick={(e) => {
            handleClick(e)
            chooseOption("B");
          }}
        //   className={`${isActive ? 'active':'not-active'}`}
        >
          B. {EnglishQuestions[currentQuestion].B}
        </motion.button>
        <motion.button
        id={'3'}
         className={active === "3" ? "active" : "not-active"} 
         variants={{
        loading: { opacity: 0 },
        entering: { opacity: 1 },
        exiting: { opacity: 0 }
      }}
        initial="loading"
        exit="exiting"
        animate={isVisible ? "entering" : "exiting"}
        transition={{delay:0.35}}
          onClick={(e) => {
            handleClick(e)
            chooseOption("C");
          }}
        >
          C. {EnglishQuestions[currentQuestion].C}
        </motion.button>
        <motion.button
        id={'4'}
         className={active === "4" ? "active" : "not-active"} 
        variants={{
        loading: { opacity: 0 },
        entering: { opacity: 1 },
        exiting: { opacity: 0 }
      }}
        initial="loading"
        exit="exiting"
        animate={isVisible ? "entering" : "exiting"}
        transition={{delay:0.45}}
          onClick={(e) => {
            handleClick(e)
            chooseOption("D");
          }}
        >
         D. {EnglishQuestions[currentQuestion].D}
        </motion.button>
        </AnimatePresence>
       </motion.div>
       
      {currentQuestion == EnglishQuestions.length - 1 ? (
        <button className=' next' onClick={()=>finishQuiz()} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button className=' next' onClick={()=>
        {
        nextQuestion()

        }
        } id="nextQuestion">
          Next Question
        </button>
      )}
    </div>
  )
}

export default EnglishQuiz