import style from "./Card.module.scss";
import { useState, useEffect, useRef } from "react";

function Card({ word, transcription, translate, onLearned }) {
	const [isActive, setIsActive] = useState(false);

	const [isTranslated, setIsTranslated] = useState(false);

	const handleShowTranslation = () => {
		if (!isTranslated) {
			setIsTranslated(true);
			onLearned();
		}
		setIsActive(!isActive);
	};

	const buttonRef = useRef(null);

	useEffect(() => {
		if (buttonRef.current) {
			buttonRef.current.focus();
		}
	}, []);

	return (
		<div className={style.card}>
			<p className={style.card__line}>{word}</p>
			<p className={style.card__line}>{transcription}</p>
			<p
				className={`${style.card__line} ${style.trslt} ${
					isActive ? "" : style.hide
				}`}>
				{translate}
			</p>
			<button
				className={style.card__button}
				ref={buttonRef}
				onClick={handleShowTranslation}>
				{isActive ? "Hide Translation" : "Show Translation"}
			</button>
		</div>
	);
}

export default Card;
