import { monster } from "../assets/images";
import FeatureCard from "../components/FeatureCard";
import { features } from "../constants";
const Features = () => {
  return (
    <section className="max-container  flex flex-row max-lg:flex-col gap-24 max-lg:gap-3 max-sm:gap-8 max-sm:pt-[40px] pb-[90px] justify-center items-center w-full pt-[30px] ">
      <div className=" flex flex-1 bg-border_image bg-no-repeat bg-center bg-contain w-[400px] h-[400px] justify-center items-center">
        <img
          src={monster}
          alt="monster"
          className="w-[300px] h-[300px] xl:w-[349px] xl:h-[349px]  max-sm:w-[170px] max-sm:h-[170px] "
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
