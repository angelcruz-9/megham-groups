import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Layout from './components/layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/megham-groups" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
