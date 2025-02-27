import Menu from "../componentes/Menu";

const Contacto = () => {
    return (
        <div className="min-h-screen bg-white">

            <Menu />

            <div className="text-black grid grid-cols-1 lg:grid-cols-2">
            
                {/* Formulario */}
                <section className="mt-10 mb-10 ml-20 md:ml-30 lg:ml-15 2xl:ml-40 mr-20 md:mr-30 lg:mr-15 2xl:mr-30">
                    <h2 className="text-lg mb-10 text-center">¡Rellena nuestro formulario de contacto!</h2>
                    <form className="bg-[#dbcfcb] min-h-170 rounded"></form>
                </section>

                {/* Tarjetas de contacto */}
                <div className="mt-10 mb-10 ml-20 md:ml-30 lg:ml-15 xl:ml-40 mr-20 md:mr-30 lg:mr-15 xl:mr-40">
                    <section>
                        <h2 className="text-lg mb-10 text-center">¡O contacta con nosotros mediante via telefónica!</h2>
                        <div className="bg-[#dbcfcb] min-h-70 rounded grid grid-rows-3 grid-cols-4 items-center">

                            <div className="col-span-1 flex items-center justify-center">
                                <div className="w-12 h-12 bg-[#865E53] rounded-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white">phone_in_talk</span>
                                </div>
                            </div>
                            <p className="col-span-3">948 55 04 12</p>

                            <div className="col-span-1 flex items-center justify-center">
                                <div className="w-12 h-12 bg-[#865E53] rounded-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white">location_on</span>
                                </div>
                            </div>
                            <p className="col-span-3">C. San Pol, 8, 31200 Estella, Navarra</p>

                            <div className="col-span-1 flex items-center justify-center">
                                <div className="w-12 h-12 bg-[#865E53] rounded-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white">mail</span>
                                </div>
                            </div>
                            <p className="col-span-3">politecnicoestella@educacion.navarra.es</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-lg mt-10 mb-10 text-center">¡También puedes seguirnos en redes sociales!</h2>
                        <div className="bg-[#dbcfcb] min-h-70 rounded grid grid-rows-3 grid-cols-4 items-center">
                            
                            <div className="col-span-1 flex items-center justify-center">
                                <div className="w-12 h-12 bg-[#865E53] rounded-full flex items-center justify-center">
                                    <img src="/images/instagram.png" alt="Icono instagram" className="h-6 w-auto flex-shrink-0"/>
                                </div>
                            </div>
                            <p className="col-span-3">@vida_con_patitas</p>

                            <div className="col-span-1 flex items-center justify-center">
                                <div className="w-12 h-12 bg-[#865E53] rounded-full flex items-center justify-center">
                                    <img src="/images/facebook.png" alt="Icono facebook" className="h-9 w-auto flex-shrink-0"/>
                                </div>
                            </div>
                            <p className="col-span-3">vida_con_patitas</p>
                            
                            <div className="col-span-1 flex items-center justify-center">
                                <div className="w-12 h-12 bg-[#865E53] rounded-full flex items-center justify-center">
                                    <img src="/images/twitter.png" alt="Icono twitter" className="h-6 w-auto flex-shrink-0"/>
                                </div>
                            </div>
                            <p className="col-span-3">vida_con_patitas</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Contacto;