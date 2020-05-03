import React from 'react';
import './item.css';
const Videoitem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img alt={video.title} className="ui image" src={video.pic} />

      <div className="content">
        <div className="header">{video.title}</div>
      </div>
    </div>
  );
};

export default Videoitem;
