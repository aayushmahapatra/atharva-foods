import Image from "next/image";
import EcoFriendly from "../assets/eco.svg";
import Service from "../assets/service.svg";
import Secure from "../assets/secure.svg";

const FEATURES = [
  { name: "Eco-Friendly", icon: EcoFriendly },
  { name: "Secure Transactions", icon: Secure },
  { name: "24x7 service", icon: Service },
];

const Why = () => {
  return (
    <main className="py-12" data-aos="fade-up">
      <div id="features" className="absolute -mt-52 bg-transparent" />
      <h2 className="text-4xl font-bold text-center">Why Atharva Foods?</h2>
      <p className="text-center text-xl px-4 md:px-0 mx-auto w-full lg:w-2/5 my-8">
        Our customers love working with us because we produce high quality
        products with an exceptionally fast turnaround. Reach out today to get
        an initial quote and start working together.
      </p>
      <section className="block lg:flex justify-center mb-8">
        {FEATURES.map((feature, i) => (
          <div
            key={i}
            className="flex flex-col items-center mx-20 my-4 lg:my-0"
            data-aos="fade-left"
          >
            <Image
              src={feature.icon}
              alt="eco-friendly"
              className="w-44 h-44 rounded-md my-8"
            />
            <div className="text-3xl">{feature.name}</div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Why;
