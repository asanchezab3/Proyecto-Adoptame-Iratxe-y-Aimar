import Menu from "../componentes/Menu";
import Animal from "../componentes/Animal";

const Lista = () => {
    const animales = [
        { nombre: "Luna", descripcion: "Husky - 1 año y 5 meses", imagen: "app/imgs/animal1.png" },
        { nombre: "Gato", descripcion: "Gato común - 6 meses", imagen: "app/imgs/animal2.png" },
        { nombre: "Garfield", descripcion: "Gato común - 8 años", imagen: "app/imgs/animal3.png" },
        { nombre: "Beltza", descripcion: "Perro - 2 años y 7 meses", imagen: "app/imgs/animal4.png" },
        { nombre: "Mika", descripcion: "Perro - 5 años", imagen: "app/imgs/animal5.png" },
        { nombre: "Señor Loro", descripcion: "Un loro - 3 años", imagen: "app/imgs/animal6.png" }
    ]

    const opciones = [
        "Tipo de animal", "Refugio", "Ciudad", "Otro"
    ];

    return (
        <div className="min-h-screen bg-white text-black flex flex-col ">
            <Menu />
            <div className="flex flex-grow">
                {/* MENÚ LATERAL */}
                <div className="w-1/7 p-8 bg-[#E0DDDD]">
                    {opciones.map((opcion, index) => (
                        <div key={index} className="mt-10">
                            <label>{`${opcion}`}</label>
                            <select className="w-full mt-2 p-2 border rounded bg-[#FFFFFF]">
                                <option value="">Seleccionar</option>
                            </select>
                        </div>
                    ))}
                    <button className="bg-[#865E53] text-white mt-30 p-2 border rounded w-full">Aplicar filtros</button>
                </div>
                {/* LISTA DE ANIMALES */}
                <div className="w-6/7 grid grid-cols-3 gap-22 m-18">
                    {animales.map((animal, index) => (
                        <Animal key={index} imagen={animal.imagen} nombre={animal.nombre} descripcion={animal.descripcion} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Lista;