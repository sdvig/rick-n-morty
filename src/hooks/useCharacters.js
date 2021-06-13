import { useState, useEffect } from 'react';
import { fetchCharacters } from '../api';
import { sortByName, sortByEpisode } from "../utils";

const useCharacters = ({ page, nameFilter }) => {

  const [characters, setCharacters] = useState([]);
  const [count, setCount] = useState(0);

  const sortCharactersByName = () => setCharacters([ ...characters.sort(sortByName) ]);
  const sortCharactersByEpisode = () => setCharacters([ ...characters.sort(sortByEpisode) ]);

  useEffect(() => {

    fetchCharacters({ page, nameFilter })
      .then(res => {
        setCharacters(prevCharacters => [
          ...(page === 1 ? [] : prevCharacters),
          ...res.characters,
        ]);

        setCount(res.count);
      });

  }, [page, nameFilter]);

  return [
    {
      characters,
      canLoadMore: count > characters.length,
    },
    sortCharactersByName,
    sortCharactersByEpisode,
  ];
};

export default useCharacters;
