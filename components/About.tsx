const About = () => {
  return (
    <main className="bg-black/20 py-12" data-aos="fade-up" id="about">
      <h2 className="text-3xl font-bold text-center">About Us</h2>
      <p className=" text-center text-lg mx-auto px-8 md:px-0 w-full md:w-3/5 my-8">
        We are Atharva Food Products and we have been making spices here in
        India since 2003. As industry leaders since our founding in 2003, we’ve
        grown accustomed to working with people, and providing products to
        wholesalers and dealers worldwide. We enjoy putting our minds together
        to deliver quality goods that adhere to the highest standards.
      </p>
      <section className="flex flex-col lg:flex-row justify-center items-center mt-12 mb-8">
        <button className="bg-black text-lg py-1 px-12 rounded-md text-white hover:bg-black/80 cursor-pointer lg:mr-36 w-1/2 lg:w-1/6">
          contact us
        </button>
        <button className="bg-red-500 text-lg py-1 px-12 rounded-md text-white hover:bg-red-600 cursor-pointer w-1/2 lg:w-1/6 mt-4 lg:mt-0">
          order now
        </button>
      </section>
    </main>
  );
};

export default About;
