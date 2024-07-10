import './App.css';
import Header from './components/header/Header';
import TableTitle from './components/TableTitle/TableTitle';
import TableLine from './components/TableLine/TableLine';
import AddWord from './components/AddWord/AddWord';
import Card from './components/Card/Card';
import data from './data.json';

function App() {
  return (
    <div className='App'>
      <Header/>
      <h2>Таблица слов</h2>
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
      
      <h2>Карточки со словами</h2>
     <div className='cards'>
           {data.map((item) => (
          <Card
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

export default App;
