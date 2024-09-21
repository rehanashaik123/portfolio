import React from 'react';
import Navbar from './components/Navbar/navbar';
import Intro from './components/intro/intro';
import Skills from './components/skills/skills';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/footer/footer';
const App = () => {
  return (
    
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <ContactUs />
      <Footer/>
    </div>
    
  )
}

export default App
