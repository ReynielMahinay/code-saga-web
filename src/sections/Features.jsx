import { monster } from "../assets/images";
import FeatureCard from "../components/FeatureCard";
import { features } from "../constants";
const Features = () => {
  return (
    <section className="max-container flex flex-row max-lg:flex-col gap-24 max-lg:gap-3 max-sm:gap-8 max-sm:pt-[40px] justify-center items-center w-full pt-[30px] ">
      <div>
        <img
          src={monster}
          alt="monster"
          className="w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] max-sm:w-[170px] max-sm:h-[170px]   rounded-xl "
        />
      </div>
      <div className=" flex flex-1 justify-center items-start flex-col relative">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
