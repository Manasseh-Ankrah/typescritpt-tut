import React from "react";

const Enum_DT = () => {
  enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT,
  }

  enum statusCodes {
    OK = 200,
    notFound = 404,
    serverError = 500,
  }

  console.log("====================================");
  console.log(statusCodes.OK);
  console.log("====================================");
  console.log(statusCodes[200]);

  function move(dir: number) {
    console.log(dir);
  }
  move(Direction.DOWN);

  //   let dir = Direction.DOWN;
  //   console.log(dir);
  // console.log(Direction[1]);

  return <div>Enum_DT</div>;
};

export default Enum_DT;
