import { monster } from "../assets/images";
import FeatureCard from "../components/FeatureCard";
import { features } from "../constants";
const Features = () => {
  return (
    <section className="max-container flex xl:flex-row flex-col gap-14 justify-center items-center w-full xl:pr-[185px]">
      <div className=" w-[40%]  ">
        <img
          src={monster}
          alt="monster"
          className="w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] rounded-xl"
        />
      </div>
      <div className=" flex flex-1 justify-center items-start flex-col  relative">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
