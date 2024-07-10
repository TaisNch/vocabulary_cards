import './TableTitle.css';

function TableTitle() {
    return (
        <div className='list'>
          <div className='list__words'>
            <p>name</p>
            <p>transcription</p>
            <p>translate</p>
            </div> 
            <div className='list__buttons'>
            <p>learned</p>
            <p>delete</p>
            </div>
        </div>
    )
}
export default TableTitle