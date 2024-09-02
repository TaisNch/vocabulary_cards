import Header from "../header/Header";
import Card from "../Card/Card";
import style from "./AllCards.module.scss";
import data from "../../data.json";
import { useState } from "react";

function AllCards() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? data.length - 1 : prevIndex - 1,
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === data.length - 1 ? 0 : prevIndex + 1,
		);
	};

	const [wordsLearned, setWordsLearned] = useState(0);

	const handleWordLearned = () => {
		setWordsLearned((prevCount) => prevCount + 1);
	};

	return (
		<>
			<Header />
			<h2 className={style.allcards__title}> Cards</h2>
			<p className={style.paragraph}>
				here are all the words you've added into the table shown as cards - here you
				can check right translation and count how many words you have learned
			</p>
			<div className={style.allcards__wrapper}>
				<button className={style.allcards__bntprev} onClick={handlePrev}>
					previous
				</button>
				<div className={style.cards}>
					<Card
						onLearned={handleWordLearned}
						word={data[currentIndex].word}
						transcription={data[currentIndex].transcription}
						translate={data[currentIndex].translate}
					/>
				</div>
				<button className={style.allcards__bntnext} onClick={handleNext}>
					next
				</button>
			</div>
			<p className={style.allcards__count}> words learned: {wordsLearned} </p>
		</>
	);
}
export default AllCards;
