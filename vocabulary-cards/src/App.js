import './App.css';
import Home from './components/Home/Home';
import Table from './components/Table';
import AllCards from './components/AllCards';
import Page404 from './components/Page404/Page404'
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/table" element={<Table/>} />
      <Route path="/cards" element={<AllCards/>} />
      <Route path="*" element={<Page404/>} />
      </Routes>
      </Router>
         );
}

export default App;
