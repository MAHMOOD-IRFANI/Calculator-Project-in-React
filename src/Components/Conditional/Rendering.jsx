import React, { useState } from "react";

function Rendering() {
  let [increase, setIncrease] = useState(0);

  const increaseValue = () => {
    setIncrease(increase + 1);
  };
  const decreaseValue = () => {
    if (increase > 0) {
      setIncrease(increase - 1);
    }
  };
  const reset = () => {
    setIncrease((increase = 0));
  };

  return (
    <div className=" mx-auto p-12 bg-gray-500 text-white justify-between items-center flex flex-col">
      <h1>{increase}</h1>
      <br />
      <div className="flex gap-4 ">
        {increase > 0 && (
          <>
            <button
              className="px-5 py-2 rounded cursor-pointer bg-green-500 text-white"
              onClick={decreaseValue}
            >
              Decrease
            </button>
          </>
        )}

        <button
          className="px-5 py-2 rounded cursor-pointer bg-green-500 text-white"
          onClick={increaseValue}
        >
          increase
        </button>
       
       {
        increase > 0 && (
            <>
             <button
          className="px-5 py-2 rounded cursor-pointer bg-green-500 text-white"
          onClick={reset}
        >
          Reset
        </button>
            </>
        )
       }
      </div>
    </div>
  );
}

export default Rendering;
