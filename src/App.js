import { useState, useEffect } from 'react';
import { fetchData } from './api';

import Character from './Character';

import logo from './logo.svg';
import './App.css';

async function fetchCharacters(page = 1) {
  const query = `
    query {
      characters(
        page: ${page},
      ) {
        results {
          name,
          id,
          image,
        },
      }
    }
  `;

  return await fetchData(query);
}

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters()
      .then(res => {
        setCharacters(res.characters.results);
      });
  }, []);

  return (
    <>
      <header className="header">
        <img className="logo" src={logo} alt="Logo" />
      </header>
      <div className="content">
        <h1>Characters Overview</h1>
        <ul class="list">
          {
            characters.map(({ id, name, image, episode = [] }) => (
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
