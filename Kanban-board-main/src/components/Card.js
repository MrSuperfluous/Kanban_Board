import React from 'react';
import './card.css';

const Card = ({ id, title, userId, users }) => {
  const user = users.find(user => user.id === userId);
  const avatarUrl = user ? `https://robohash.org/${user.id}?set=set2` : '';

  return (
    <div className="card">
      <div className="card-header">
        <span className="task-id">{id}</span>
        <img className="avatar" src={avatarUrl} alt="User Avatar" />
      </div>
      <h3>{title}</h3>
      <div className="tags">
        <span className="priority-tag">!</span>
        <span className="feature-tag">Feature Request</span>
      </div>
    </div>
  );
}

export default Card;

