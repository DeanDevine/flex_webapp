import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "./api";
import "../styles/Articles.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
      .then((articlesData) => {
        setArticles(articlesData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="articlesContainer">
      {articles.map((article, article_id) => {
        return <ArticleCard key={article_id} article={article} />;
      })}
    </div>
  );
};

export default Articles;
