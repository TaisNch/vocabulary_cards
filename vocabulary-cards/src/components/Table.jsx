import React, { useState } from "react";
import Header from "./header/Header";
import TableLine from "./TableLine/TableLine";
import TableTitle from "./TableTitle/TableTitle";
import AddWord from "./AddWord/AddWord";
import data from "../data.json";
// import style from "./Table.module.scss";

function Table() {
	// const [wordsList, setWordsList] = useState([]);

	// const handleAddWord = (newWord) => {
	// 	setWordsList([...wordsList, newWord]);
	// };

	// const handleRemoveWord = (index) => {
	// 	setWordsList(wordsList.filter((_, i) => i !== index));
	// };

	// const handleHighlightWord = (index) => {
	// 	// You might need to adjust this if you want to keep track of which words are highlighted
	// };

	return (
		<>
			<Header />
			<AddWord />
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
		</>
	);
}
export default Table;
