import React, { useState, useEffect } from "react";

import "./App.css";
import ArrayObject from "./Basic_Data_Types/ArrayObject";
import Objects from "./Basic_Data_Types/Objects";
import Boolean_DT from "./Basic_Data_Types/Boolean_DT";
import Number_DT from "./Basic_Data_Types/Number_DT";
import String_DT from "./Basic_Data_Types/String_DT";
import Array_DT from "./Basic_Data_Types/Array_DT";
import Tuple_DT from "./Basic_Data_Types/Tuple_DT";
import Movie from "./Movie";
import Enum_DT from "./Basic_Data_Types/Enum_DT";
import Unknown_DT from "./Basic_Data_Types/Unknown_DT";
import AddNumbers from "./Function_Declaration/AddNumbers";

function App() {
  return (
    <div className='App'>
      <h2>Welcome to Typescript Tutorial</h2>
      <br />
      {/* <ArrayObject /> */}
      {/* <Objects /> */}
      {/* <Boolean_DT /> */}
      {/* <Number_DT /> */}
      {/* <String_DT /> */}
      {/* <Array_DT /> */}
      {/* <Tuple_DT /> */}
      <Movie />
      {/* <Enum_DT /> */}
      {/* <Unknown_DT /> */}
      {/* <AddNumbers /> */}
    </div>
  );
}

export default App;
