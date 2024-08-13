import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';  

import './App.css';

function App() {
  const [textValue, setTextValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [contacts, setContacts] = useState([]);

  const buttonClick = () => {

    const newContact = { name: textValue, number: numberValue };

    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];

    const updatedContacts = [...storedContacts, newContact];

    localStorage.setItem('contacts', JSON.stringify(updatedContacts));

    setContacts(updatedContacts);

    setTextValue('');
    setNumberValue('');
  };

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(storedContacts);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <input
          type="text" value={textValue} onChange={(event) => setTextValue(event.target.value)} 
        />
        <input
          type="number" value={numberValue} onChange={(event) => setNumberValue(event.target.value)}
        />
        <button onClick={buttonClick}>Guardar</button>
        
        <h1>Tu Agenda</h1>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              Nombre: {contact.name}
              <p>
              Numero: {contact.number}
              </p>
             
            </li>
          ))}
        </ul>
      </header>
      <Footer />
    </div>
  );
}

export default App;
