const VALUES = [
  { metric: "25,000+", name: "Products Sold" },
  { metric: "6,000", name: "Retailers" },
  { metric: "20+", name: "Shops" },
  { metric: "95%", name: "Happy Customers" },
];

const Metrics = () => {
  return (
    <main className="bg-[#312C38] block lg:flex justify-center py-10" data-aos="fade-up">
      {VALUES.map((value, i) => (
        <section key={i} className="flex flex-col items-center mx-16 my-10">
          <h2 className="text-red-500 text-5xl font-semibold mb-4 lg:mb-8" data-aos="flip-up">
            {value.metric}
          </h2>
          <div className="text-white text-2xl">{value.name}</div>
        </section>
      ))}
    </main>
  );
};

export default Metrics;
