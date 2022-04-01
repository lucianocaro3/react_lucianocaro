import ItemlistContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";


const App = () => {
  const name = "Luciano";
  const apellido = "Caro";
  return (
    <>
      <Navbar />
      <ItemlistContainer id="1" nombre={name} apellido={apellido} />
      
    </>
  );
};

export default App;


