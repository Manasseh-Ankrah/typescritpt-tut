import React from "react";

const String_DT = () => {
  const firstName: string = "Manasseh";
  let lastName: string = "Ankrah";
  let sayHello: string = "hello " + firstName;
  let sayCheese: string = `welcome ${firstName}`;
  return (
    <div>
      First Name : {firstName}
      <br />
      Last Name : {lastName}
      <br />
      Greetings : Good Afernoon {firstName} {lastName} I hope you're fine.
      <br />
      Hello : {sayHello}
    </div>
  );
};

export default String_DT;
