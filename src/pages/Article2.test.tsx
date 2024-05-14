import React from 'react';
import { render, screen } from '@testing-library/react';
import Article2 from './Article2';

describe('Article 2', () => {
  test('renders the title', () => {
    render(<Article2 />);
    expect(screen.getByText("From Spanish coins to century-old whisky, Maddy hunts for shipwreck treasure")).toBeInTheDocument();
  });
});
