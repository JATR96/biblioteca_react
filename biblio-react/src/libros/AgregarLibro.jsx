import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { crearLibro } from "../api/libros";


function AgregarLibro() {

    // =====================================================
    // Navegación programática
    // =====================================================
    // [NUEVO]
    const navigate = useNavigate();


    // =====================================================
    // Estado del formulario
    // =====================================================
    // [NUEVO]
    const [libro, setLibro] = useState({
        titulo: "",
        autor: "",
        rating: 1
    });


    // =====================================================
    // Actualizar campos del formulario
    // =====================================================
    // [NUEVO]
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
    // Guardar libro
    // =====================================================
    // [NUEVO]
    async function guardarLibro(evento) {

        evento.preventDefault();

        try {

            await crearLibro(libro);

            alert(
                "Libro agregado correctamente"
            );

            navigate("/");

        } catch (error) {

            alert(
                error.message ||
                "Error al guardar libro"
            );
        }
    }


    // =====================================================
    // Cancelar y volver al listado
    // =====================================================
    // [NUEVO]
    function cancelar() {

        navigate("/");
    }


    return (

        <div className="mt-5">

            {/* Título */}
            <h2 className="text-success">

                <i className="bi bi-plus-circle me-2"></i>

                Agregar Libro
            </h2>

            {/* Formulario */}
            <form
                className="mt-4"
                onSubmit={guardarLibro}
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
                        className="btn btn-success"
                    >
                        <i className="bi bi-floppy me-2"></i>

                        Guardar
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

export default AgregarLibro;