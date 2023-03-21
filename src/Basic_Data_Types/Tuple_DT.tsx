import React from "react";

const Tuple_DT = () => {
  let X: [string, number] = ["mandev", 10];

  let data: object = {
    name: "man",
    age: "man",
    url: "man",
  };

  let responseObj = {
    name: "Manasseh Ankrah",
    url: "https://mandev-pic.png",
    age: 23,
    note: "Learning Typescript is fun",
    pic: "Picture",
  };

  let responseTuple: object = {
    name: "Manasseh Ankrah",
    url: "https://mandev-pic.png",
    age: 23,
    note: "Learning Typescript is fun",
    pic: "Picture",
  };

  const check = responseObj == responseTuple;
  console.log("Compare", typeof responseTuple);
  console.log("responseObj", responseObj);
  console.log("responseTup", responseTuple);

  // let newTuple = [...X, data];
  // console.log(newTuple);
  // console.log(newTuple.map((tup) => tup + " "));

  return <div>Typle : {X.map((tup) => tup + " ")}</div>;
};

export default Tuple_DT;
