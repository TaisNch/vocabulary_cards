import './Card.css';
import { useState, useEffect, useRef } from 'react';

function Card({ word, transcription, translate,onLearned }) {
const [isActive, setIsActive] = useState(false);

const [isTranslated, setIsTranslated] = useState(false);

const handleShowTranslation = () => {
    if (!isTranslated) {
      setIsTranslated(true);
      onLearned();
    }
    setIsActive(!isActive);
  };

  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);

return (
<div className='card'>
<p className='card__line'>{word}</p>
<p className='card__line'>{transcription}</p>
<p className={`card__line trslt ${isActive ? '' : 'hide'}`}>{translate}</p>
<button className='card__button' ref={buttonRef} onClick={handleShowTranslation}>
{isActive ? 'Hide Translation' : 'Show Translation'}
</button>
</div>
);
}

export default Card;