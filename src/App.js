import React from 'react'
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className="App bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
      <Navbar />
      <About />
      <Contact />
    </div>
  );
}

export default App;
