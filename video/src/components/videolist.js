import React from 'react';
import VideoItem from './videoitems';

const Videolist = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem key={video.aid} onVideoSelect={onVideoSelect} video={video} />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default Videolist;
