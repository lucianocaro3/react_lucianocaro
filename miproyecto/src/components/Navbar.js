import "./Navbar.css"
import logo from "../img/sneaker.png"
import Cartwidget from "./Cartwidget";

 const Navbar = () => {
  
   return (
    <div>
      <nav>
      <img src = {logo} alt="logo" /> 
        <a href="#"> Hombre </a>
        <a href="#"> Mujer </a>
        <a href="#"> Niños </a>
        <a href="#"> Marcas </a>
        <a href="#"> Contacto </a>
        <Cartwidget/>
      </nav>
    </div>
  );
}

export default Navbar;
