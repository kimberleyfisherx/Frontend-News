import React from "react";
import AddCommentForm from "./AddCommentForm";

export default function Commentbox() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return <AddCommentForm handleSubmit={handleSubmit} />;
}
