import fetchData from './fetchData';

async function fetchCharacters({ page = 1, nameFilter = '' }) {
  const query = `
    query {
      characters(
        page: ${page},
        filter: {
          name: "${nameFilter}",
        },
      ) {
        results {
          name,
          id,
          image,
          episode {
            id,
          },
        },
        info {
          count,
        },
      }
    }
  `;

  const data = await fetchData(query);

  let normalizedCharacters = [];
  let count = 0;

  if (data.characters) {
    normalizedCharacters = data.characters.results.map(normalizeCharacter);
    count = data.characters.info.count;
  }

  return {
    characters: normalizedCharacters,
    count,
  };
}

const normalizeCharacter = character => ({
  ...character,
  episode: character.episode.map(({id}) => parseInt(id))
});

export default fetchCharacters;
