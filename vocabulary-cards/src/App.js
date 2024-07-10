import './App.css';
import Header from './components/header/Header';
import TableTitle from './components/TableTitle/TableTitle';
import TableLine from './components/TableLine/TableLine';
import AddWord from './components/AddWord/AddWord';
import data from './data.json';

function App() {
  return (
    <div className='App'>
      <Header/>
      <TableTitle/>
      <AddWord/>
       {data.map((item) => (
          <TableLine
                key = {item.id}    
                word={item.word}
                transcription={item.transcription}
                translate={item.translate}
                                 />
                             ))}
      </div>
         );
}

export default App;
