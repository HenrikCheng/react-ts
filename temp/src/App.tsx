import React from "react";
import Counter from "./components/Counter";

const App: React.FC = () => {
  return (
    <div className="flex flex-col w-screen h-screen bg-gray-500">
      <Counter />
    </div>
  );
};

export default App;
