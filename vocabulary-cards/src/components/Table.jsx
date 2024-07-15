import TableLine from "./TableLine/TableLine"
import data from '../data.json';

function Table () {
    return (
         data.map((item) => (
            <TableLine
                  key = {item.id}    
                  word={item.word}
                  transcription={item.transcription}
                  translate={item.translate}
                                    />
                               ))
    )
}
export default Table
