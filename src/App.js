import React from 'react';
import './App.css';
// import Home from './components/home/home';
import Layout from './components/layout';
import OurCompanies from './components/our-companies/ourCompanies';

function App() {
  return (
    <Layout>
      {/* <Home /> */}
      <OurCompanies />
    </Layout>
  )
}

export default App;
