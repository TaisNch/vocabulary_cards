import Card from './Card/Card'
import './Card/Card.css'
import data from '../data.json';

function AllCards () {
    return (
    <div>
 <h2> Карточки слов</h2>
   <div className='cards'>
     { data.map((item) => (
       <Card
             key={item.id}    
             word={item.word}
             transcription={item.transcription}
             translate={item.translate}
                              />
                          ))}
                          </div>
    </div>
   
      )
}
export default AllCards;



    