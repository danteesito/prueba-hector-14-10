import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './/Navbar';
import Footer from './/Footer'; 

function Home({ setPlayerName }) {
  const nameRef = useRef();
  const navigate = useNavigate();

  const handleStartGame = () => {
    const name = nameRef.current.value;
    if (name) {
      setPlayerName(name);
      navigate('/game');
    }
  };

  return (
<>    
 <Navbar/>
    <div className="home">
      <h1>Ingresa tu nombre</h1>
      <input ref={nameRef} type="text" placeholder="Tu nombre" />
      <button onClick={handleStartGame}>Jugar Juego</button>
    </div>
    <Footer />
    </>
  );
}

export default Home;
