import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ArticleList from './components/ArticleList';

const mockArticles = [
  { id: 1, title: 'Article 1' },
  { id: 2, title: 'Article 2' },
];

test('renders article list and handles click event', () => {
  const handleArticleClick = jest.fn();

  render(<ArticleList articles={mockArticles} onArticleClick={handleArticleClick} />);

  const articleItems = screen.getAllByRole('listitem');
  expect(articleItems).toHaveLength(2);
  expect(articleItems[0]).toHaveTextContent('Article 1');
  expect(articleItems[1]).toHaveTextContent('Article 2');

  fireEvent.click(articleItems[0]);
  expect(handleArticleClick).toHaveBeenCalledWith(mockArticles[0]);
});
