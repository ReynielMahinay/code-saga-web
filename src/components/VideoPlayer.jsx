import ReactPlayer from "react-player/youtube";
const VideoPlayer = () => {
  return (
    <s>
      <ReactPlayer
        url="https://www.youtube.com/embed/dj1UWszbB-8?si=rXXFjvFF0kIVP3XG"
        controls={true}
        width={900}
        height={500}
      />
    </s>
  );
};

export default VideoPlayer;
