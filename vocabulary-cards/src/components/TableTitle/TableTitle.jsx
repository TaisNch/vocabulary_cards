import style from "./TableTitle.module.scss";
import { useLocation } from "react-router-dom";

function TableTitle() {
	const location = useLocation();
	const getTitle = () => {
		switch (location.pathname) {
			case "/table":
				return (
					<>
						<h2 className={style.titleHeader}>Table</h2>
						<span className={style.titlePharagraph}>
							/Here are all the word you've added and here you can add more!/
						</span>
					</>
				);
			case "/":
				return (
					<>
						<h2 className={style.titleHeader}>Vocabulary</h2>
						<span className={style.titlePharagraph}>
							/Here are all the word you want to learn!/
						</span>
					</>
				);

			default:
				return "";
		}
	};

	return (
		<>
			<hr />
			<div className={style.tableDisr}>{getTitle()}</div>
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
		</>
	);
}
export default TableTitle;
