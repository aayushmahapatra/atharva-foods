import Image from "next/image";
import Masala from "../assets/masala.jpeg";

const Home = () => {
  return (
    <main className="h-full px-12 py-12">
      <div id="home" className="absolute -mt-12 bg-transparent" />
      <section className="block lg:flex h-3/5">
        <section className="lg:mx-12 w-full lg:w-1/2 text-center lg:text-left">
          <div className="text-6xl font-bold mt-12 lg:mt-36">
            <h1>masalas</h1>
            <h1 className="my-4">&</h1>
            <h1>spices</h1>
          </div>
          <p className="text-xl font-semibold my-12">
            At Atharva Food Products, quality is our mission. No matter what
            you’re looking for, we’re committed to bringing you exactly what you
            need, when you need it.
          </p>
          <button className="bg-red-500 text-xl py-2 px-8 rounded-lg text-white hover:bg-red-600 cursor-pointer">
            order now
          </button>
        </section>
        <section className="w-full lg:w-1/2 flex items-center">
          <div className="h-full w-full xl:w-11/12 flex items-center my-12 lg:my-0 shadow-lg">
            <Image
              src={Masala}
              alt="masala"
              className="mix-blend-multiply w-full h-full rounded-lg"
            />
          </div>
          <div className="absolute -rotate-90 text-9xl font-bold text-black/30 xl:-right-52 hidden xl:block">
            Atharva
          </div>
        </section>
      </section>
    </main>
  );
};

export default Home;
