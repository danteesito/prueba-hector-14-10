import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';  
import Contador from './Components/contador';

import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Contador/>
      </header>
      <Footer />
    </div>
  );
}

export default App;
