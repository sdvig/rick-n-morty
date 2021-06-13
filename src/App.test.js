import { render, screen } from "@testing-library/react";
import App from "./App";
import { mockCharacters } from './mocks';

jest.mock('./hooks', () => ({
  useCharacters: () => [
    {
      characters: mockCharacters,
      canLoadMore: false,
    },
  ],
  useDebounce: (val) => val
}));

test('renders characters overview', () => {
  render(<App />);
  const charactersOverviewText = screen.getByText(/Characters Overview/i);
  expect(charactersOverviewText).toBeInTheDocument();
  expect(charactersOverviewText).toHaveTextContent('(2)');
});
