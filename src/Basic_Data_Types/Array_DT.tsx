import React from "react";

const Array_DT = () => {
  let data: number[];
  data = [1, 2, 3, 4, 5];

  let values: Array<string> = ["man", "hat", "tan"];
  return <div>Data : {data.map((val) => val + " ")}</div>;
};

export default Array_DT;
