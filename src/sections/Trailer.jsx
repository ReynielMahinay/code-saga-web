import VideoPlayer from "../components/VideoPlayer";

const Trailer = () => {
  return (
    <section
      className="max-container flex flex-1 flex-col w-full padding justify-center items-center gap-14"
      id="gameplay"
    >
      <div className="">
        <h2 className="font-kanit text-yellow text-5xl font-bold ">Trailer</h2>
      </div>
      <div className=" ">
        <VideoPlayer />
      </div>
    </section>
  );
};

export default Trailer;
