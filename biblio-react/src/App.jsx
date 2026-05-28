import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navegacion from "./componentes/Navegacion";

import ListadoLibros from "./libros/ListadoLibros";

import AgregarLibro from "./libros/AgregarLibro";

function App() {

  return (

    <BrowserRouter>

      <div className="container mt-4">

        {/* Título principal */}
        <h1 className="text-warning text-center">

          <i className="bi bi-book-half me-2"></i>

          Sistema de Biblioteca Personal
        </h1>

        {/* Barra de navegación */}
        <Navegacion />

        {/* Configuración de rutas */}
        <Routes>

          {/* Ruta principal */}
          <Route
            path="/"
            element={<ListadoLibros />}
          />

          {/* Ruta agregar */}
          <Route
            path="/agregar"
            element={<AgregarLibro />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  )
}

export default App