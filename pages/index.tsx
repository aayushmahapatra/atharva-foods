import Head from "next/head";
import Home from "@/components/Home";
import Metrics from "@/components/Metrics";
import Why from "@/components/Why";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Products from "@/components/Products";

export default function Index() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen">
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
