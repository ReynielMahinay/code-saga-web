const FeatureCard = ({ icon, title, content, id }) => {
  return (
    <div className="flex flex-row flex-1 p-6 rounded-[20px] feature-card ">
      <div className="flex bg-yellow  justify-center items-center ">
        <img
          src={icon}
          alt="icon"
          className="w-[50%] h-[50%] object-contain "
        />
      </div>
      <div className="flex flex-col pl-10 border-2">
        <h4 className="text-white font-kanit text-xl font-bold">{title}</h4>
        <p className="text-slate-300 font-montserrat"> {content}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
