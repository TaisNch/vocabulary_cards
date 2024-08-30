import './AddWord.scss'
import { useState } from 'react';

function AddWord (){
  const [word, setWord] = useState('');
  const [transcription, setTranscription] = useState('');
  const [translation, setTranslation] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [errors, setErrors] = useState({
    word: '',
    transcription: '',
    translation: ''
  });

  const isWordValid = /^[A-Za-z]+$/.test(word);
  const isTranscriptionValid = /^[A-Za-z\s'ˈˌ]+$/.test(transcription);
  const isTranslationValid = /^[А-Яа-яЁё\s]+$/.test(translation);

  const handleInputChange = () => {
    setErrors({
      word: isWordValid || word === '' ? '' : 'проверьте корректность написания слова',
      transcription: isTranscriptionValid || transcription === '' ? '' : 'проверьте корректность написания транскрипции',
      translation: isTranslationValid || translation === '' ? '' : 'проверьте корректность написания перевода'
    });

    if (isWordValid && isTranscriptionValid && isTranslationValid && word.trim() && transcription.trim() && translation.trim()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };
   
    const handleAddWord = () => {
    if (!isButtonDisabled) {
      setWord('');
      setTranscription('');
      setTranslation('');
      setIsButtonDisabled(true);
    }
  }; 
  
  return (
  <div className='addWord'>
   <div className='addWord__title title'>
    <div className = 'title__words'>
    <p>Слово</p>
    <p>Транскрипция</p>
    <p>Перевод </p>
    </div>
    <div className = 'title__btns'>
    <p>Добавить</p>
    <p>Удалить</p>
    </div>
    </div> 
    <div className='addWord__form'>
      <form className='addWord__inputs' action="">
      <div className='inputWrapper'>
         <input  className={errors.word ? 'inputError' : ''} placeholder = 'введите слово' value={word} type="text" 
          onChange={(e) => { setWord(e.target.value); handleInputChange(); }} />
           {errors.word && <p className='errorText'>{errors.word}</p>}
      </div>
      <div className='inputWrapper'>
         <input  className={errors.transcription ? 'inputError' : ''}
         placeholder = 'введите транскрипцию' value={transcription} type="text"
         onChange={(e) => { setTranscription(e.target.value); handleInputChange(); }} />
           {errors.transcription && <p className='errorText'>{errors.transcription}</p>}
      </div>
      <div className='inputWrapper'>
         <input  className={errors.translation ? 'inputError' : ''}
         placeholder = 'введите перевод' value={translation}  type="text"
         onChange={(e) => { setTranslation(e.target.value); handleInputChange(); }} />    
          {errors.translation && <p className='errorText'>{errors.translation}</p>} 
      </div>
       </form>
      <div className='addWord__btns'>
          <button onClick={handleAddWord} disabled={isButtonDisabled}>add word</button>
          <button>delete</button>
        </div>
    </div>  
</div>
    )   
};
export default AddWord;