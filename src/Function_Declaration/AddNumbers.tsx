import React from "react";

const AddNumbers = () => {
  function green(color: string): string {
    return color;
  }

  console.log("====================================");
  console.log(green("GREEN"));
  console.log("====================================");

  function Addition(
    num1: number,
    num2: number,
    num3: number,
    num4: number
  ): number {
    let numPy = num1 + num2 + num3 + num4;
    return numPy;
  }
  console.log(Addition(2, 4, 5, 6));

  return <div>AddNumbers</div>;
};

export default AddNumbers;
