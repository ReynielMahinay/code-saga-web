import { downloadLinks } from "../constants";
import DownloadCard from "../components/DownloadCard";
const Download = () => {
  return (
    <section
      className="max-container flex flex-col flex-1 w-full  gap-10 justify-center items-center pb-[50px]"
      id="download"
    >
      <div className="font-kanit font-bold text-5xl text-yellow justify-center items-center">
        <h1>DOWNLOAD LINKS</h1>
      </div>
      <div className="flex flex-row gap-11 w-full bg-dark_blue py-10 px-10 rounded-xl">
        {downloadLinks.map((link) => (
          <DownloadCard key={link.id} {...link} />
        ))}
      </div>
    </section>
  );
};

export default Download;
