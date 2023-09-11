import Button from "./Button";
import { download } from "../assets/icons";
const DownloadCard = ({ id, icon, title, size, href }) => {
  return (
    <div className="flex flex-1 brightness-125 flex-col bg-border_download bg-contain bg-no-repeat justify-center items-center gap-5 py-5 px-1">
      <div className="flex flex-1 flex-row gap-5 justify-center items-center">
        <img
          src={icon}
          alt="icon"
          className=" object-contain w-[50px] h-[50px] max-sm:w-[20px] max-sm:h-[20px]"
        />
        <h3 className="font-kanit text-white font-bold text-2xl">{title}</h3>
      </div>
      <div>
        <p className="text-white font-kanit">
          Size: <span className="text-yellow">{size}</span>
        </p>
      </div>
      <Button label="Download" icon={download} href={href} />
    </div>
  );
};

export default DownloadCard;
