import { contactLink } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div>
        <h3>CONTACT</h3>
      </div>
      <div className="flex flex-1 flex-row justify-center items-center ">
        <div className="bg-darkblueslate ">
          {contactLink.map((contact) => (
            <img src={contact.icon} alt="icon" className="h-7 w-7 " />
          ))}
        </div>

        <ul>
          {contactLink.map((contact) => (
            <li className="font-montserrat text-white text-sm ">
              {contact.label}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
