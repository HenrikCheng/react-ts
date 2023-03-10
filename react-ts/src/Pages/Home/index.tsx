import React, { useState, useRef, MutableRefObject, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectModal } from "../Modal/modalSlice";

import logo from "../../logo.svg";
import { Counter } from "../../features/counter/Counter";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Modal from "../Modal";
import CV from "../CV";
import About from "../About";
import Demo from "../Demo";
import Contact from "../Contact";
// import Grid from "./components/Grid";
import "../../App.css";

const Home = () => {
  const [pixelsFromTop, setPixelsFromTop] = useState<number>(0);
  const showModal = useAppSelector(selectModal);

  const onScroll = (e: any) => {
    setPixelsFromTop(e.target.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    console.log(
      "🚀 ~ file: index.tsx:19 ~ Home ~ pixelsFromTop",
      pixelsFromTop
    );
    return () => window.removeEventListener("scroll", onScroll);
  }, [pixelsFromTop]);

  return (
    <div>
      <Modal />
      <div className={`${showModal && `fixed blur-sm`}`}>
        <Navbar />
        <Hero />
        {/* <Grid /> */}
        <About />
        <CV />
        <Demo />
        <Contact />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
        </header>
      </div>
    </div>
  );
};

export default Home;
