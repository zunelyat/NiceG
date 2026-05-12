// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NiceGUIPy title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NiceGUIPy/i);
    expect(titleElement).toBeInTheDocument();
});
