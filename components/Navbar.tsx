const MENUS = ["home", "products", "features", "about", "contact"];

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-12 sticky top-0 z-10 shadow bg-[#312C38] text-white">
      <h2 className="text-xl font-bold">Atharva Food Products</h2>
      <section className="flex">
        {MENUS.map((menu, i) => (
          <a
            key={i}
            href={`#${menu}`}
            className="text-lg font-normal mx-4 cursor-pointer border-b-4 border-transparent hover:border-red-500"
          >
            {menu}
          </a>
        ))}
      </section>
    </nav>
  );
};

export default Navbar;
