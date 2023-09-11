import { downloadLinks } from "../constants";
import DownloadCard from "../components/DownloadCard";
const Download = () => {
  return (
    <section
      className="max-container flex flex-col flex-1 w-full  gap-10 justify-center items-center pb-[50px]  md:padding-t max-sm:px8 max-md:px-10"
      id="download"
    >
      <div className="font-kanit font-bold text-5xl text-yellow justify-center items-center">
        <h1>DOWNLOAD LINKS</h1>
      </div>
      <div className="flex  flex-row gap-11 w-full  py-2 md:padding-r md:padding-l">
        {downloadLinks.map((link) => (
          <DownloadCard key={link.id} {...link} />
        ))}
      </div>
    </section>
  );
};

export default Download;
