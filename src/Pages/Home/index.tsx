import { useState, useEffect } from "react";

import Navbar from "../Navbar";
import Hero from "../Hero";
import Modal from "../Modal";
import CV from "../CV";
import About from "../About";
import Demo from "../Demo";
import Contact from "../Contact";
import "../../App.css";
import CardGrid from "../../components/Card/cardGrid";
import Competences from "../Competences";
import Footer from "../Footer";

const Home = () => {
  const [pixelsFromTop, setPixelsFromTop] = useState<number>(0);

  const onScroll = (e: any) => {
    setPixelsFromTop(e.target.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pixelsFromTop]);

  return (
    <main className="bg-slate-200" id="Home">
      <Modal />
      <Navbar />
      <Hero />
      <CardGrid>
        <About />
        <Competences />
        <CV />
        <Contact />
        <Demo />
      </CardGrid>
      <Footer />
    </main>
  );
};

export default Home;
