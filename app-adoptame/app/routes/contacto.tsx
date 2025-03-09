import Menu from "../components/Menu";
import { useEffect, useState } from "react";

const Contacto = () => {


    const [mensajeEnviado, setMensajeEnviado] = useState(false);

    const manejarEnvio = (e: React.FormEvent) => {
        {/* Al enviarse el formulario se borra el texto de todos los campos*/}
        const nombre = document.getElementById("nombre") as HTMLInputElement;
        if (nombre) nombre.value = "";
        const correo = document.getElementById("correo") as HTMLInputElement;
        if (correo) correo.value = "";
        const asunto = document.getElementById("asunto") as HTMLInputElement;
        if (asunto) asunto.value = "";
        const mensaje = document.getElementById("mensaje") as HTMLInputElement;
        if (mensaje) mensaje.value = "";

        {/* Se muestra el mensaje de envio de formulario correcto durante tres segundos*/}
        e.preventDefault(); 
        setMensajeEnviado(true);

        setTimeout(() => {
            setMensajeEnviado(false);
        }, 3000); 
    };


    return (
        <div className="min-h-screen bg-white">

            <Menu />

            <div className="text-black grid grid-cols-1 lg:grid-cols-2">
            
                {/* Formulario */}
                <section className="mt-10 mb-10 ml-10 lg:ml-40 mr-10 lg:mr-20">
                    <h2 className="text-sm lg:text-lg mb-10 text-center">¡Rellena nuestro formulario de contacto!</h2>


                    {/* Mensaje de formulario enviado */}
                    {mensajeEnviado && (
                        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white px-6 rounded-lg text-lg font-semibold min-h-30 flex items-center">
                            Mensaje enviado correctamente
                        </div>
                    )}

                    <form className="bg-[#dbcfcb] min-h-100 lg:min-h-170 rounded-lg grid grid-rows-11 p-4 lg:p-10" onSubmit={manejarEnvio}>
                        <div className="row-span-2 pt-2">
                            <label htmlFor="nombre" className="font-bold">Nombre</label>
                            <input id="nombre" name="nombre" type="text" placeholder="Tu nombre"
                                className="bg-white w-full mt-2 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"/>
                        </div>
                        <div className="row-span-2 pt-2">
                            <label htmlFor="correo" className="font-bold">Correo electrónico</label>
                            <input id="correo" name="correo" type="text" placeholder="Tu correo electrónico"
                                className="bg-white w-full mt-2 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"/>
                        </div>
                        <div className="row-span-2 pt-2">
                            <label htmlFor="asunto" className="font-bold">Asunto</label>
                            <input id="asunto" name="asunto" type="text" placeholder="Asunto del mensaje"
                                className="bg-white w-full mt-2 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"/>
                        </div>
                        <div className="row-span-4 pt-2">
                            <label htmlFor="mensaje" className=" block font-bold">Mensaje</label>
                            <textarea id="mensaje" name="mensaje" placeholder="Escribe aquí tu mensaje" rows={6} 
                                className="bg-white w-full mt-2 rounded-lg p-3"></textarea>
                        </div>
                        <div className="pt-4">
                        <button type="submit" className="bg-[#865E53] text-white w-full h-full rounded-lg">Enviar mensaje</button>

                        </div>
                    </form>
                </section>

                {/* Tarjetas de contacto */}
                <div className="mt-10 mb-10 ml-10 lg:ml-20 mr-10 lg:mr-40">
                    <section>
                        <h2 className="text-sm lg:text-lg mb-10 text-center">¡O contacta con nosotros mediante via telefónica!</h2>
                        <div className="bg-[#dbcfcb] min-h-70 rounded grid grid-rows-3 grid-cols-4 items-center">

                            <div className="col-span-1 flex items-center justify-center">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#865E53] rounded-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white">phone_in_talk</span>
                                </div>
                            </div>
                            <p className="text-sm lg:text-lg col-span-3">948 55 04 12</p>

                            <div className="col-span-1 flex items-center justify-center">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#865E53] rounded-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white">location_on</span>
                                </div>
                            </div>
                            <p className="text-sm lg:text-lg col-span-3">C. San Pol, 8, 31200 Estella, Navarra</p>

                            <div className="col-span-1 flex items-center justify-center">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#865E53] rounded-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white">mail</span>
                                </div>
                            </div>
                            <div className="text-sm lg:text-lg col-span-3 hidden lg:block">
                                <p>politecnicoestella@educacion.navarra.es</p>
                            </div>
                            <div className="text-sm lg:text-lg col-span-3 lg:hidden ">
                                <div className="grid grid-rows-2">
                                    <p>politecnicoestella@educacion.</p>
                                    <p>navarra.es</p>
                                </div>
                            </div>
                            
                        </div>
                    </section>

                    <section>
                        <h2 className="text-sm lg:text-lg mt-10 mb-10 text-center">¡También puedes seguirnos en redes sociales!</h2>
                        <div className="bg-[#dbcfcb] min-h-70 rounded grid grid-rows-3 grid-cols-4 items-center">
                            
                            <div className="col-span-1 flex items-center justify-center">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#865E53] rounded-full flex items-center justify-center">
                                    <img src="/images/instagram.png" alt="Icono instagram" className="h-6 w-auto flex-shrink-0"/>
                                </div>
                            </div>
                            <p className="col-span-3">@vida_con_patitas</p>

                            <div className="col-span-1 flex items-center justify-center">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#865E53] rounded-full flex items-center justify-center">
                                    <img src="/images/facebook.png" alt="Icono facebook" className="h-9 w-auto flex-shrink-0"/>
                                </div>
                            </div>
                            <p className="col-span-3">vida_con_patitas</p>
                            
                            <div className="col-span-1 flex items-center justify-center">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#865E53] rounded-full flex items-center justify-center">
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