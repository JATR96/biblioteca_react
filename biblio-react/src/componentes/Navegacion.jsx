import { Link } from "react-router-dom";


function Navegacion() {

    return (

        <nav className="navbar navbar-expand-lg bg-primary rounded mt-4">

            <div className="container-fluid">

                {/* Marca */}
                <span className="navbar-brand text-white">

                    <i className="bi bi-book-half me-2"></i>

                    Biblioteca Personal
                </span>

                {/* Botón inicio */}
                <div>

                    <Link
                        to="/"
                        className="btn btn-dark"
                    >
                        <i className="bi bi-house-fill me-2"></i>

                        Inicio
                    </Link>

                    {/* Botón Agregar */}
                    <Link
                        to="/agregar"
                        className="btn btn-success"
                    >
                        <i className="bi bi-plus-circle me-2"></i>

                        Agregar
                    </Link>

                </div>

            </div>

        </nav>
    );
}

export default Navegacion;