import React from "react";

export default function Vote({
  handleVote,
  hasVoted,
  voteDirection,
  displayedVotes,
}) {
  return (
    <div className="votes">
      <button
        className="upvoteButton"
        onClick={() => handleVote(1)}
        disabled={hasVoted && voteDirection === 1}
      >
        ⬆
      </button>
      <span className="displayedVotes">{displayedVotes}</span>
      <button
        className="downvoteButton"
        onClick={() => handleVote(-1)}
        disabled={hasVoted && voteDirection === -1}
      >
        ⬇
      </button>
    </div>
  );
}
