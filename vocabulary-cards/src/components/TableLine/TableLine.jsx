import style from "./TableLine.module.scss";

function TableLine(allCells) {
	const { word, transcription, translate } = allCells;
	return (
		<div className={style.line}>
			<p className={style.line__cell}>{word}</p>
			<p className={style.line__cell}>{transcription}</p>
			<p className={style.line__cell}>{translate}</p>
			<div className={style.checkbox}>
				<input type="checkbox"></input>
				<label> learned </label>
			</div>
			<button>delete</button>
		</div>
	);
}

export default TableLine;
