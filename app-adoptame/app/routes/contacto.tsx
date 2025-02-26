import Menu from "../componentes/Menu";

const Contacto = () => {
    return (
        <div className="min-h-screen bg-white">
            <Menu />
            <div className="text-black grid md:grid-cols-2">
                <div>
                    <p>Formulario</p>
                </div>
                <div>
                    <p>Contacto</p>
                </div>
            </div>
        </div>
    );
};

export default Contacto;