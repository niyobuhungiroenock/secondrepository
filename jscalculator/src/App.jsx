import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");

  // Handler for buttons
  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  // Handler for equals
  const handleEqual = () => {
  try {
  setDisplay(Function(`"use strict"; return (${display})`)().toString());
} catch {
  setDisplay("Error");
}

  };

  // Handler for clear
  const handleClear = () => setDisplay("");

  // Handler for delete last character
  const handleDelete = () =>
    setDisplay((prev) => prev.slice(0, prev.length - 1));

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-blue-700 p-6 rounded-xl shadow-lg w-80">
        <input
          type="text"
          className="w-full mb-4 text-right p-3 text-2xl rounded bg-gray-800 text-white"
          value={display}
          readOnly
        />

        <div className="grid grid-cols-4 gap-3">
          {/* First row */}
          <button
            className="bg-gray-600 text-white p-3 rounded hover:bg-gray-500"
            onClick={handleClear}
          >
            AC
          </button>
          <button
            className="bg-gray-600 text-white p-3 rounded hover:bg-gray-500"
            onClick={handleDelete}
          >
            DE
          </button>
          <button
            className="bg-gray-600 text-white p-3 rounded hover:bg-gray-500"
            onClick={() => handleClick(".")}
          >
            .
          </button>
          <button
            className="bg-teal-400 text-white p-3 rounded hover:bg-teal-500"
            onClick={() => handleClick("/")}
          >
            /
          </button>

          {/* Second row */}
          {[7, 8, 9].map((num) => (
            <button
              key={num}
              className="bg-gray-600 text-white p-3 rounded hover:bg-gray-500"
              onClick={() => handleClick(num.toString())}
            >
              {num}
            </button>
          ))}
          <button
            className="bg-teal-400 text-white p-3 rounded hover:bg-teal-500"
            onClick={() => handleClick("*")}
          >
            *
          </button>

          {/* Third row */}
          {[4, 5, 6].map((num) => (
            <button
              key={num}
              className="bg-gray-600 text-white p-3 rounded hover:bg-gray-500"
              onClick={() => handleClick(num.toString())}
            >
              {num}
            </button>
          ))}
          <button
            className="bg-teal-400 text-white p-3 rounded hover:bg-teal-500"
            onClick={() => handleClick("-")}
          >
            -
          </button>

          {/* Fourth row */}
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              className="bg-gray-600 text-white p-3 rounded hover:bg-gray-500"
              onClick={() => handleClick(num.toString())}
            >
              {num}
            </button>
          ))}
          <button
            className="bg-teal-400 text-white p-3 rounded hover:bg-teal-500"
            onClick={() => handleClick("+")}
          >
            +
          </button>

          {/* Fifth row */}
          <button
            className="bg-gray-600 text-white p-3 rounded hover:bg-gray-500 col-span-2"
            onClick={() => handleClick("00")}
          >
            00
          </button>
          <button
            className="bg-gray-600 text-white p-3 rounded hover:bg-gray-500"
            onClick={() => handleClick("0")}
          >
            0
          </button>
          <button
            className="bg-teal-400 text-white p-3 rounded hover:bg-teal-500"
            onClick={handleEqual}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
