import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home/Home';
import Table from './components/Table';
import AllCards from './components/AllCards/AllCards';
import Page404 from './components/Page404/Page404'
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/table" element={<Table/>} />
      <Route path="/cards" element={<AllCards/>} />
      <Route path="*" element={<Page404/>} />
      </Routes>
      </Router>
         );
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
