import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { listarLibros, eliminarLibro } from "../api/libros";


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
    // Eliminar libro
    // =====================================================

    async function eliminar(id) {

        // =============================================
        // Confirmación básica
        // =============================================
        const confirmar = confirm(
            "¿Desea eliminar este libro?"
        );

        // =============================================
        // Cancelar eliminación
        // =============================================
        if (!confirmar) {

            return;
        }

        try {

            // =============================================
            // Consumir API DELETE
            // =============================================
            await eliminarLibro(id);

            // =============================================
            // Refrescar listado
            // =============================================
            await cargarLibros();

            // =============================================
            // Mostrar mensaje
            // =============================================
            alert(
                "Libro eliminado correctamente"
            );

        } catch (error) {

            console.error(
                "Error al eliminar libro:",
                error
            );

            alert(
                "No se pudo eliminar el libro"
            );
        }
    }

    // =====================================================
    // Ejecutar carga inicial
    // =====================================================

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

                                    {/* Botón eliminar */}

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => eliminar(libro.id)}
                                    >
                                        <i className="bi bi-trash me-2"></i>

                                        Eliminar
                                    </button>

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