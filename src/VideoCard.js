import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './videoCard.css';

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt="" />
      <div className="video__info">
        <Avatar className="videoCard__avatar" alt={channel} src={Avatar} />
        <div className="video__text"></div>
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>
          {views} • {timestamp}
        </p>
      </div>
    </div>
  );
}

export default VideoCard;
