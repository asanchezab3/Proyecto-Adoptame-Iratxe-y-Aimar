import Menu from "../componentes/Menu";

const Contacto = () => {
    return (
        <div className="min-h-screen bg-white">
            <Menu />
            <div className="text-black grid grid-cols-1 md:grid-cols-2">
            
                {/* Formulario */}
                <section className="mt-10 mb-10 ml-50 mr-50">
                    <h2 className="text-lg mb-10 text-center">¡Rellena nuestro formulario de contacto!</h2>
                    <form className="bg-[#dbcfcb] min-h-170 rounded"></form>
                </section>

                {/* Tarjetas de contacto */}
                <div className="mt-10 mb-10 ml-50 mr-50">
                    <section>
                        <h2 className="text-lg mb-10 text-center">¡O contacta con nosotros mediante via telefónica!</h2>
                        <div className="bg-[#dbcfcb] min-h-70 rounded grid grid-rows-3 grid-cols-4 items-center">
                            <p className="col-span-1 text-center">icono1</p>
                            <p className="col-span-3">948 55 04 12</p>
                            <p className="col-span-1 text-center">icono2</p>
                            <p className="col-span-3">C. San Pol, 8, 31200 Estella, Navarra</p>
                            <p className="col-span-1 text-center">icono3</p>
                            <p className="col-span-3">politecnicoestella@educacion.navarra.es</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-lg mt-10 mb-10 text-center">¡También puedes seguirnos en redes sociales!</h2>
                        <div className="bg-[#dbcfcb] min-h-70 rounded grid grid-rows-3 grid-cols-4 items-center">
                            <p className="col-span-1 text-center">icono1</p>
                            <p className="col-span-3">@vida_con_patitas</p>
                            <p className="col-span-1 text-center">icono2</p>
                            <p className="col-span-3">vida_con_patitas</p>
                            <p className="col-span-1 text-center">icono3</p>
                            <p className="col-span-3">vida_con_patitas</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Contacto;