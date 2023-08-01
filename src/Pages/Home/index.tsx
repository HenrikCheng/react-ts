import { useState, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectModal } from "../Modal/modalSlice";

import Navbar from "../Navbar";
import Hero from "../Hero";
import Modal from "../Modal";
import CV from "../CV";
import About from "../About";
import Demo from "../Demo";
import Contact from "../Contact";
import "../../App.css";
import CardGrid from "../../components/Card/cardGrid";

const Home = () => {
  const [pixelsFromTop, setPixelsFromTop] = useState<number>(0);
  const showModal = useAppSelector(selectModal);

  const onScroll = (e: any) => {
    setPixelsFromTop(e.target.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pixelsFromTop]);

  return (
    <main className="bg-gray-100">
      <Modal />
      <div className={`${showModal && `fixed blur-sm`}`}>
        <Navbar />
        <Hero />
        <CardGrid>
          <About />
          <CV />
          <Contact />
        </CardGrid>
        <Demo />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
        </header> */}
      </div>
    </main>
  );
};

export default Home;
