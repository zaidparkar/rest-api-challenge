import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './NavBar';
import CreatePage from './pages/CreatePage';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Create" element={<CreatePage />} />
        {/* // <Route path="/update" component={UpdateIssuePage} />
        // <Route path="/delete" component={DeleteIssuePage} /> */}
      </Routes>
    </Router>
  );
}

export default App;
