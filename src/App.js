import { useState, useEffect } from 'react';
import { useDebounce } from './hooks';
import { fetchCharacters } from './api';

import Character from './Character';

import logo from './logo.svg';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [nameFilter, setNameFilter] = useState('');
  const debouncedNameFilter = useDebounce(nameFilter, 500);

  const handleNameFilterChange = (e) => setNameFilter(e.target.value);

  useEffect(() => {
    fetchCharacters({ page, nameFilter: debouncedNameFilter })
      .then(res => {
        setCharacters(prevCharacters => [
          ...(page === 1 ? [] : prevCharacters),
          ...res.characters,
        ]);
      });
  }, [page, debouncedNameFilter]);

  useEffect(() => setPage(1), [debouncedNameFilter]);

  return (
    <>
      <header className="header">
        <img className="logo" src={logo} alt="Logo" />
        <input placeholder="Filter" onChange={handleNameFilterChange} />
      </header>
      <div className="content">
        <h1>Characters Overview ({characters.length})</h1>
        <ul className="list">
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
