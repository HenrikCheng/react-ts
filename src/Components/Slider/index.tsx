import { useState, useEffect, useRef } from "react";

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
  githubLink?: string;
};

type SliderProps = {
  height?: number;
  width?: number;
  slides: SingleSlide[];
  componentId: string;
};
const Slider = ({
  componentId,
  slides,
  height = 300,
  width = 350,
}: SliderProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
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

  const container = document.getElementById(componentId);

  const handleClickLeft = () => {
    if (containerRef.current) {
      containerRef.current.style.scrollBehavior = "smooth";
      containerRef.current.scrollLeft -= 375;
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.scrollBehavior = "auto";
        }
      }, 300);
    }
  };

  const handleClickRight = () => {
    if (containerRef.current) {
      containerRef.current.style.scrollBehavior = "smooth";
      containerRef.current.scrollLeft += 375;
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.scrollBehavior = "auto";
        }
      }, 300);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (container) {
        setIsStart(container.scrollLeft === 0);
        setIsEnd(
          container.scrollLeft === container.scrollWidth - container.clientWidth
        );
      }
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
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
        ref={containerRef} // Use the container reference
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
              githubLink={project.githubLink}
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
