import './App.css';
import Header from './components/header/Header';
import Table from './components/Table';
import AllCards from './components/AllCards';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

function App() {
  return (
    <Router>
{/* <div>
    <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      </ul>
      </nav>
    </div> */}
      <Routes>
      <Route path="/" element={<Header/>} />
      <Route path="/table" element={<Table/>} />
      <Route path="/cards" element={<AllCards/>} />
       </Routes>
      </Router>

         );
}

export default App;
