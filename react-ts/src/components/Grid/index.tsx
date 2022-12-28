import { useState, useEffect } from "react";

enum AvailableColors {
  amber,
  rose,
  teal,
}

const Grid = (): JSX.Element => {
  let grids = [];
  for (let index = 1; index <= 81; index++) {
    grids.push(index);
  }

  const [hoverBox, setHoverBox] = useState<number | null>(null);
  const [currentColor, setCurrentColor] = useState(AvailableColors[0]);

  const gridColor = (currentBox: number, grid: number) => {
    const difference = Math.abs(currentBox - grid);
    if (currentBox === grid) return `bg-${currentColor}-600`;
    else if (difference === 1 || difference === 9)
      return `bg-${currentColor}-500`;
    else if (
      difference === 2 ||
      difference === 8 ||
      difference === 10 ||
      difference === 18
    )
      return `bg-${currentColor}-400`;
    else if (
      difference === 3 ||
      difference === 7 ||
      difference === 11 ||
      difference === 17 ||
      difference === 19 ||
      difference === 27
    )
      return `bg-${currentColor}-300`;
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
      return `bg-${currentColor}-200`;
  };

  const incrementGridColor = () => {
    if (currentColor === AvailableColors[0])
      setCurrentColor(AvailableColors[1]);
    else if (currentColor === AvailableColors[1])
      setCurrentColor(AvailableColors[2]);
    else if (currentColor === AvailableColors[2])
      setCurrentColor(AvailableColors[0]);
  };

  return (
    <div className="grid grid-cols-9 md:gap-4 lg:gap-x-10 sm:p-4 bg-slate-900">
      {grids.map((grid) => (
        <button
          type="button"
          key={grid}
          onClick={() => incrementGridColor()}
          onMouseEnter={() => setHoverBox(grid)}
          className={`h-20 bg-slate-800 text-white flex justify-center items-center rounded-2xl transition ease-in-out duration-300 ${gridColor(
            hoverBox as number,
            grid
          )}`}
        ></button>
      ))}
      <div className="hidden">
        <div className="bg-rose-600" />
        <div className="bg-rose-500" />
        <div className="bg-rose-400" />
        <div className="bg-rose-300" />
        <div className="bg-rose-200" />
        <div className=" bg-teal-600" />
        <div className=" bg-teal-500" />
        <div className=" bg-teal-400" />
        <div className=" bg-teal-300" />
        <div className=" bg-teal-200" />
      </div>
    </div>
  );
};

export default Grid;
