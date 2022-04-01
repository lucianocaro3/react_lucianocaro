import React from "react";

export default function Item({ element }) {
  return (
    <>
      <div className="card">
        <h1> {element.nombre}</h1>
        <h2> {element.precio} </h2>
        <h3>{element.talle} </h3>
      </div>
    </>
  );
}
