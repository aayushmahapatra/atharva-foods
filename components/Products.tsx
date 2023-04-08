import Image from "next/image";
import Masala from "../assets/masala.jpeg";

const TABS = ["masalas", "spices"];
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
  {
    name: "Mutton Masala",
    description:
      "Atharva Mutton Masala is one of our most selling product. It is used to make both veg and nonveg curry's as long as it has gravy in it and it will taste according to the dish you cook.",
  },
];

const Products = () => {
  return (
    <main className="bg-[#BFB0A0] h-fit w-full p-8">
      <h2 className="text-3xl font-bold text-center">our products</h2>
      <section className="flex justify-center mt-2">
        {TABS.map((tab, i) => (
          <div
            key={i}
            className="text-2xl font-semibold mx-6 cursor-pointer border-b-4 border-transparent hover:border-red-500"
          >
            {tab}
          </div>
        ))}
      </section>
      <section className="flex justify-center my-8 w-full">
        {PRODUCTS.map((product, i) => (
          <div key={i} className="bg-black/20 mx-8 p-4 rounded-lg w-1/4 cursor-pointer hover:shadow-lg hover:bg-black/30">
            <div>
              <Image
                src={Masala}
                alt="masala"
                className="w-full max-h-64 rounded-lg"
              />
            </div>
            <h4 className="text-xl text-center mt-4 font-semibold">{product.name}</h4>
            <p className="text-center text-white p-2 font-light">{product.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Products;
