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
        <h2 className="text-3xl font-bold text-center mt-2">Our Products</h2>
        <section className="flex justify-center mt-4">
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
              className="bg-black/20 my-8 lg:mx-8 p-4 rounded-lg w-full lg:w-1/4 cursor-pointer hover:shadow-lg hover:bg-black/30"
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
    </>
  );
};

export default AllProducts;
