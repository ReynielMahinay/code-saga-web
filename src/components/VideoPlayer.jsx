import React from "react";
import ReactPlayer from "react-player";
import videoFile from "../assets/video/Trailer.mp4";
const VideoPlayer = () => {
  return (
    <div className="player-wrapper border-2">
      <ReactPlayer
        url={videoFile}
        controls={true}
        className="react-player"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoPlayer;
