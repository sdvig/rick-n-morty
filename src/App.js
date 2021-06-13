import Character from './Character';

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
        <ul class="list">
          {
            mockCharacters.map(({ id, name, image, episode }) => (
              <Character
                id={id}
                name={name}
                image={image}
                episode={episode}
                key={id}
              />
            ))
          }
        </ul>
      </div>
    </>
  );
}

export default App;
