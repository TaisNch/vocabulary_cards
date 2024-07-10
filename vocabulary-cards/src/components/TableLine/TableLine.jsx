import './TableLine.css'


function TableLine (props) {
    return(
        <div className='card'>
            <p className='cell'>{props.word}</p>
            <p className='cell'>{props.transcription}</p>
            <p className='cell'>{props.translate}</p>
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