import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { listarLibros } from "../api/libros";


function ListadoLibros() {

    // =====================================================
    // Estado del listado de libros
    // =====================================================

    const [libros, setLibros] = useState([]);


    // =====================================================
    // Obtener libros del backend
    // =====================================================

    async function cargarLibros() {

        try {

            const datos = await listarLibros();

            setLibros(datos);

        } catch (error) {

            console.error(
                "Error al cargar libros:",
                error
            );
        }
    }


    // =====================================================
    // Ejecutar carga inicial
    // =====================================================
    // [NUEVO]
    useEffect(() => {

        cargarLibros();

    }, []);


    return (
        <div className="mt-5">

            {/* Título del listado */}
            <h2 className="text-info">

                {/* Icono Bootstrap */}
                <i className="bi bi-book-half me-2"></i>

                Listado de Libros
            </h2>

            {/* Tabla Bootstrap */}
            <div className="table-responsive mt-4">

                <table className="table table-dark table-hover align-middle">

                    {/* Cabecera */}
                    <thead className="table-primary">

                        <tr>
                            <th>ID</th>
                            <th>Título</th>
                            <th>Autor</th>
                            <th>Rating</th>
                            <th>Acciones</th>
                        </tr>

                    </thead>

                    {/* Datos */}
                    <tbody>

                        {libros.map((libro) => (
                            <tr key={libro.id}>

                                <td>{libro.id}</td>

                                <td>{libro.titulo}</td>

                                <td>{libro.autor}</td>

                                <td>{libro.rating}</td>

                                {/* Botón editar */}

                                <td>

                                    <Link
                                        to={`/editar/${libro.id}`}
                                        className="btn btn-primary btn-sm"
                                    >
                                        <i className="bi bi-pencil-square me-2"></i>

                                        Editar
                                    </Link>

                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default ListadoLibros;