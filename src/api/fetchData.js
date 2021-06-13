const API_URL = 'https://rickandmortyapi.com/graphql';

async function fetchData (query) {
  let response = await fetch(
    API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ query })
    }
  );

  const {data} = await response.json();
  return data;
}

export default fetchData;
