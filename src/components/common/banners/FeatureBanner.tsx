const featureCard = require("../../../assets/images/card.png");
const strategy = require("../../../assets/images/strat.png");
const calender = require("../../../assets/images/calender.png");
const FeatureBanner = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-start justify-center gap-12 py-10 p-2">
      <div className="flex w-full justify-end">
        <img src={featureCard} alt="" />
      </div>
      <div className="flex flex-col space-y-10 justify-center lg:justify-start lg:items-start w-full ">
        <h1 className="text-center lg:text-start text-3xl lg:text-5xl font-semibold mx-auto max-w-md">
          Handoff your work smarter now
        </h1>
        <p className="text-center lg:text-start max-w-md mx-auto">
          Create documentation for the collaborators (i.e. designers or devs)
          directly in your design file.
        </p>
        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start space-y-6">
          <div className="flex  justify-start items-start gap-4">
            <img src={strategy} alt="" />{" "}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">Strategic</h3>
              <p className="max-w-md">
                Suggests that the component spacing between cards and elements.
              </p>
            </div>
          </div>{" "}
          <div className="flex  justify-start items-start gap-4">
            <img src={calender} alt="" />{" "}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">Work schedule</h3>
              <p className="max-w-md">
                work schedule is the time an employee is expected to be on the
                job{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBanner;
