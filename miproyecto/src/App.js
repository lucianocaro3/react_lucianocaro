
import Itemlist from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
 const name = "Luciano"
 const apellido = "Caro"
  return (
    <> 
    <Navbar />

 <Itemlist id="1" nombre={name} apellido={apellido}/>
    </>
    
  );
}

export default App;
