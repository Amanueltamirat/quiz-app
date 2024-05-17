import React, { useContext } from 'react'
import img1 from '../images/english.avif';
import img2 from '../images/mathematics.jpg';
import img3 from '../images/tech.avif';
import img4 from '../images/mixed.avif'
import { QuestionsContext } from '../helpers/Context';



function Category({setIsVisible}) {
    const {quizState, category, setCategory,setQuizeState, userName, setUserName } = useContext(QuestionsContext)

const showContent = () => {
    setIsVisible(true);
  };
  return (
    <div className='categorys'>
        <h1>Categorys</h1>
        <div className='sub-categorys'>
            <div id='en' onClick={() => {
          setCategory('english')
          showContent()
        }}>
               <img src={img1} alt=' En'/>
               <h2> English</h2>
            </div>
            <div id='mathematics' 
            onClick={() => {
          setQuizeState("playing");
          setCategory('mathematics')
          showContent()
        }}
            >
                <img src={img2} alt='Mathematics'/>
               <h2>Mathematics</h2>
                
            </div>
            <div id='it' 
             onClick={() => {
          setCategory('it')
          showContent()
    
        }}
            >
                 <img src={img3} alt='IT'/>
               <h2>IT</h2>
                
            </div>
            <div id='random' 
             onClick={() => {
       
          setCategory('random')
          showContent()
        }}
            >
                  <img src={img4} alt=' Random'/>
               <h2> Random</h2>
               
            </div>
        </div>
    </div>
  )
}

export default Category