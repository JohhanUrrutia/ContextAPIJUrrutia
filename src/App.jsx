import { Routes, Route } from "react-router-dom";

// Componentes de página
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Favoritos from "./components/Favoritos";

export default function App() {
  const endpoint = "/fotos.json";
  console.log(endpoint)

  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
    </div>
  );
}
