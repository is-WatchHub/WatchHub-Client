import { render, screen } from '@testing-library/react';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Profile from './pages/Profile';

test('renders Home page description', () => {
  render(<Home />);
  const homeDescription = screen.getByText(/WatchHub — это онлайн-кинотеатр/i);
  expect(homeDescription).toBeInTheDocument();
});

test('renders Home page with description and image', async () => {
  render(<Home />);
  const homeText = await screen.findByText(/WatchHub — это онлайн-кинотеатр/i);
  expect(homeText).toBeInTheDocument();
  const homeImage = screen.getByAltText(/Image 1/i);
  expect(homeImage).toBeInTheDocument();
});

test('renders Movies page', () => {
  render(<Movies />);
  const moviesElement = screen.getByText(/Movies Page/i);
  expect(moviesElement).toBeInTheDocument();
});

test('renders Profile page', () => {
  render(<Profile />);
  const profileElement = screen.getByText(/Profile Page/i);
  expect(profileElement).toBeInTheDocument();
});
