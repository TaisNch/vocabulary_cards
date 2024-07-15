import './Card.css'
import { useState } from 'react';

function Card(allLines) {
  const [active, setActive] = useState(false);
  
  const handleActive = () => {
       const element = document.querySelector(".trslt ");
       element.classList.toggle("hide");
  }
const  {word, transcription, translate}= allLines;
return (
<div className='card'>
       <p className='card__line'>{word}</p>
       <p className='card__line'>{transcription}</p>
       <p className='card__line trslt hide'>{translate}</p>
       <button className='card__button' onClick={handleActive}> Show Transcription</button>
</div>
);
}
export default Card;