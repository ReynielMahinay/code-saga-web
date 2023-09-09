import { combat } from "../assets/images";
const Story = () => {
  return (
    <section
      className="containter flex flex-col-reverse min-h-screen  md:flex-row justify-start items-center w-full gap-24 "
      id="about"
    >
      <div className="flex flex-col flex-1 max-w-[500px] sm:pt-md">
        <h3 className="text-white font-kanit font-semibold text-3xl ">
          This story is of a boy named{" "}
          <span className="text-yellow"> Aarhus</span>, whose father was a
          renowned
          <span className="text-yellow"> scientist </span> and{" "}
          <span className="text-yellow"> programmer</span>.
        </h3>
        <p className="text-slate-300 mt-5 font-montserrat">
          He was an intelligent kid who grew up with his father, who influenced
          him in technology and programming. He is always in his father's office
          when his father is not at home, where he spends a lot of time reading
          books. One day his father did not come home, the day turned into a
          week, and the week turned into a month. One day he discovers a note
          from his father that was written before he vanished. And this is where
          his adventure starts and solves the mystery of his father's
          vanishment.
        </p>
      </div>
      <div>
        <img
          src={combat}
          alt="combat"
          className="w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] rounded-xl"
        />
      </div>
    </section>
  );
};

export default Story;
