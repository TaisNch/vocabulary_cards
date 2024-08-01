import './Card.css';
import { useState } from 'react';

function Card({ word, transcription, translate }) {
const [isActive, setIsActive] = useState(false);

const handleActive = () => {
setIsActive(!isActive);
}

return (
<div className='card'>
<p className='card__line'>{word}</p>
<p className='card__line'>{transcription}</p>
<p className={`card__line trslt ${isActive ? '' : 'hide'}`}>{translate}</p>
<button className='card__button' onClick={handleActive}>
{isActive ? 'Hide Translation' : 'Show Translation'}
</button>
</div>
);
}

export default Card;