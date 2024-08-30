import Header from "../header/Header";
import TableLine from "../TableLine/TableLine";
import TableTitle from "../TableTitle/TableTitle";
import data from "../../data.json";
import style from "./Home.module.scss";

function Home() {
	return (
		<div className={style.home_wrapper}>
			<Header />
			<div className={style.discribtion}>
				<p>
					Here is our simple application to expolore and to extend your vocabulary
				</p>
				<p>
					Here you can edit all the words by adding them to the words table and
					learning them with the help of cards
				</p>
				<p>Enjoy!</p>
			</div>
			<TableTitle />
			<div>
				{data.map((item) => (
					<TableLine
						key={item.id}
						word={item.word}
						transcription={item.transcription}
						translate={item.translate}
					/>
				))}
			</div>
		</div>
	);
}
export default Home;
