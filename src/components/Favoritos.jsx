import { UserContext } from "../context/userContext";
import { useContext } from "react";

export default function Favoritos() {

  const {texto, setTexto} = useContext(UserContext)
  
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <p>{texto}</p>
      <button onClick={() => setTexto("Texto modificado")}>Modificar Texto</button>
      <div className="p-3 galeria grid-columns-4">
       
      </div>
    </div>
  );
}
