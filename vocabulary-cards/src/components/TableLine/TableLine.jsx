import './TableLine.css'

function TableLine (props) {
    const style = props.styles
    return(
        <div className='line'>
         <p className='line__cell'>{props.word}</p>
         <p className='line__cell'>{props.transcription}</p>
         <p className='line__cell'>{props.translate}</p>
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