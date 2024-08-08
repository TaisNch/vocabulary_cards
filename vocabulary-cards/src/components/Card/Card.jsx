import './Card.css';
import { useState } from 'react';
import data from '../../data.json'

function Card({ onLearned }) {
const [isActive, setIsActive] = useState(false);

const [isTranslated, setIsTranslated] = useState(false);

const handleShowTranslation = () => {
    if (!isTranslated) {
      setIsTranslated(true);
      onLearned();
    }
  };

return (
<div className='card'>
<p className='card__line'>{data.word}</p>
<p className='card__line'>{data.transcription}</p>
<p className={`card__line trslt ${isActive ? '' : 'hide'}`}>{data.translate}</p>
<button className='card__button' onClick={handleShowTranslation}>
{isActive ? 'Hide Translation' : 'Show Translation'}
</button>
</div>
);
}

export default Card;