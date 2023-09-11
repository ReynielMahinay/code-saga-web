import React from "react";
import ReactPlayer from "react-player";
import videoFile from "../assets/video/Trailer.mp4";
const VideoPlayer = () => {
  return (
    <div className="flex justify-center items-center pt-[35px] ">
      <ReactPlayer url={videoFile} controls={true} width={870} height={500} />
    </div>
  );
};

export default VideoPlayer;
