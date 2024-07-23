import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ArticleDetails from './components/ArticleDetails';

const mockArticle = {
  id: 1,
  title: 'Article 1',
  abstract: 'Abstract of article 1',
};

test('renders article details and handles back button click', () => {
  const handleBackClick = jest.fn();

  render(<ArticleDetails article={mockArticle} onBackClick={handleBackClick} />);

  expect(screen.getByText('Article 1')).toBeInTheDocument();
  expect(screen.getByText('Abstract of article 1')).toBeInTheDocument();

  const backButton = screen.getByRole('button', { name: /back to list/i });
  fireEvent.click(backButton);
  expect(handleBackClick).toHaveBeenCalled();
});
