import { FC, useState } from "react";
import Router from "next/router";

const MENUS = ["Home", "Products", "Features", "About", "Contact"];

const Navbar: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <main className={`${open && "h-screen"}`}>
      <nav className="flex justify-between items-center py-4 px-4 md:px-12 sticky top-0">
        <h2 className="text-xl font-bold cursor-pointer" onClick={() => Router.push("/")}>
          Atharva Food Products
        </h2>
        <section className="md:hidden">
          {open ? (
            <button onClick={() => setOpen(false)}>X</button>
          ) : (
            <button onClick={() => setOpen(true)}>|||</button>
          )}
        </section>
        <section className="hidden md:flex">
          {MENUS.map((menu, i) => (
            <a
              key={i}
              href={
                menu.toLowerCase() === "products"
                  ? "/products"
                  : `/#${menu.toLowerCase()}`
              }
              className="text-lg font-normal mx-4 cursor-pointer border-b-4 border-transparent hover:border-red-500"
            >
              {menu}
            </a>
          ))}
        </section>
      </nav>
      {open && (
        <section className="absolute h-fit w-full flex flex-col justify-evenly items-center my-4">
          {MENUS.map((menu, i) => (
            <a
              key={i}
              href={menu === "products" ? "/products" : `/#${menu}`}
              className="text-2xl uppercase font-normal my-4 mx-4 cursor-pointer border-b-4 border-transparent hover:border-red-500"
            >
              {menu}
            </a>
          ))}
        </section>
      )}
    </main>
  );
};

export default Navbar;
