// import { useState, useEffect } from 'react';
import './App.css';
import CardInput from './components/cardinput';
import Card from './components/card';
import Toolbar from "./components/toolbar";

function App() {

  /*const [cards, setCard] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/getDecks/', {
      'methods': 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }) 
    .then(resp => resp.json())
    .then(resp => setCard(resp))
    .catch(error => console.log(error))
  },[])
  */


  return (
    <div className="App">
      <header className="App-header">
        <img src = {"./LearningClues Logo Small Logo.png"} alt = "LearningClues Flashcards" className = 
          "logo" 
          />

      </header>
      <h1>
        Flashcard Demo - Features and Implementation
      </h1>
      <p>This is a prototype build of the flashcards feature in LearningClues.
      </p>
      <CardInput />
      <Card />
      <Toolbar />
    </div>
  );
}

export default App;
