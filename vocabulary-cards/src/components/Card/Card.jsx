import './Card.css'

function Card(props) {
return (
<div className='card'>
       <p className='card__line'>{props.word}</p>
       <p className='card__line'>{props.transcription}</p>
       <p className='card__line'>{props.translate}</p>
</div>
);
}
export default Card;