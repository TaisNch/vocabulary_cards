import style from "./TableTitle.module.scss";

function TableTitle() {
	return (
		<div className={style.list}>
			<div className={style.list__words}>
				<p className={style.list__words_title}>name</p>
				<p className={style.list__words_title}>transcription</p>
				<p className={style.list__words_title}>translate</p>
			</div>
			<div className={style.list__buttons}>
				<p className={style.list__buttons_title}>learned</p>
				<p className={style.list__buttons_title}> delete</p>
			</div>
		</div>
	);
}
export default TableTitle;
