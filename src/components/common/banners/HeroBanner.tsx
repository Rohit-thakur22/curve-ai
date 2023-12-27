import { FaArrowRightLong } from "react-icons/fa6";
const logo = require("../../../assets/images/header card.png");
type Props = {};

const HeroBanner = (props: Props) => {
  return (
    <main className="flex flex-col-reverse md:flex-row w-full justify-center items-center p-2 md:gap-20 md:px-20">
      {/* left-section content of hero-banner */}
      <section className="w-full flex justify-center items-center md:justify-start md:items-start flex-col gap-4">
        <h1 className="w-full text-4xl text-center md:text-4xl lg:text-7xl font-bold tracking-wide whitespace-break-spaces md:text-start">
          Banking <br />
          more smart
        </h1>
        <h4 className="font-normal text-lg md:text-start text-center">
          Meet the only spend management platform and corporate card.
        </h4>
        <div className="flex justify-start items-center gap-4">
          <div className="bg-black p-4">
            <FaArrowRightLong className="text-white" />
          </div>
          <span className="flex text-lg font-medium">Get your card</span>
        </div>
      </section>
      {/* right-section content of hero-banner */}
      <section className="w-full justify-center items-center">
        <img src={logo} alt="" />
      </section>
    </main>
  );
};

export default HeroBanner;
