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
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchCharacters(page)
      .then(res => {
        setCharacters(prevCharacters => [
          ...prevCharacters,
          ...res.characters.results,
        ]);
      });
  }, [page]);

  return (
    <>
      <header className="header">
        <img className="logo" src={logo} alt="Logo" />
      </header>
      <div className="content">
        <h1>Characters Overview ({characters.length})</h1>
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
        <button onClick={() => setPage(page + 1)}>
            Load more
        </button>
      </div>
    </>
  );
}

export default App;
