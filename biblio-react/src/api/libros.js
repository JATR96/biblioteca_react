import axios from "axios";


// =====================================================
// URL base del backend
// =====================================================
// Todas las peticiones relacionadas con libros
// usarán esta URL principal.

const urlBase = "http://localhost:8080/api/libros";


// =====================================================
// Cliente Axios reutilizable
// =====================================================
// Se crea una instancia para evitar repetir
// configuraciones en cada petición.

const apiLibros = axios.create({
    baseURL: urlBase,
});

// =====================================================
// Obtener listado de libros
// =====================================================

async function listarLibros() {

    try {

        // Petición GET al backend
        const respuesta = await apiLibros.get("/");

        // Retorna los datos del backend
        return respuesta.data;

    } catch (error) {

        console.error(
            "Error al listar libros:",
            error
        );

        throw error;
    }
}

// =====================================================
// Crear nuevo libro
// =====================================================

export async function crearLibro(libro) {

    try {

        // =============================================
        // Validaciones básicas
        // =============================================
        if (!libro.titulo?.trim()) {

            throw new Error(
                "El título es obligatorio"
            );
        }

        if (!libro.autor?.trim()) {

            throw new Error(
                "El autor es obligatorio"
            );
        }

        if (
            libro.rating < 1 ||
            libro.rating > 5
        ) {

            throw new Error(
                "El rating debe estar entre 1 y 5"
            );
        }

        // =============================================
        // Enviar POST al backend
        // =============================================
        const resultado = await axios.post(
            urlBase,
            libro
        );

        return resultado.data;

    } catch (error) {

        console.error(
            "Error al crear libro:",
            error
        );

        throw error;
    }
}

// =====================================================
// Exportaciones
// =====================================================
// Exportamos la URL y la instancia de Axios
// para reutilizarlas en otros componentes.

export {
    urlBase,
    apiLibros,
    listarLibros
};