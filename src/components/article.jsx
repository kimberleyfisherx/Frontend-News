import React, { useEffect, useState } from "react";
import { fetchArticleById } from "../Utils/api";
import { useParams } from "react-router-dom";

export default function Article() {
  const [article, setArticle] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchArticleById(id).then((data) => {
      console.log(data);
      setArticle(data);
    });
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  const {
    title,
    topic,
    author,
    article_img_url,
    votes,
    comment_count,
    body,
    created_at,
  } = article.article;

  const createdDate = new Date(created_at);
  const formattedDate = createdDate.toLocaleString();

  return (
    <div className="single-article">
      <h2>{title}</h2>
      <div className="topic-author">
        <p>Topic: {topic}</p>
        <p>Author: {author}</p>
      </div>
      <div className="image-container-a">
        <img src={article_img_url} alt={title} />
      </div>
      <div className="article-body">{body}</div>
      <p>{formattedDate}</p>{" "}
      <div className="upvotes-comments">
        <p>Upvotes: {votes}</p>
        <p>Comments: {comment_count}</p>
      </div>{" "}
    </div>
  );
}
