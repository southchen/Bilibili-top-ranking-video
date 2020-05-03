import React from 'react';
const Videodetails = ({ video, videos }) => {
  console.log(videos);
  if (videos.length == 0) {
    return (
      <div>
        Pick a Channel <span>☝️☝️</span>
      </div>
    );
  } else if (!video) {
    console.log(videos);
    return (
      <div className="float right">
        Pick a Video <span>👉🏻👉🏻</span>
      </div>
    );
  }

  return (
    <div>
      <div className="ui embed">
        <iframe
          src={`//player.bilibili.com/player.html?aid=${video.aid}&bvid=${video.bvid}`}
          scrolling="no"
          border="0"
          frameBorder="no"
          framespacing="0"
          allowFullScreen={true}
        >
          {' '}
        </iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.title}</h4>
        <p>{video.description}</p>
      </div>
    </div>
  );
};

export default Videodetails;
