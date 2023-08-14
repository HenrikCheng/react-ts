import Navbar from "../Navbar";
import Hero from "../Hero";
import Modal from "../Modal";
import CV from "../CV";
import About from "../About";
import Demo from "../Demo";
import Contact from "../Contact";
import "../../App.css";
import Competences from "../Competences";
import Footer from "../Footer";

const Home = () => {
  return (
    <main className="bg-slate-200 relative mb-24 z-10" id="Home">
      <Modal />
      <Navbar />
      <Hero />
      <div className="flex flex-col w-full items-center z-20 space-y-4">
        <About />
        <Competences />
        <CV />
        <Demo />
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
