import Menu from "../componentes/Menu";
import Animal from "../componentes/Animal";
import { useEffect, useState } from "react";

const Lista = () => {
const [animales, setAnimales] = useState<Animal[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/infoAnimales.json"); // Carga el JSON
        if (!response.ok) throw new Error("Error al cargar los datos");
        const data: Animal[] = await response.json();
        setAnimales(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  });

  const calcularEdad = (fechaNacimiento: string): string => {
    const fechaNac = new Date(fechaNacimiento);
    const fechaHoy = new Date();
  
    let años = fechaHoy.getFullYear() - fechaNac.getFullYear();
    let meses = fechaHoy.getMonth() - fechaNac.getMonth();
  
    // Ajustar si el mes de nacimiento es mayor al mes actual
    if (meses < 0) {
      años -= 1;
      meses += 12;
    }
  
    return `${años} año${años !== 1 ? "s" : ""} y ${meses} mes${meses !== 1 ? "es" : ""}`;
  };

  const opciones = [
    "Tipo de animal", "Refugio", "Ciudad", "Otro"
];

  if (loading) {
    return (
      <div className="h-screen flex flex-col">
        <Menu />
        <div className="bg-white text-black p-4 flex-grow flex flex-col">
          <p>Cargando...</p>
        </div>
      </div>
    );
  }
  if (!animales)
    return (
      <div className="h-screen flex flex-col">
        <Menu />
        <div className="bg-white text-black p-4 flex-grow flex flex-col">
          <p>No se han encontrado animales. </p>
        </div>
      </div>
    );



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
                        <Animal key={index} id={animal.id} imagen={`/app/imgs/${animal.id}.png`} nombre={animal.nombre} descripcion={`${animal.raza} - ${calcularEdad(animal.fechaNacimiento)}`} />
                    ))}
                </div>
            </div>
        </div>
    );

};

export default Lista;