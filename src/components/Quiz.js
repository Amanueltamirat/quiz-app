import React, { useContext, useRef, useState } from 'react'
import { Questions } from '../helpers/Questions'
import { QuestionsContext } from '../helpers/Context'
import {NavLink, useLocation} from 'react-router-dom'
import {AnimatePresence, inView, motion} from 'framer-motion'


const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

function Quiz({isVisible}) {

const [currentQuestion, setCurrentQuestion] = useState(0)
const [chosenOption, setChosenOption] = useState('')
const {score, setScore, quizState, setQuizeState} = useContext(QuestionsContext)
const [active, setActive] = useState('')
  const chooseOption = (option) => {
    setChosenOption(option);
  };
 const handleClick = (event) => {
    setActive(event.target.id);
    
  }
  const nextQuestion = () => {
    if (Questions[currentQuestion].asnwer == chosenOption) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setActive('')

  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].asnwer == chosenOption) {
      setScore(score + 1);
    }
    setQuizeState("finished");
    console.log('Finished')
  };




  return (
    <div>
        <h1>{Questions[currentQuestion].question}</h1>
       <motion.div
        //   initial={{ opacity: 0 }}
        //   animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        //   transition={{ duration: 0.5 }}
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
          A. {Questions[currentQuestion].A}
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
          B. {Questions[currentQuestion].B}
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
        
        //   className={`${isActive ? 'active':'not-active'}`}
        >
          C. {Questions[currentQuestion].C}
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
        //   className={`${isActive ? 'active':'not-active'}`}
        >
         D. {Questions[currentQuestion].D}
        </motion.button>
        </AnimatePresence>
       </motion.div>
       
      {currentQuestion == Questions.length - 1 ? (
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

export default Quiz