import React, { useState, useEffect } from "react";

const Objects = () => {
  interface PeopleState {
    data: {
      name: String;
      url: String;
      age: Number;
      note?: String;
      pic: String;
    };
  }

  const [peopleArray, setPeopleArray] = useState<PeopleState["data"]>(Object);

  const responseObj = {
    name: "Manasseh Ankrah",
    url: "https://mandev-pic.png",
    age: 23,
    note: "Learning Typescript is fun",
    pic: "Picture",
  };
  useEffect(() => {
    setPeopleArray(responseObj);
  }, []);

  console.log("Pic : ", peopleArray?.pic);

  return (
    <div className='App'>
      <h2>Object Tutorial</h2>

      <h5>The Name is :{responseObj.name}</h5>
      <h5>The Age is :{responseObj.age}</h5>
      <h5>The Note is :{responseObj.note}</h5>
      <h5>The Picture is :{responseObj.pic}</h5>
      <h5>The URL is :{responseObj.url}</h5>
    </div>
  );
};

export default Objects;
