import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Slide from "./Slide";

type SingleSlide = {
  href?: string;
  imageSrc: string;
  header?: string;
  description?: string;
  techStack?: string[];
  backgroundColor?: string;
};

type SliderProps = {
  height?: string;
  width?: string;
  slides: SingleSlide[];
};
const Slider = ({ slides, height, width }: SliderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    setIsDragging(true);
    setStartX(e.clientX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.clientX - e.currentTarget.offsetLeft;
    const walk = x - startX * 1; // Adjust the multiplier for faster/slower scrolling
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  const handleClickLeft = () => {
    const demoContainer = document.getElementById("Demo");
    if (demoContainer) {
      demoContainer.style.scrollBehavior = "smooth"; // Enable smooth scrolling
      demoContainer.scrollLeft -= 375;
      setTimeout(() => {
        demoContainer.style.scrollBehavior = "auto"; // Revert to normal scrolling
      }, 300);
    }
  };

  const handleClickRight = () => {
    const demoContainer = document.getElementById("Demo");
    if (demoContainer) {
      demoContainer.style.scrollBehavior = "smooth"; // Enable smooth scrolling
      demoContainer.scrollLeft += 375;
      setTimeout(() => {
        demoContainer.style.scrollBehavior = "auto"; // Revert to normal scrolling
      }, 300);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const demoContainer = document.getElementById("Demo");

    const handleScroll = () => {
      if (demoContainer) {
        setIsStart(demoContainer.scrollLeft === 0);
        setIsEnd(
          demoContainer.scrollLeft ===
            demoContainer.scrollWidth - demoContainer.clientWidth
        );
      }
    };

    if (demoContainer) {
      demoContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (demoContainer) {
        demoContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="container relative flex items-center">
      <button
        className="absolute left-4 z-20 disabled:opacity-25"
        type="button"
        onClick={handleClickLeft}
        disabled={isStart} // Disable if at the start
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="fa-2xl bg-slate-800 text-white p-3 rounded-full drop-shadow-lg"
        />
      </button>
      <button
        className="absolute right-4 z-20 disabled:opacity-25"
        type="button"
        onClick={handleClickRight}
        disabled={isEnd} // Disable if at the start
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          className="fa-2xl  bg-slate-800 text-white p-3 rounded-full drop-shadow-lg"
        />
      </button>

      <div
        className="w-full overflow-x-scroll relative cursor-grab active:cursor-grabbing"
        id="Demo"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="flex w-full">
          {isStart && (
            <div
              className={`bg-gradient-to-r from-slate-200 absolute top-0 bottom-0 left-0 w-40 opacity-50`}
            />
          )}

          {slides.map((project, index) => (
            <Slide
              href={project.href}
              imageSrc={project.imageSrc}
              header={project.header}
              description={project.description}
              techStack={project.techStack}
              isDragging={isDragging}
              index={index}
              isEnd={isEnd}
              length={slides.length}
              key={index}
              height={height}
              width={width}
              backgroundColor={project.backgroundColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
