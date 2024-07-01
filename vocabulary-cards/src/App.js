import './App.css';
import Header from './components/header/Header';
import List from './components/list/List';
import Card from './components/card/Card';
import AddWord from './components/addWord/AddWord';

function App() {
  return (
    <div className='App'>
 <Header/>
 <List/>
 <Card/>
 <AddWord/>
    </div>
   
      );
}

export default App;
