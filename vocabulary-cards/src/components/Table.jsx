import Header from "./header/Header"
import TableLine from "./TableLine/TableLine"
import TableTitle from './TableTitle/TableTitle'
import AddWord from "./AddWord/AddWord";
import data from '../data.json';

function Table () {
    return (
        <>
        <Header/>
        <TableTitle/>
        <AddWord/>
        <div>
 { data.map((item) => (
            <TableLine
                  key = {item.id}    
                  word={item.word}
                  transcription={item.transcription}
                  translate={item.translate}
                                    />
                               ))}
    
        </div>
        </>)
}
export default Table
