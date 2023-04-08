const FEATURES = ["eco-friendly", "24x7 service", "secure transactions"];

const Why = () => {
  return (
    <main className="py-12" data-aos="fade-up">
      <div id="features" className="absolute -mt-52 bg-transparent" />
      <h2 className="text-3xl font-bold text-center">
        Why Atharva Food Products?
      </h2>
      <p className=" text-center text-xl mx-auto w-2/5 my-8">
        Our customers love working with us because we produce high quality
        products with an exceptionally fast turnaround. Reach out today to get
        an initial quote and start working together.
      </p>
      <section className="flex justify-center mb-8">
        {FEATURES.map((feature, i) => (
          <div key={i} className="flex flex-col items-center mx-20" data-aos="fade-left">
            <div className="bg-black/10 w-48 h-48 rounded-md my-8" />
            <div className="text-3xl">{feature}</div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Why;
