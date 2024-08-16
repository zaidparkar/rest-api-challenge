import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './NavBar';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Create" element={<CreatePage />} />
        <Route path='/Edit' element={<EditPage />} />
      </Routes>
    </Router>
  );
}

export default App;
