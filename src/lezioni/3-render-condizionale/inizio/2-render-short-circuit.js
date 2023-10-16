import React, { useState } from "react";
import { useResolvedPath } from "react-router-dom";

const ShortRender = () => {
  const [parola, setParola] = useState("Valore");
  const [toggle, setToggle] = useState("false");

  // Shor circuit evaluaation con or operator
  const esempio = parola || "sono un esempio";

  // Short circuit evaluation with and (&&) operator
  const esempio2 = parola && "ho un valore";

  // Ternary operator
  const esempio3 = parola === "Valore" ? "sono vero" : "sono falso";

  return (
    <div>
      <h2>{parola || "sono un esempio se nonn è inserito un valore"}</h2>
      {toggle ? (
        <h2 className="text-success">Vero</h2>
      ) : (
        <h5 className="text-danger">Falso</h5>
      )}
      <button className="button" onClick={() => setToggle(!toggle)}>
        Cambia
      </button>
    </div>
  );
};

export default ShortRender;
