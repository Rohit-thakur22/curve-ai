const logo = require("../../assets/images/image.png");

interface dataType {
  img: any;
  title: string;
  description: string;
}

const hotDealsList: dataType[] = [
  {
    img: logo,
    title: "1.5% cashback",
    description: "Online shopping for retail sales direct to consumers",
  },
  {
    img: logo,
    title: "30-day terms",
    description: "Online shopping for retail sales direct to consumers",
  },
  {
    img: logo,
    title: "Save Money",
    description: "Online shopping for retail sales direct to consumers",
  },
];
const HotDeals = () => {
  return (
    <main className="w-full px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center min-h-72 space-y-10">
      <section className="flex flex-col justify-start items-start gap-3">
        <h3 className="text-center md:text-start text-2xl lg:text-4xl font-bold">
          <span className="flex justify-center items-center md:justify-start md:items-center">Hot 🔥</span>
          deals for you{" "}
        </h3>
        <p className="text-center md:text-start">Online shopping for retail sales direct to consumers</p>
      </section>
      {hotDealsList.map((item: dataType, index: number) => {
        return (
          <section
            className="flex flex-col justify-center items-center md:justify-start md:items-start  gap-3 "
            key={index}
          >
            <img src={item.img} alt="hot-deal img" />
            <h3 className="text-center md:text-start text-xl font-bold">{item.title}</h3>
            <p className="text-center md:text-start text-base font-normal">{item.description}</p>
          </section>
        );
      })}
    </main>
  );
};

export default HotDeals;
