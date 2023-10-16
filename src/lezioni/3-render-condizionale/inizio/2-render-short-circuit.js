import React, { useState } from "react";

const ShortRender = () => {
  const [parola, setParola] = useState("Valore");

  // Shor circuit evaluaation con or operator
  const esempio = parola || "sono un esempio";

  // Short circuit evaluation with and (&&) operator
  const esempio2 = parola && "ho un valore";

  return (
    <div>
      <h2>{esempio}</h2>
      {parola && <h4>Ciao sono un componente</h4>}
    </div>
  );
};

export default ShortRender;
