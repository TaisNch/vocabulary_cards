import './TableLine.css'

function TableLine (allCells) {
    const  {word, transcription, translate}= allCells;
    return(
        <div className='line'>
         <p className='line__cell'>{word}</p>
         <p className='line__cell'>{transcription}</p>
         <p className='line__cell'>{translate}</p>
        <div className='checkbox'>
        <input type="checkbox"></input>
        <label> learned  </label>
         </div>   
         <button>
            delete
        </button>
        </div>
    )
}

export default TableLine;