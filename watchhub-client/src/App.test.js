import {render, screen} from '@testing-library/react';
import Home from './pages/Home';
import Profile from './pages/Profile';

test('renders Home page description', () => {
  render(<Home />);
  const homeDescription = screen.getByText(/WatchHub — это онлайн-кинотеатр/i);
  expect(homeDescription).toBeInTheDocument();
});

test('renders Profile page', () => {
  render(<Profile />);
  const profileElement = screen.getByText(/Profile Page/i);
  expect(profileElement).toBeInTheDocument();
});
