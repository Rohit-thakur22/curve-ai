const Banner = () => {
  return (
    <section className="bg-[#cfedff] w-full flex flex-col lg:flex-row justify-center md:justify-evenly items-center min-h-96 md:relative mt-10 space-y-6">
      <div className="flex flex-col gap-4">
        <h2 className="text-center md:text-start font-medium text-3xl">
          We Building <br />
          Social uniqueness
        </h2>
        <p className="text-center md:text-start font-normal text-base">
          The marketing strategy lays out target markets and the value.
        </p>
      </div>
      <div className="text-center md:text-start flex flex-col gap-4">
        <h2 className=" text-center md:text-start font-medium text-3xl">
          Social Media <br />
          beyond probability
        </h2>
        <p className="font-normal text-base">
          Essentially a formula for how a business is going to compete,
        </p>
      </div>{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="none"
        className="banner-ellips hidden md:absolute"
      >
        <path
          d="M70 35C70 28.0777 67.9473 21.3108 64.1014 15.555C60.2556 9.79932 54.7893 5.31328 48.3939 2.66422C41.9985 0.0151492 34.9612 -0.677968 28.1718 0.672515C21.3825 2.023 15.1461 5.35642 10.2513 10.2513C5.35642 15.1461 2.023 21.3825 0.672515 28.1718C-0.677968 34.9612 0.0151493 41.9985 2.66422 48.3939C5.31328 54.7893 9.79932 60.2556 15.555 64.1014C21.3108 67.9473 28.0777 70 35 70L35 35L70 35Z"
          fill="#45B3F2"
        />
      </svg>
    </section>
  );
};

export default Banner;
