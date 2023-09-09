import { combat, book_white } from "../assets/images";
const Story = () => {
  return (
    <section
      className="relative overflow-hidden max-container flex flex-row max-lg:flex-col-reverse max-sm:pt-[40px] max-md:pt-[50px]
      justify-start items-center w-full gap-24 max-lg:gap-8 max-sm:gap-8 max-md:gap-14 "
      id="about"
    >
      <div className="flex flex-col flex-1 max-w-[500px] max-sm:pt-[10px] max-sm:text-center">
        <h3 className="text-white font-kanit font-semibold text-3xl max-sm:text-[20px] max-sm:leading-normal ">
          This story is of a boy named{" "}
          <span className="text-yellow"> Aarhus</span>, whose father was a
          renowned
          <span className="text-yellow"> scientist </span> and{" "}
          <span className="text-yellow"> programmer</span>.
        </h3>
        <p className="text-slate-300 mt-5 font-montserrat max-sm:text-[15px] ">
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
          className="w-[300px] h-[300px] xl:w-[400px] xl:h-[400px]  max-sm:w-[170px] max-sm:h-[170px] rounded-xl "
        />
      </div>
    </section>
  );
};

export default Story;
