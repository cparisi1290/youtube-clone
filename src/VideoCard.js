import React from 'react';

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div>
      <img src={image} alt="" />
      <div className="video__info"></div>
    </div>
  );
}

export default VideoCard;
