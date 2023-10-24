import React, { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "../Utils/api";
import { useParams } from "react-router-dom";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchCommentsByArticleId(id).then((data) => {
      console.log(data.comments);
      setComments(data.comments);
    });
  }, [id]);

  if (comments.length === 0) {
    return <div>No comments yet.</div>;
  }

  return (
    <div className="comments">
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.comment_id}>
            <div>
              <p>Author: {comment.author}</p>
              <p>Body: {comment.body}</p>
              <p>Created At: {comment.created_at}</p>
              <p>Votes: {comment.votes}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
