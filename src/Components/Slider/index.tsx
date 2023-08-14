import { useState, useEffect } from "react";

import Slide from "./Slide";

type SingleSlide = {
  href?: string;
  imageSrc: string;
  header: string;
  description: string;
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
          ></div>
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
  );
};

export default Slider;
