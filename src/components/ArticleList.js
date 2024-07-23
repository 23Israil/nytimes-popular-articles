import React from 'react';

const ArticleList = ({ articles, onArticleClick }) => {
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id} onClick={() => onArticleClick(article)}>
          {article.title}
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
