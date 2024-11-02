import React from 'react';
import './App.css';
import AboutUs from './components/about-us/aboutUs';
// import Home from './components/home/home';
import Layout from './components/layout';
// import OurCompanies from './components/our-companies/ourCompanies';

function App() {
  return (
    <Layout>
      {/* <Home /> */}
      {/* <OurCompanies /> */}
      <AboutUs />
    </Layout>
  )
}

export default App;
