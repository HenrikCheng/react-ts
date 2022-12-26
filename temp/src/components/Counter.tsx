import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  setAmount,
} from "../features/counter/counterSlice";

const Counter: React.FC = () => {
  const count = useSelector((state: any) => {
    return state.counter.value;
  });
  const dispatch = useDispatch();
  const [name, setName] = useState(count);

  useEffect(() => {
    dispatch(setAmount(name));
  }, [dispatch, name]);

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="inputValue"
          >
            Input value
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="number"
            placeholder="Input value"
            value={count}
            onChange={(e) => setName(parseInt(e.target.value))}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => dispatch(increment())}
          >
            increment +
          </button>
          <button
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            type="button"
            onClick={() => dispatch(decrement())}
          >
            decrement -
          </button>
        </div>
      </form>
    </div>
  );
};

export default Counter;
