import React from "react";

export default function AddCommentForm({ handleSubmit }) {
  return (
    <form
      className="comment_form"
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <div className="comment-form">
        <h2> Add comment </h2>
        <label htmlFor="username"> Username</label>
        <input type="text" id="username" required />
        <label htmlFor="commentbody"> Add a comment...</label>
        <input type="text" id="commentbody" required />
      </div>
    </form>
  );
}
