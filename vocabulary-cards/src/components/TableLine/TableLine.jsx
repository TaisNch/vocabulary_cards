import style from "./TableLine.module.scss";
import { useState } from "react";

function TableLine(allCells) {
	const { word, transcription, translate } = allCells;
	const [isRemoved, setIsRemoved] = useState(false);
	const [isHighlighted, setIsHighlighted] = useState(false);

	const handleRemove = () => {
		setIsRemoved(true);
	};
	const handleHighlight = () => {
		setIsHighlighted(true);
	};

	if (isRemoved) {
		return null;
	}

	return (
		<div className={style.line_wrapper}>
			<div className={`${style.line} ${isHighlighted ? style.highlighted : ""}`}>
				<p className={style.line__cell}>{word}</p>
				<p className={style.line__cell}>{transcription}</p>
				<p className={style.line__cell}>{translate}</p>
			</div>
			<div className={style.linebtns}>
				<button className={style.linebtns__right} onClick={handleHighlight}>
					<img
						className={style.linebtns__right_img}
						src="/images/learned.png"
						alt="right"
					/>
				</button>
				<button className={style.linebtns__basket} onClick={handleRemove}>
					<img
						className={style.linebtns__basket_img}
						src="/images/basket2.png"
						alt="basket"
					/>
				</button>
			</div>
		</div>
	);
}

export default TableLine;
