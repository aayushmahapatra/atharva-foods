import Image from "next/image";
import Masala from "../assets/masala.jpeg";

const PRODUCTS = [
  {
    name: "Mutton Masala",
    description:
      "Atharva Mutton Masala is one of our most selling product. It is used to make both veg and nonveg curry's as long as it has gravy in it and it will taste according to the dish you cook.",
  },
  {
    name: "Mutton Masala",
    description:
      "Atharva Mutton Masala is one of our most selling product. It is used to make both veg and nonveg curry's as long as it has gravy in it and it will taste according to the dish you cook.",
  },
];

const Products = () => {
  return (
    <main className="bg-[#BFB0A0] h-fit w-full p-8" data-aos="fade-up">
      <div id="products" className="absolute -mt-52 bg-transparent" />
      <h2 className="text-3xl font-bold text-center">our products</h2>
      <section className="block lg:flex justify-center my-8 w-full">
        {PRODUCTS.map((product, i) => (
          <div
            key={i}
            className="bg-black/20 my-8 lg:my-0 lg:mx-8 p-4 rounded-lg w-full lg:w-1/4 cursor-pointer hover:shadow-lg hover:bg-black/30"
            data-aos="fade-left"
          >
            <div>
              <Image
                src={Masala}
                alt="masala"
                className="w-full max-h-64 rounded-lg"
              />
            </div>
            <h4 className="text-xl text-center mt-4 font-semibold">
              {product.name}
            </h4>
            <p className="text-center text-white p-2 font-light">
              {product.description}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Products;
