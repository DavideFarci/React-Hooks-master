import React, { useState } from "react";

const StateObject = () => {
  // const [name, setName] = useState("Dario");
  // const [age, setAge] = useState(24);
  // const [saluto, setSaluto] = useState("Ciao da Dario!");
  const [person, setPerson] = useState({
    name: "dario",
    age: 24,
    saluto: "ciao",
  });

  const cambiaSaluto = () => {
    setPerson({
      ...person,
      age: 25,
      saluto: "Ciao oggi è il mio compleanno!",
    });
    // setAge(25);
    // setSaluto("Ciao oggi è il mio compleanno!");
  };

  return (
    <div className="item shadow">
      <div className="text-left">
        <h5>{person.name}</h5>
        <h5>{person.age}</h5>
        <h6>{person.saluto}</h6>
        <button className="button" onClick={cambiaSaluto}>
          Cambia il saluto
        </button>
      </div>
    </div>
  );
};

export default StateObject;
