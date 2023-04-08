const MENUS = ["home", "products", "features", "about", "contact"];

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6">
      <h2 className="text-2xl font-bold">Atharva Food Products</h2>
      <section className="flex">
        {MENUS.map((menu, i) => (
          <div
            key={i}
            className="text-xl font-semibold mx-4 cursor-pointer border-b-4 border-transparent hover:border-red-500"
          >
            {menu}
          </div>
        ))}
      </section>
    </nav>
  );
};

export default Navbar;
