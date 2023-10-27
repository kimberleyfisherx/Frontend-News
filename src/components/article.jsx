import React, { useEffect, useState } from "react";
import { fetchArticleById, patchVotes } from "../Utils/api";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import Vote from "./Votes";

import AddCommentForm from "./AddCommentForm";

function Article() {
  const [article, setArticle] = useState({});
  const [hasVoted, setHasVoted] = useState(false);
  const [voteDirection, setVoteDirection] = useState(0);
  const [displayedVotes, setDisplayedVotes] = useState(0);
  const [comments, setComments] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchArticleById(id).then((data) => {
      setArticle(data);
      const initialVotes = data.article.votes;
      setDisplayedVotes(initialVotes);
    });
  }, [id]);

  useEffect(() => {});

  const handleVote = (vote) => {
    if (hasVoted && vote === voteDirection) {
      patchVotes(id).then((data) => {
        setArticle((updateArticle) => ({
          ...updateArticle,
          votes: data.votes,
        }));
        setHasVoted(false);
        setVoteDirection(0);
        setDisplayedVotes((updateVotes) => updateVotes - vote);
      });
    } else if (!hasVoted) {
      patchVotes(id, vote).then((data) => {
        setArticle((updateArticle) => ({
          ...updateArticle,
          votes: data.votes,
        }));
        setHasVoted(true);
        setVoteDirection(vote);
        setDisplayedVotes((updateVotes) => updateVotes + vote);
      });
    } else {
      setAlreadyVoted(true);
    }
  };

  if (!article || !article.article) {
    return <div>Loading...</div>;
  }

  const { title, topic, author, article_img_url, body, created_at } =
    article.article;

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
      <p className="formatted-date">{formattedDate}</p>

      <Vote
        handleVote={handleVote}
        hasVoted={hasVoted}
        voteDirection={voteDirection}
        displayedVotes={displayedVotes}
      />
      {hasVoted && <p id="alreadyVotedMessage">We have counted your vote.</p>}

      <div>
        <AddCommentForm article_id={id} setComments={setComments} />
        <Comments comments={comments} />
      </div>
    </div>
  );
}

export default Article;
