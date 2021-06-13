import { useState, useEffect } from 'react';
import { fetchCharacters } from '../api';

const useCharacters = ({ page, nameFilter }) => {

  const [characters, setCharacters] = useState([]);
  const [count, setCount] = useState(0);

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
    }
  ];
};

export default useCharacters;
