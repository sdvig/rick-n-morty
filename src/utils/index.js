const sortByName = (a,b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
const sortByEpisode = (a,b) => (a.episode[0] < b.episode[0]) ? -1 : (a.episode[0] > b.episode[0]) ? 1 : 0;

export { sortByName, sortByEpisode };
