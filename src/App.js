import React from 'react';
import './App.css';
import ContactUs from './components/contactUs/contactUs';
// import AboutUs from './components/about-us/aboutUs';
// import Home from './components/home/home';
import Layout from './components/layout';
// import OurPurpose from './components/our-purpose/ourPurpose';
// import OurCompanies from './components/our-companies/ourCompanies';

function App() {
  return (
    <Layout>
      {/* <Home /> */}
      {/* <OurCompanies /> */}
      {/* <AboutUs /> */}
      {/* <OurPurpose /> */}
      <ContactUs />
    </Layout>
  )
}

export default App;
