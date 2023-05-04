import Image from "next/image";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";
import Linkedin from "../assets/linkedin.svg";

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
      className="bg-red-500 block md:flex justify-center py-6"
      data-aos="fade-up"
      id="contact"
    >
      <section className="flex flex-col my-6 md:mx-16 lg:mx-32 text-center md:text-left">
        <h1 className="text-white font-semibold text-3xl">Get in touch</h1>
        <h2 className="text-[#312C38] text-lg font-semibold mt-6 mb-2 md:mb-3">
          Email
        </h2>
        <div className="text-gray-300 text-sm font-light">
          atharvamasale@gmail.com
        </div>
        <div className="text-gray-300 text-sm font-light">+919405148825</div>
        <div className="text-gray-300 text-sm font-light">
          © 2023 Atharva Food Products.
        </div>
      </section>
      <section className="flex flex-col my-6 md:mx-16 lg:mx-32 text-center md:text-left">
        <h1 className="mt-9" />
        <h2 className="text-[#312C38] text-lg font-semibold mt-6 mb-2 md:mb-3">
          Social Media
        </h2>
        <div className="text-gray-300 text-sm font-light flex justify-between">
          <Image src={Instagram} alt="instagram" className="w-6 h-6 invert" />
          <Image src={Facebook} alt="facebook" className="w-6 h-6 invert" />
          <Image src={Linkedin} alt="linkedin" className="w-6 h-6 invert" />
        </div>
      </section>
      <section className="flex flex-col my-6 md:mx-16 lg:mx-32 text-center md:text-left">
        <h1 className="text-white font-semibold text-3xl">Where we are</h1>
        <h2 className="text-[#312C38] text-lg font-semibold mt-6 mb-2 md:mb-3">
          Address
        </h2>
        <div className="text-gray-200 text-sm font-light">
          Major State Highway
        </div>
        <div className="text-gray-200 text-sm font-light">
          9, Talodhi, Maharashtra
        </div>
        <div className="text-gray-200 text-sm font-light">441221, India</div>
      </section>
    </footer>
  );
};

export default Contact;
