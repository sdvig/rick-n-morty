import { mockCharacters } from './mocks';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <header className="header">
        <img className="logo" src={logo} alt="Logo" />
      </header>
      <div className="content">
        <h1>Characters Overview</h1>
        <ul>
          {
            mockCharacters.map(character => (
              <li key={character.id}>{character.name}</li>
            ))
          }
        </ul>
      </div>
    </>
  );
}

export default App;
