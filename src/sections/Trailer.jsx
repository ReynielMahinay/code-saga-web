import VideoPlayer from "../components/VideoPlayer";

const Trailer = () => {
  return (
    <section
      className="max-container relative flex flex-1 flex-col w-full ustify-center items-center gap-5 pt-[20px]"
      id="gameplay"
    >
      <div className="">
        <h2 className="font-kanit text-yellow text-5xl font-bold ">GAMEPLAY</h2>
      </div>
      <div className="bg-border_video bg-center bg-contain bg-no-repeat w-[950px] h-[571px] justify-center items-center">
        <VideoPlayer />
      </div>
    </section>
  );
};

export default Trailer;
