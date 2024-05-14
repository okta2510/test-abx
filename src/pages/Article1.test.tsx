import React from 'react';
import { render, screen } from '@testing-library/react';
import Article1 from './Article1';

describe('Article 1', () => {
  test('renders the title', () => {
    render(<Article1 />);
    expect(screen.getByText("'You can still be who you are and do that job': Electrical engineer lights a path for high school girls to follow")).toBeInTheDocument();
  });
});
