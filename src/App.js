import logo from './logo.svg';
import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characteres from './components/Characters';

function App() {
  const [characters, setCharacteres] = useState (null);

  const reqApi = async () => {
    const api = await fetch ('https://rickandmortyapi.com/api/character' )
    const characterApi = await api.json();
    
    setCharacteres(characterApi.results);
  };



  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'> Rick & Morty </h1>
        { characters ? (<Characteres characters= {characters} setCharacteres={setCharacteres}/> 
        ): (
          <>
          <img src={imageRickMorty} alt="Rick & Morty" className='img-home' />
        <button onClick={reqApi} className="btn-search">
          Buscar Personajes 
        </button>
          </>
        )}  
      </header>
    </div>
  );
}

export default App;
