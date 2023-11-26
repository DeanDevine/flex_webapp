import React from "react";
import "../styles/ArticleCard.css";

const ArticleCard = ({ article }) => {
  return (
    <article>
      <h1>{article.title}</h1>
      <img
        className="articleImg"
        src={article.article_img_url}
        alt={`${article.title}`}
      />
      <p>{article.body}</p>
    </article>
  );
};

export default ArticleCard;
