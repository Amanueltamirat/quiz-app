// import React, { useContext, useState } from 'react'
// import { QuestionsContext } from '../helpers/Context'
// import {motion} from 'framer-motion'

// function MenuScreen({setIsVisible}) {

// const {quizState, category, setCategory,setQuizeState, userName, setUserName } = useContext(QuestionsContext)

//   const showContent = () => {
//     setIsVisible(true);
//   };
//   return (
//     <div className='menu'>
//       <h2> <span>Hello Mr.<strong>X</strong></span> Start your quiz</h2>
//       <motion.button
//       className='start-btn'
//         onClick={() => {
//           setQuizeState("playing");
//           showContent()
//         }}
//       >
//         Start Quiz
//       </motion.button>
//     </div>
//   )
// }

// export default MenuScreen