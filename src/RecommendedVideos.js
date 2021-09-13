import React from 'react';
import './recommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Become a Developer"
          views="2.5M Views"
          timestamp="3 days ago"
          channelImage="https://cdn.sanity.io/images/81pocpw8/production/43075765fea446689208becf6947fcf497d621fc-4032x3024.jpg?rect=1007,0,3024,3024&w=320&h=320&fit=crop&auto=format"
          channel="Cassandra Parisi"
          image="https://miro.medium.com/max/900/0*_kzCaYRrAjcxUoHA.jpg"
        />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

export default RecommendedVideos;
