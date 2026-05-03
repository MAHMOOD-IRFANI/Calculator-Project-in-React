import { evaluate } from "mathjs";
import React, { useState } from "react";

export default function Calculator() {
  let [result, setResult] = useState("");
  let [hasPoint, setHasPoint] = useState(false);

  const checkInput = (text) => {
    if (text === "×") return "*";
    if (text === "÷") return "/";
    if (text === "−") return "-";
    return text;
  };
  const clickHandler = (e) => {
    let input = checkInput(e.target.innerText);
    let operator = ["+", "-", "*", "/"];
    if (result === "" && operator.includes(input)) {
      setResult("");
      return;
    }

    if (input === ".") {
      if (hasPoint === true) return;
      else {
        setHasPoint(true);
      }
    }

    if (operator.includes(input)) {
      setHasPoint(false);
    }


    if (input === "." && result === "") {
      setResult("0.");
      setHasPoint(true);
      return;
    }
    setResult(result + input);
  };

  const clear = () => {
    setResult("");
    setHasPoint(false);
  };
  const remove = () => {
    if (result.endsWith(".")) setHasPoint(false);
    setResult(result.slice(0, -1));
  };
  // const equal = () => {
  //   // setResult(String(eval(result)));
  //   setResult(evaluate(result).toString());
  //   setResult(calculation.toFixed(2).toString());
  //   setHasPoint(false);
  // };
  const equal = () => {
    try {
      const calculation = evaluate(result);

      const roundedResult = Number(calculation.toFixed(2)).toString();

      setResult(roundedResult);
      setHasPoint(roundedResult.includes("."));
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <h1>Calculator for Calculation</h1>
      <p>MAHMOOD IRFANI (SB)</p>
      <div className="bg-[#2c2f3a] w-[280px] rounded-xl shadow-lg overflow-hidden ">
        {/* Display */}
        <div className=" [direction:rtl] text-right [unicode-bidi:plaintext] bg-[#2c2f3a]  h-[80px] flex items-center text-white text-2xl mx-4 overflow-x-hidden">
          {result}
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-4">
          {/* Top Row */}
          <Button
            clickHandler={clear}
            className="col-span-2 bg-cyan-500 text-black h-14"
          >
            Clear
          </Button>
          <Button clickHandler={remove} className="bg-cyan-500 text-black h-14">
            C
          </Button>
          <Button
            clickHandler={clickHandler}
            className="bg-cyan-500 text-black h-14"
          >
            ÷
          </Button>

          {/* Row 2 */}
          <Button clickHandler={clickHandler} className="h-14 text-white">
            7
          </Button>
          <Button clickHandler={clickHandler} className="h-14 text-white">
            8
          </Button>
          <Button clickHandler={clickHandler} className="h-14 text-white">
            9
          </Button>
          <Button
            clickHandler={clickHandler}
            className="bg-cyan-500 text-black h-14"
          >
            ×
          </Button>

          {/* Row 3 */}
          <Button clickHandler={clickHandler} className="h-14 text-white">
            4
          </Button>
          <Button clickHandler={clickHandler} className="h-14 text-white">
            5
          </Button>
          <Button clickHandler={clickHandler} className="h-14 text-white">
            6
          </Button>
          <Button
            clickHandler={clickHandler}
            className="bg-cyan-500 text-black h-14"
          >
            −
          </Button>

          {/* Row 4 */}
          <Button clickHandler={clickHandler} className="h-14 text-white">
            1
          </Button>
          <Button clickHandler={clickHandler} className="h-14 text-white">
            2
          </Button>
          <Button clickHandler={clickHandler} className="h-14 text-white">
            3
          </Button>
          <Button
            clickHandler={clickHandler}
            className="bg-cyan-500 text-black h-14"
          >
            +
          </Button>

          {/* Bottom Row */}
          <Button clickHandler={clickHandler} className="h-14 text-white">
            0
          </Button>
          <Button clickHandler={clickHandler} className="h-14 text-white">
            .
          </Button>
          <Button
            clickHandler={equal}
            className="col-span-2 bg-cyan-500 text-black h-14"
          >
            =
          </Button>
        </div>
      </div>
    </div>
  );
}
const Button = ({ children, className, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      className={`flex items-center justify-center text-lg font-medium border border-gray-600 ${className}`}
    >
      {children}
    </button>
  );
};
