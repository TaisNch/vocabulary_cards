import Header from './header/Header';
import Card from './Card/Card';
import './Card/Card.css';
import data from '../data.json';
import { useState } from 'react';

function AllCards () {
  const [currentIndex, setCurrentIndex] =useState(0);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };
  return (
      <div>
         <Header/>
 <h2> Карточки слов</h2>
 <button onClick={handlePrev}> previous </button>
   <div className='cards'>
          <Card
             key={data[currentIndex].id}    
             word={data[currentIndex].word}
             transcription={data[currentIndex].transcription}
             translate={data[currentIndex].translate}
                              />
                                          </div>
        <button onClick={handleNext}> next </button>
    </div>
   
      )
}
export default AllCards;



    