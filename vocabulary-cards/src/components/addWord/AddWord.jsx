import style from "./AddWord.module.scss";
import { useState } from "react";

function AddWord() {
	const [word, setWord] = useState("");
	const [transcription, setTranscription] = useState("");
	const [translation, setTranslation] = useState("");
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);
	const [wordsList, setWordsList] = useState([]);
	const [isRemoved, setIsRemoved] = useState(false);

	const [errors, setErrors] = useState({
		word: "",
		transcription: "",
		translation: "",
	});

	const isWordValid = /^[A-Za-z]+$/.test(word);
	const isTranscriptionValid = /^[A-Za-z\s'ˈˌ]+$/.test(transcription);
	const isTranslationValid = /^[А-Яа-яЁё\s]+$/.test(translation);

	const handleInputChange = () => {
		setErrors({
			word:
				isWordValid || word === "" ? "" : "проверьте корректность написания слова",
			transcription:
				isTranscriptionValid || transcription === ""
					? ""
					: "проверьте корректность написания транскрипции",
			translation:
				isTranslationValid || translation === ""
					? ""
					: "проверьте корректность написания перевода",
		});

		if (
			isWordValid &&
			isTranscriptionValid &&
			isTranslationValid &&
			word.trim() &&
			transcription.trim() &&
			translation.trim()
		) {
			setIsButtonDisabled(false);
		} else {
			setIsButtonDisabled(true);
		}
	};

	const handleAddWord = () => {
		if (!isButtonDisabled) {
			setWordsList([
				...wordsList,
				{
					word: word,
					transcription: transcription,
					translation: translation,
				},
			]);
			setWord("");
			setTranscription("");
			setTranslation("");
			setIsButtonDisabled(true);
		}
	};

	const handleRemove = () => {
		setWord("");
		setTranscription("");
		setTranslation("");
		setErrors({
			word: "",
			transcription: "",
			translation: "",
		});
		setIsButtonDisabled(true);
	};

	return (
		<div className={style.addWord}>
			<p className={style.title__addwords}>Add new words to you vocabulary here</p>
			<div className={style.addWord__form}>
				<form className={style.addWord__inputs} action="">
					<div className={style.inputWrapper}>
						<input
							className={`${style.inputWrapper_item} ${
								errors.word ? style.inputError : ""
							}`}
							placeholder="введите слово"
							value={word}
							type="text"
							onChange={(e) => {
								setWord(e.target.value);
								handleInputChange();
							}}
						/>
						{errors.word && <p className={style.errorText}> errors.word</p>}
					</div>
					<div className={style.inputWrapper}>
						<input
							className={`${style.inputWrapper_item} ${
								errors.transcription ? style.inputError : ""
							}`}
							placeholder="введите транскрипцию"
							value={transcription}
							type="text"
							onChange={(e) => {
								setTranscription(e.target.value);
								handleInputChange();
							}}
						/>
						{errors.transcription && (
							<p className={style.errorText}> errors.transcription </p>
						)}
					</div>
					<div className={style.inputWrapper}>
						<input
							className={`${style.inputWrapper_item} ${
								errors.translation ? style.inputError : ""
							}`}
							placeholder="введите перевод"
							value={translation}
							type="text"
							onChange={(e) => {
								setTranslation(e.target.value);
								handleInputChange();
							}}
						/>
						{errors.translation && (
							<p className={style.errorText}>errors.translation</p>
						)}
					</div>
				</form>
				<div className={style.addWord__btns}>
					<button
						className={style.addWord__btns_add}
						onClick={handleAddWord}
						disabled={isButtonDisabled}>
						add word
					</button>
					<button onClick={handleRemove} className={style.addWord__btns_delete}>
						clear
					</button>
				</div>
			</div>
			<div className={style.info__addwords}>
				(*)FYI - All the words will be added to the table belows and also to the
				<a className="info__addwords-link" href="cards">
					Cards
				</a>
			</div>
		</div>
	);
}
export default AddWord;
