import React, { useState, useEffect } from "react";
import { fetchArticles } from "../Utils/api";
import { Link } from "react-router-dom";

function TopicArticles({ selectedTopic }) {
  console.log("selectedTopic", selectedTopic);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((data) => {
      console.log(data);
      const filteredArticles = data.filter(
        (article) => article.topic === selectedTopic
      );
      setArticles(filteredArticles);
    });
  }, [selectedTopic]);

  if (articles.length === 0) {
    return <div>No articles found for this topic.</div>;
  }

  return (
    <div>
      <h2>Articles about {selectedTopic}</h2>

      <div className="topic-articles">
        {articles.map((article) => (
          <div key={article.article_id} className="article-card">
            <div className="image-container">
              <img src={article.article_img_url} />
            </div>
            <Link to={`/articles/${article.article_id}`}>
              <h3>{article.title}</h3>
              <p>Author: {article.author}</p>
              <p>Comments : {article.comment_count}</p>
              <p> {article.votes} votes</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicArticles;
