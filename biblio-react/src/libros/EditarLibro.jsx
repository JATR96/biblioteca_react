function EditarLibro() {

    return (

        <div className="mt-5">

            {/* Título */}
            <h2 className="text-info">

                <i className="bi bi-pencil-square me-2"></i>

                Editar Libro
            </h2>

            {/* Formulario */}
            <form className="mt-4">

                {/* Título */}
                <div className="mb-3">

                    <label className="form-label">
                        Título
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ingrese el título"
                    />

                </div>

                {/* Autor */}
                <div className="mb-3">

                    <label className="form-label">
                        Autor
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ingrese el autor"
                    />

                </div>

                {/* Rating */}
                <div className="mb-3">

                    <label className="form-label">
                        Rating
                    </label>

                    <input
                        type="number"
                        className="form-control"
                        placeholder="Ingrese rating de 1 a 5"
                    />

                </div>

                {/* Botones */}
                <div className="d-flex gap-2">

                    <button
                        type="button"
                        className="btn btn-primary"
                    >
                        <i className="bi bi-floppy me-2"></i>

                        Guardar Cambios
                    </button>

                    <button
                        type="button"
                        className="btn btn-secondary"
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