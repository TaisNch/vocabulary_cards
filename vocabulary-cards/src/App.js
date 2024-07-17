import './App.css';
import Header from './components/header/Header';
import Table from './components/Table';
import AllCards from './components/AllCards';
import Page404 from './components/Page404/Page404'
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
      <Route path="*" element={<Page404/>} />
      </Routes>
      </Router>

         );
}

export default App;
