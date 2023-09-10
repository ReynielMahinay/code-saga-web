import { navLinks } from "../constants";
const Button = ({ label, icon, href, targetId }) => {
  const handleClick = () => {};
  return (
    <a href={href}>
      <button
        onClick={targetId}
        className="bg-yellow max-sm:py-2 max-sm:px-4 px-6 py-2 rounded-full max-sm:text-sm  text-lg font-kanit text-white flex flex-row justify-center items-center "
      >
        {label}
        <img src={icon} alt="download" className="ml-2  w-5 h-5 text-white" />
      </button>
    </a>
  );
};

export default Button;
