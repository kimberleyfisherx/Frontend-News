import React from "react";

const TopicCard = ({ slug, description, onClick }) => {
  return (
    <div onClick={() => onClick(slug)} className="topic-card">
      <h3>{slug}</h3>
      <p>{description}</p>
    </div>
  );
};

export default TopicCard;
