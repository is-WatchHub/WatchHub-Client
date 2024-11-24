import {render, screen} from '@testing-library/react';
import Home from './pages/Home';

test('renders Home page description', () => {
  render(<Home />);
  const homeDescription = screen.getByText(/WatchHub — это онлайн-кинотеатр/i);
  expect(homeDescription).toBeInTheDocument();
});
