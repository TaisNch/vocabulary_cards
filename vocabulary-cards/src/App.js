import './App.css';
import Home from './components/Home';
import Table from './components/Table';
import AllCards from './components/AllCards';
import { Router, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
  <Router>
  {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/table">Table</Link>
            </li>
            <li>
              <Link to="/cards">Cards</Link>
            </li>
          </ul>
        </nav>
</div> */}
    <div className='App'>
     <Routes>
      <Route  path = "/" element = {<Home/>}/>
      {/* <Route path="/table"  element = {<Table/>}/>
      <Route path="/cards"  element = {<AllCards/>}/> */}
     </Routes>
     </div>
  </Router>

         );
}

export default App;
