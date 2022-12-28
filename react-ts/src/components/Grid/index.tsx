import { useEffect, useState } from "react";

// enum AvailableColors {
//   rose,
//   amber,
// }

const AvailableColors = ["bg-amber", "bg-rose"];

const Grid = (): JSX.Element => {
  const [isHovered, setIsHovered] = useState(0);
  const [currentColor, setCurrentColor] = useState(AvailableColors[0]);
  console.log("🚀 ~ file: Index.tsx:13 ~ Grid ~ currentColor", currentColor);
  let grids = [];

  for (let index = 1; index <= 81; index++) {
    grids.push(index);
  }

  const gridColor = (isHovered: number, grid: number) => {
    const difference = Math.abs(isHovered - grid);
    if (isHovered === grid) return `bg-amber-600`;
    else if (difference === 1 || difference === 9) return `bg-amber-500`;
    else if (
      difference === 2 ||
      difference === 8 ||
      difference === 10 ||
      difference === 18
    )
      return `bg-amber-400`;
    else if (
      difference === 3 ||
      difference === 7 ||
      difference === 11 ||
      difference === 17 ||
      difference === 19 ||
      difference === 27
    )
      return `bg-amber-300`;
    else if (
      difference === 4 ||
      difference === 6 ||
      difference === 12 ||
      difference === 16 ||
      difference === 20 ||
      difference === 26 ||
      difference === 28 ||
      difference === 36
    )
      return `bg-amber-200`;
  };

  const switchColor = () => {
    setCurrentColor(AvailableColors[1]);
  };

  return (
    <div className="grid grid-cols-9 md:gap-4 sm:p-4 bg-slate-900">
      {grids.map((grid) => (
        <button
          type="button"
          key={grid}
          onClick={() => switchColor()}
          onMouseEnter={() => setIsHovered(grid)}
          onMouseLeave={() => setIsHovered(0)}
          className={`h-20 bg-slate-800 text-white flex justify-center items-center rounded-2xl transition ease-in-out duration-300 ${gridColor(
            isHovered,
            grid
          )}`}
        >
          {gridColor(isHovered, grid)}
        </button>
      ))}
    </div>
  );
};

export default Grid;
