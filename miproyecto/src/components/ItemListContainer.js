import { useEffect, useState } from "react";
import ItemList from "./ItemList"

const zapatillas = [
  { nombre: "Jordan 1", talle: "40", precio: "$40k" },
  { nombre: "Jordan 1", talle: "40", precio: "$40k" },
  { nombre: "Jordan 1", talle: "40", precio: "$40k" },
  { nombre: "Jordan 1", talle: "40", precio: "$40k" },
];



const ItemlistContainer = ({ nombre, apellido }) => {
    const [productos, setProductos] = useState([]);
    
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(zapatillas);
            }, 2000);
          
        });
     
    
    useEffect(() => {
      
      promesa.then( () =>{
          setProductos(productos)
          console.log("Esta funcionando")
      } )
    
    
    
    
    }, []);

  return (
    <>
     <ItemList arrayZapatillas = {productos} />
    </>
  );
};

export default ItemlistContainer;
