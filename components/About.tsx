const About = () => {
  return (
    <main className="bg-[#312C38] py-32" data-aos="fade-up" id="about">
      <h2 className="text-white text-5xl font-bold text-center">About Us</h2>
      <p className="text-white text-center text-lg mx-auto px-8 md:px-0 w-full md:w-3/5 my-8 leading-loose">
        We are <span className="text-red-600 font-semibold">Atharva Food Products</span> and we have been making spices here in
        India since 2003. As industry leaders since our founding in 2003, we’ve
        grown accustomed to working with people, and providing products to
        wholesalers and dealers worldwide. We enjoy putting our minds together
        to deliver quality goods that adhere to the highest standards.
      </p>
      <section className="flex flex-col lg:flex-row justify-center items-center mt-12 mb-8">
        <button className="bg-black text-lg py-2 px-8 rounded-md text-white hover:bg-black/50 cursor-pointer lg:mr-36 w-1/2 lg:w-1/6">
          Contact Us
        </button>
        <button className="bg-red-500 text-lg py-2 px-8 rounded-md text-white hover:bg-red-400 cursor-pointer w-1/2 lg:w-1/6 mt-4 lg:mt-0">
          Order Now
        </button>
      </section>
    </main>
  );
};

export default About;
