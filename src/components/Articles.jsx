import React, { useEffect, useState } from "react";
import Article from "./article";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("https://news-3fmi.onrender.com/api/articles")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setArticles(data.articles);
      });
  }, []);

  return (
    <>
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
              <div key={article_id} className="card">
                <div className="card-content">
                  <div className="image-container">
                    <img src={article_img_url} alt={title} />
                  </div>
                  <div className="text-content">
                    <h2>{title}</h2>

                    <p>{topic}</p>
                    <p>Author: {author}</p>

                    <div className="upvotes-comments">
                      <p>Upvotes: {votes}</p>
                      <p>Comments: {comment_count}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </>
  );
}
