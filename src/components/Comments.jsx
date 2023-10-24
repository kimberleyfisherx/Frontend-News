import React, { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "../Utils/api";
import { useParams } from "react-router-dom";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchCommentsByArticleId(id).then((data) => {
      setComments(data.comments);
    });
  }, [id]);

  if (comments.length === 0) {
    return <div>No comments yet.</div>;
  }
  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <ul>
        {comments.map(({ comment_id, author, body, created_at, votes }) => {
          const createdDate = new Date(created_at);
          const formattedDate = createdDate.toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          });

          return (
            <li key={comment_id}>
              <div className="comment-card">
                <div className="comment-author">
                  <p>{author}:</p>
                </div>
                <p className="comment-body">{body}</p>
                <p className="formatted-date">{formattedDate}</p>
                <p>Upvotes: {votes}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
