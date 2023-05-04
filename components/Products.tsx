import Image from "next/image";
import Router from "next/router";
import Masala from "../assets/masala.jpeg";

const PRODUCTS = [
  {
    name: "Masalas",
    description:
      "Atharva Mutton Masala is one of our most selling product. It is used to make both veg and nonveg curry's as long as it has gravy in it and it will taste according to the dish you cook.",
  },
  {
    name: "Spices",
    description:
      "Atharva Mutton Masala is one of our most selling product. It is used to make both veg and nonveg curry's as long as it has gravy in it and it will taste according to the dish you cook.",
  },
];

const Products = () => {
  return (
    <main className="bg-red-500 h-fit w-full py-20 px-8" data-aos="fade-up">
      <h2 className="text-white text-5xl font-bold text-center">
        Our Products
      </h2>
      <section className="block lg:flex justify-center mt-14 mb-8 w-full">
        {PRODUCTS.map((product, i) => (
          <div
            key={i}
            className="flex bg-black/30 my-8 lg:my-0 lg:mx-8 p-4 rounded-lg w-full lg:w-1/2 cursor-pointer hover:shadow-lg hover:bg-black/40"
            data-aos="fade-left"
            onClick={() => Router.push("/products")}
          >
            <div className="w-1/2">
              <Image
                src={Masala}
                alt="masala"
                className="max-h-72 rounded-lg"
              />
            </div>
            <div className="w-1/2 px-8 flex flex-col justify-center">
              <h4 className="text-white text-2xl font-semibold mb-3">
                {product.name}
              </h4>
              <p className="text-gray-300 text-md font-light">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Products;
