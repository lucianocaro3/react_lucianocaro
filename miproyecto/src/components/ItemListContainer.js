import { Itemcount } from "./Itemcount";

const Itemlist = ({nombre,apellido}) => {
  let  onAdd = () =>{
        console.log("Gracias por tu compra!")
    }
return(
    <> 
    <h1> holaa bienvenido {nombre} {apellido}</h1>
    <Itemcount stock={5} initial={1} onAdd={onAdd}/>
    </>
   
)
}

export default Itemlist