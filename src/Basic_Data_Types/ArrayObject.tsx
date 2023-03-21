import React, { useState, useEffect } from "react";

const ArrayObject = () => {
  const [number, setNumber] = useState<number>(5);

  const changeNymber = () => {
    setNumber(12);
  };

  // const [people, setPeople] = useState([
  //   {
  //     name: "Manasseh Ankrah",
  //     url: "https://mandev-pic.png",
  //     age: 23,
  //     note: "Learning Typescript is fun",
  //   },
  //   {
  //     name: "David Ankrah",
  //     url: "https://skinny-pic.png",
  //     age: 30,
  //   },
  // ]);

  interface PeopleState {
    data: {
      name: String;
      url: String;
      age: Number;
      note?: String;
      pic: String;
    }[];
  }

  const [peopleArray, setPeopleArray] = useState<PeopleState["data"]>([]);

  const responseObj = [
    {
      name: "Manasseh Ankrah",
      url: "https://mandev-pic.png",
      age: 23,
      note: "Learning Typescript is fun",
      pic: "Picture",
    },
  ];
  useEffect(() => {
    setPeopleArray(responseObj);
  }, []);

  // console.log("Pic : ", peopleArray[0]?.pic);

  return (
    <div className='App'>
      <h2>Array Object Tutorial</h2>
      <h5>The Name is :{peopleArray[0]?.name}</h5>
      <h5>The Note is :{peopleArray[0]?.note}</h5>
      <h5>The Picture is :{peopleArray[0]?.pic}</h5>
      <h5>The Number is :{peopleArray[0]?.url}</h5>
      <h5>The Number is :{peopleArray[0]?.url}</h5>
      <h5>The Number is :{peopleArray[0]?.url}</h5>
    </div>
  );
};

export default ArrayObject;
