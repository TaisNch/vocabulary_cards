import Header from "../header/Header"
import TableLine from "../TableLine/TableLine"
import TableTitle from '../TableTitle/TableTitle'
import data from "../../data.json"

function Home () {
    return (
        <div>
        <Header/>
        <TableTitle/>
          <div>
 {data.map((item) => (
            <TableLine
                  key = {item.id}    
                  word={item.word}
                  transcription={item.transcription}
                  translate={item.translate}
                                    />
                               ))}
    
        </div>
        </div>)
}
export default Home;
