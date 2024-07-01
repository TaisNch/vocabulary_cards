import './addWord.css'

function AddWord (){
    return (
        <div className='addWord'>
          <div>
          <p>
            Ввести слово
           </p>
            <input type="text" />
          </div>
          <div>
          <p>
            Ввести транскрипцию
           </p>
            <input type="text" />
          </div>
          <div>
          <p>
            Ввести перевод
           </p>
            <input type="text" />
          </div>
          <button>delete</button>
        </div>
    )   
};
export default AddWord;