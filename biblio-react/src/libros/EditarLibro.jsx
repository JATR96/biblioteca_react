import { useEffect, useState } from "react";

import {
    useNavigate,
    useParams
} from "react-router-dom";

import {
    obtenerLibroPorId,
    actualizarLibro
} from "../api/libros";


function EditarLibro() {

    // =====================================================
    // Navegación programática
    // =====================================================

    const navigate = useNavigate();


    // =====================================================
    // Obtener id desde la URL
    // =====================================================

    const { id } = useParams();


    // =====================================================
    // Estado del formulario
    // =====================================================

    const [libro, setLibro] = useState({
        titulo: "",
        autor: "",
        rating: 1
    });


    // =====================================================
    // Cargar libro desde backend
    // =====================================================

    async function cargarLibro() {

        try {

            const datos = await obtenerLibroPorId(id);

            setLibro(datos);

        } catch (error) {

            console.error(
                "Error al cargar libro:",
                error
            );

            alert(
                "No se pudo cargar el libro"
            );

            navigate("/");
        }
    }


    // =====================================================
    // Ejecutar carga inicial
    // =====================================================

    useEffect(() => {

        cargarLibro();

    }, []);


    // =====================================================
    // Actualizar valores del formulario
    // =====================================================

    function cambiarValor(evento) {

        const { name, value } = evento.target;

        setLibro({
            ...libro,
            [name]: name === "rating"
                ? parseInt(value)
                : value
        });
    }

    // =====================================================
    // Guardar cambios del libro
    // =====================================================

    async function guardarCambios(evento) {

        evento.preventDefault();

        try {

            // =============================================
            // Consumir API PUT
            // =============================================
            await actualizarLibro(id, libro);

            // =============================================
            // Mostrar mensaje
            // =============================================
            alert(
                "Libro actualizado correctamente"
            );

            // =============================================
            // Regresar al listado
            // =============================================
            navigate("/");

        } catch (error) {

            console.error(
                "Error al actualizar libro:",
                error
            );

            alert(
                "No se pudo actualizar el libro"
            );
        }
    }

    // =====================================================
    // Cancelar edición
    // =====================================================

    function cancelar() {

        navigate("/");
    }


    return (

        <div className="mt-5">

            {/* Título */}
            <h2 className="text-info">

                <i className="bi bi-pencil-square me-2"></i>

                Editar Libro
            </h2>

            {/* Formulario */}
            <form
                className="mt-4"
                onSubmit={guardarCambios}
            >

                {/* Título */}
                <div className="mb-3">

                    <label className="form-label">
                        Título
                    </label>

                    <input
                        type="text"
                        name="titulo"
                        className="form-control"
                        placeholder="Ingrese el título"
                        value={libro.titulo}
                        onChange={cambiarValor}
                    />

                </div>

                {/* Autor */}
                <div className="mb-3">

                    <label className="form-label">
                        Autor
                    </label>

                    <input
                        type="text"
                        name="autor"
                        className="form-control"
                        placeholder="Ingrese el autor"
                        value={libro.autor}
                        onChange={cambiarValor}
                    />

                </div>

                {/* Rating */}
                <div className="mb-3">

                    <label className="form-label">
                        Rating
                    </label>

                    <input
                        type="number"
                        name="rating"
                        className="form-control"
                        min="1"
                        max="5"
                        placeholder="Ingrese rating de 1 a 5"
                        value={libro.rating}
                        onChange={cambiarValor}
                    />

                </div>

                {/* Botones */}
                <div className="d-flex gap-2">

                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        <i className="bi bi-floppy me-2"></i>

                        Guardar Cambios
                    </button>

                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={cancelar}
                    >
                        <i className="bi bi-x-circle me-2"></i>

                        Cancelar
                    </button>

                </div>

            </form>

        </div>
    );
}

export default EditarLibro;