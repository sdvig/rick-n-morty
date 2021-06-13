import { mockCharacters } from '../mocks';
import { sortByName, sortByEpisode } from './index';

test('sorts characters by name', () => {
  const sorted = mockCharacters.sort(sortByName);
  expect(sorted[0].name).toBe('Baby Wizard');
});

test('sorts characters by first episode', () => {
  const sorted = mockCharacters.sort(sortByEpisode);
  expect(sorted[0].name).toBe('Crab Spider');
});
