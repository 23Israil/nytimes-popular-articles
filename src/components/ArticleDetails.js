import React from 'react';

const ArticleDetails = ({ article, onBackClick }) => {
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.abstract}</p>
      <button onClick={onBackClick}>Back to List</button>
    </div>
  );
};

export default ArticleDetails;
