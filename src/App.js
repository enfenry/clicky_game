import React from 'react';
import Character from "./components/Character";
import NavBar from "./components/NavBar";
import characters from "./characters.json";
import './App.css';

class App extends React.Component {
  render() {
    const mapCharacters =
      characters.map(character => {
        return <Character name={character.name} image={character.image} key = {character.name} />
      })

    return (
      <div className="container-fluid">
          <NavBar />
        <div className="row">
          {mapCharacters}
        </div>
      </div>
    );
  }
}

export default App;
