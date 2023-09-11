import { contactLink, gametech, webtech } from "../constants";

const Footer = () => {
  return (
    <footer className="pt-7 pl-10  flex flex-col justify-center items-start gap-10">
      <div className="flex flex-1 flex-row justify-start items-center gap-24">
        <div>
          <h3 className="font-kanit text-yellow font-semibold text-xl ml-2">
            CONTACT
          </h3>
          {contactLink.map((contact) => (
            <a href={contact.href} target="_blank" key={contact.id}>
              <div className="flex items-center">
                <img
                  src={contact.icon}
                  alt="icon"
                  className="bg-darkblueslate h-10 w-10 my-2 rounded-full px-2"
                />
                <span className="font-montserrat text-white text-sm py-3.5 pl-2">
                  {contact.label}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-col  items-start justify-start gap-5">
          <h3 className="font-kanit text-yellow font-semibold text-xl  ml-2  ">
            GAME
          </h3>

          <div className="flex flex-row gap-4 justify-center items-center ">
            {gametech.map((tech) => (
              <div
                key={tech.id}
                className="bg-darkblueslate rounded-full px-2 py-2  "
              >
                <img src={tech.icon} alt="tech" className=" h-6 w-6" />
              </div>
            ))}
          </div>
          <h3 className="font-kanit text-yellow font-semibold text-xl  ml-2 ">
            WEBSITE
          </h3>
          <div className="flex flex-row gap-4 justify-start items-center ">
            {webtech.map((web) => (
              <div
                key={web.id}
                className="bg-darkblueslate rounded-full px-2 py-2"
              >
                <img src={web.icon} alt="icon" className="h-6 w-6" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-white font-montserrat text-sm">
        © reyniel mahinay
      </div>
    </footer>
  );
};

export default Footer;
