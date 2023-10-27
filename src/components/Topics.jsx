import React, { useState, useEffect } from "react";
import TopicCard from "./TopicCard";
import { getTopics } from "../Utils/api";
import TopicArticles from "./TopicArticles";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);

  useEffect(() => {
    getTopics().then((data) => {
      setTopics(data.topics);
    });
  }, []);

  const handleCardClick = (slug) => {
    setSelectedTopic(slug);
  };

  return (
    <div>
      <h3>Click on topic name to see all topic articles</h3>
      <div className="allTopics">
        {topics.map((topic) => (
          <TopicCard
            key={topic.slug}
            slug={topic.slug}
            description={topic.description}
            onClick={() => handleCardClick(topic.slug)}
          />
        ))}
      </div>
      {selectedTopic && <TopicArticles selectedTopic={selectedTopic} />}
    </div>
  );
};

export default Topics;
