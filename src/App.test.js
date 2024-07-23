import React, { useState, useEffect } from 'react';
import { fetchArticles } from './api';
import ArticleList from './components/ArticleList';
import ArticleDetails from './components/ArticleDetails';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const articles = await fetchArticles();
        setArticles(articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    getArticles();
  }, []);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleBackClick = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="App">
      <h1>NY Times Most Popular Articles</h1>
      {selectedArticle ? (
        <ArticleDetails article={selectedArticle} onBackClick={handleBackClick} />
      ) : (
        <ArticleList articles={articles} onArticleClick={handleArticleClick} />
      )}
    </div>
  );
};

export default App;
