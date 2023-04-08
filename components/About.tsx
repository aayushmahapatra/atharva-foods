const About = () => {
  return (
    <main className="bg-black/20 py-12">
      <h2 className="text-3xl font-bold text-center">About Us</h2>
      <p className=" text-center text-lg mx-auto w-3/5 my-8">
        We are Atharva Food Products and we have been making spices here in
        India since 2003. As industry leaders since our founding in 2003, we’ve
        grown accustomed to working with people, and providing products to
        wholesalers and dealers worldwide. We enjoy putting our minds together
        to deliver quality goods that adhere to the highest standards.
      </p>
      <section className="flex justify-center mt-12 mb-8">
        <button className="bg-black text-lg py-1 px-12 rounded-md text-white hover:bg-black/80 cursor-pointer mr-36">
          contact us
        </button>
        <button className="bg-red-500 text-lg py-1 px-12 rounded-md text-white hover:bg-red-600 cursor-pointer">
          order now
        </button>
      </section>
    </main>
  );
};

export default About;