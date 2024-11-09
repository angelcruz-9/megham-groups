import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ContactUs from './components/contactUs/contactUs';
import AboutUs from './components/about-us/aboutUs';
import Home from './components/home/home';
import Layout from './components/layout';
import OurPurpose from './components/our-purpose/ourPurpose';
import OurCompanies from './components/our-companies/ourCompanies';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-companies" element={<OurCompanies />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-purpose" element={<OurPurpose />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
