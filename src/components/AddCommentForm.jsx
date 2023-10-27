import React, { useState } from "react";
import { postComment } from "../Utils/api";

export default function AddCommentForm({ article_id, setComments }) {
  const [commentbody, setcommentbody] = useState("");

  function handleForm(event) {
    event.preventDefault();

    if (commentbody.length > 0) {
      const commentObject = { username: "grumpy19", body: commentbody };

      const newComment = {
        username: "grumpy19",
        body: commentbody,
      };

      setComments((currentComments) => [...currentComments, newComment]);

      postComment(article_id, commentObject)
        .then((comment) => {
          setComments((currentComments) =>
            currentComments.map((c) => (c === newComment ? comment : c))
          );
          setcommentbody("");
        })
        .catch((error) => {
          console.error("Error posting comment:", error);
        });
    }
  }

  return (
    <ul>
      <div className="comment-form">
        <p>Comment below:</p>
        <form onSubmit={handleForm}>
          <textarea
            placeholder="Add new comment..."
            type="text"
            id="comment-body"
            rows="4"
            cols="50"
            value={commentbody}
            onChange={(e) => setcommentbody(e.target.value)}
            required
          />
          <button type="submit" className="btn-submit">
            Post
          </button>
        </form>
      </div>
    </ul>
  );
}
