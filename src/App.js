import { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import { QuestionsContext } from './helpers/Context';
import MenuScreen from './components/MenuScreen';
import ResultScreen from './components/ResultScreen';
import Category from './components/Category';
import { EnglishQuestions } from './helpers/Questions';
import EnglishQuiz from './components/EnglishQuiz';
import MathsQuiz from './components/MathsQuiz';
import RandomQuiz from './components/RandomQuiz';

function App() {


  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [category, setCategory]  = useState('category')
  const [quizState, setQuizeState] = useState("menu");
  return (
    <div className='app'>
      <QuestionsContext.Provider
        value={{
          quizState,
          setQuizeState,
          userName,
          setUserName,
          score,
          setScore,
          category, 
          setCategory
        
        }}
      >
        <div className='header-box' onClick={()=>{
          setCategory('category')
        }}>
          <h1>React Quiz</h1>
        </div>
        {/* <Category/>  */}
        {category === "category" && <Category setIsVisible={setIsVisible} />}
        {category === "english" && <EnglishQuiz isVisible={isVisible} />}
        {category === "it" && <Quiz isVisible={isVisible} />}
        {category === "mathematics" && <MathsQuiz isVisible={isVisible} />}
        {category === "random" && <RandomQuiz isVisible={isVisible} />}
        {category === "finished" && <ResultScreen />}
        
      </QuestionsContext.Provider>
        
    </div>
  );
}

export default App;
