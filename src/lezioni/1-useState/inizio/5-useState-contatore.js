import React, { useState } from "react";

const CounterComponent = () => {
  const [contatore, setContatore] = useState(0);

  const reset = () => {
    setContatore(0);
  };

  const aumenta = () => {
    // setContatore prende un parametro che rappresenta lo stato del contatore prima che questo venga modificato, ed è un metodo funzionale che deve ritornare qualcosa
    setContatore((oldValue) => {
      if (oldValue + 1 === 5) {
        return oldValue;
      }
      return oldValue + 1;
    });
  };

  return (
    <div className="bg-white shadow rounded py-5 w-75 col-6 offset-3 p-3">
      <h3> {contatore} </h3>
      <div className="d-flex justify-content-between">
        <button
          className="button my-2"
          onClick={() => setContatore(contatore - 1)}
        >
          Diminuisci
        </button>
        <button className="button my-2" onClick={aumenta}>
          Aumenta
        </button>
        <button className="button reset-button my-2" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterComponent;
