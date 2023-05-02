import Image from "next/image";
import Navbar from "@/components/Navbar";
import Masala from "../assets/masala.jpeg";

const TABS = ["Masalas", "Spices"];
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

const AllProducts = () => {
  return (
    <>
      <Navbar />
      <main className="h-full w-full p-8">
        <h2 className="text-5xl font-bold text-center mt-2">Our Products</h2>
        <section className="flex justify-center mt-4 mb-8">
          {TABS.map((tab, i) => (
            <div
              key={i}
              className="text-2xl font-semibold mx-6 cursor-pointer border-b-4 border-transparent hover:border-red-500"
            >
              {tab}
            </div>
          ))}
        </section>
        <section className="block lg:flex justify-center my-4 w-full lg:flex-wrap">
          {PRODUCTS.map((product, i) => (
            <div
              key={i}
              className="bg-black/80 my-4 lg:mx-4 p-3 rounded-lg w-full lg:w-1/4 cursor-pointer hover:shadow-lg hover:bg-black/90"
              data-aos="fade-left"
            >
              <div>
                <Image
                  src={Masala}
                  alt="masala"
                  className="w-full max-h-64 rounded-lg"
                />
              </div>
              <h4 className="text-xl text-center mt-3 mb-2 font-semibold text-white">
                {product.name}
              </h4>
              <p className="text-center text-sm text-gray-300 p-2 font-light">
                {product.description}
              </p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default AllProducts;
