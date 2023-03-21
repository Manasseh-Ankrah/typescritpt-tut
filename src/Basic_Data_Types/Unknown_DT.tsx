import React from "react";

const Unknown_DT = () => {
  let strangeVal: unknown = 4;
  console.log(strangeVal);
  console.log(typeof strangeVal);
  console.log("==============");
  if (typeof strangeVal === "number") {
    console.log("====================================");
    console.log("Strange Val is Definetely a number");
    console.log("====================================");
  }
  strangeVal = "Manasseh";
  console.log(strangeVal);
  console.log(typeof strangeVal);
  console.log("==============");
  strangeVal = true;
  console.log(strangeVal);
  console.log(typeof strangeVal);
  console.log("==============");
  strangeVal = { id1: 1, id2: 2, id3: 3 };
  console.log(strangeVal);
  console.log(typeof strangeVal);
  console.log("==============");
  strangeVal = [{ id1: 1, id2: 2, id3: 3 }];
  console.log(strangeVal);
  console.log(typeof strangeVal);
  console.log("==============");

  function move(dir: number) {
    console.log(dir);
  }
  move(392);

  return <div>Unknown_DT</div>;
};

export default Unknown_DT;
