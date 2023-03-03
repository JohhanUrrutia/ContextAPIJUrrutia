import { useContext, useEffect, useState } from "react"
import Heart from "../components/Heart"
import { UserContext } from "../context/userContext";

export default function Home() {

  const {fotos, setFotos} = useContext(UserContext)
  const {texto, setTexto} = useContext(UserContext)
  console.log(fotos)

  return (
    // Array recorrido con Map y utilizando useContext desde el componente UserContext
    <>
    <h2>{texto}</h2>
    <div className="galeria grid-columns-4">
      {fotos.map((elemento) => {
        return <div className="fotos">
          <h4 className="">{elemento.alt}</h4>
          <img src={elemento.src.tiny} alt="" />
        </div>
      })}
    </div>
    </>
  );
}
