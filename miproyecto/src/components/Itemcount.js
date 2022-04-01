import "./Navbar.css";
import React, { useEffect, useState } from "react";

export const Itemcount = ({ stock, initial, onAdd }) => {
    
  const [contador, setContador] = useState(initial);
  const [contador2, setContador2] = useState(0);

  useEffect(() => {
    console.log("entraste al useeffect");
    setTimeout(() => {
      setContador2(contador2 + 1);
    }, 2000);
  }, [contador]);

  const Incremento = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const Decremento = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const reset = () => {
    setContador(initial);
  };

  return (
    <>
      <h5> Stock disponible {stock}</h5>
      <h1>{contador}</h1>
      <button onClick={Incremento}> agregar</button>
      <button onClick={reset}> reset</button>
      <button onClick={Decremento}> quitar</button>
      <br />
      <button id="comprar" onClick={onAdd}>
        {" "}
        comprar
      </button>
      <h2> {contador2}</h2>
    </>
  );
}; 
