interface dataType {
  title: string;
  total: string;
}
const Reviews = () => {
  const testimonial: dataType[] = [
    {
      title: "PRODUCT",
      total: "10,0000+",
    },
    {
      title: "LIKES",
      total: "45600",
    },
    {
      title: "SALE",
      total: "576864",
    },
    {
      title: "CUSTOMERS",
      total: "947444",
    },
  ];
  return (
    <main className="w-full min-h-[700px] py-12 mx-auto space-y-16 p-4">
      <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center w-full">
        1000+ Customer
      </h2>
      <p className="text-base font-normal text-center max-w-5xl mx-auto">
        Analyze any Business or Creator account—including your competitors—to
        find the imagery, visuals, and captions that drive audience engagement.
        Get social calendars planned faster and spend less time testing content
        strategies.
      </p>
      <div className="lg:border-t border-gray-300 lg:border-b min-h-60 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-6">
        {testimonial.map((item: dataType, index: number) => {
          return (
            <div
              className={`${
                index === testimonial.length - 1 ? "" : "lg:border-r"
              } border-gray-300 flex flex-col justify-center items-center gap-4`}
              key={index}
            >
              <h4 className=" text-gray-400 tracking-widest">{item.title}</h4>
              <p className="font-medium text-2xl">{item.total} </p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Reviews;
