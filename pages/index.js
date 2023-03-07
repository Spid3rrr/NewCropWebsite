import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

import { motion } from "framer-motion";
import ProductsCarousel from "../components/productsCarousel";
//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>NewCrop - Quality foods</title>
        <meta name="description" content="Sample page made for NewCropt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SectionTitle pretitle="About us" title="Learn our story">
          New crops is a company based in Tunisia . We have begun trading
          internationally since 2005. Nowadays, we buy and sell in almost every
          continent around the world. Each year, we approximately monitor,
          source, transport and market over 2 millions tons of goods. Our
          commodities are varied. We offer more the best quality to our
          customers.
        </SectionTitle>
        <Benefits data={benefitOne} />
      </motion.div>
  
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SectionTitle
          pretitle="Demonstration"
          title="Learn how we can help you grow"
        >
          You can check out this video from one of our clients highlighting the
          growth he has made and how our products eased his way to success
        </SectionTitle>
        <Video />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SectionTitle
          pretitle="Testimonials"
          title="Here's what our customers said"
        >
          Here is some feedback from our customers !
        </SectionTitle>
        <Testimonials />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Cta />
        <Footer />
      </motion.div>
      <PopupWidget />
    </>
  );
}
