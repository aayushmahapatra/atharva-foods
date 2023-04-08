const VALUES = [
  {
    name: "Contact us",
    info1: "atharvamasale@gmail.com",
    info2: "+919405148825",
    info3: "© 2023 Atharva Food Products. ",
  },
  {
    name: "Address",
    info1: "Major State Highway",
    info2: "9, Talodhi, Maharashtra",
    info3: "441221, India",
  },
];

const Contact = () => {
  return (
    <footer
      className="bg-[#312C38] block md:flex justify-center py-6"
      data-aos="fade-up"
      id="contact"
    >
      {VALUES.map((value, i) => (
        <section key={i} className="flex flex-col my-6 md:mx-16 lg:mx-32 text-center md:text-left">
          <h2 className="text-white text-2xl font-semibold mb-2 md:mb-4">
            {value.name}
          </h2>
          <div className="text-[#F7EFE7] text-lg font-light">{value.info1}</div>
          <div className="text-[#F7EFE7] text-lg font-light">{value.info2}</div>
          <div className="text-[#F7EFE7] text-lg font-light">{value.info3}</div>
        </section>
      ))}
    </footer>
  );
};

export default Contact;
