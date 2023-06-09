import { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Metrics from "@/components/Metrics";
import Products from "@/components/Products";
import Why from "@/components/Why";
import About from "@/components/About";
import Contact from "@/components/Contact";
import "aos/dist/aos.css";

export default function Index() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Home />
        <Metrics />
        <Products />
        <Why />
        <About />
        <Contact />
      </main>
    </>
  );
}
