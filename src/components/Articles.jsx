import React, { useEffect, useState } from "react";
import { fetchArticles } from "../Utils/api";
import { Link } from "react-router-dom";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((data) => {
      console.log(data);
      setArticles(data);
    });
  }, []);

  return (
    <div className="card-container">
      {articles.map(
        ({
          title,
          topic,
          author,
          article_img_url,
          votes,
          article_id,
          comment_count,
        }) => {
          return (
            <Link
              to={`/articles/${article_id}`}
              key={article_id}
              className="card-link"
            >
              <div className="card">
                <div className="card-content">
                  <div className="image-container">
                    <img src={article_img_url} alt={title} />
                  </div>
                  <div className="text-content">
                    <h2>{title}</h2>
                    <p>Topic: {topic}</p>
                    <p>Author: {author}</p>
                    <div className="upvotes-comments">
                      <p>Upvotes: {votes}</p>
                      <p>Comments: {comment_count}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        }
      )}
    </div>
  );
}
