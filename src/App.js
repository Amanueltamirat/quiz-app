import { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import { QuestionsContext } from './helpers/Context';
import MenuScreen from './components/MenuScreen';
import ResultScreen from './components/ResultScreen';

function App() {


    const [quizState, setQuizeState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
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
        }}
      >
        {quizState === "menu" && <MenuScreen setIsVisible={setIsVisible} />}
        {quizState === "playing" && <Quiz isVisible={isVisible} />}
        {quizState === "finished" && <ResultScreen />}
      </QuestionsContext.Provider>
    </div>
  );
}

export default App;
