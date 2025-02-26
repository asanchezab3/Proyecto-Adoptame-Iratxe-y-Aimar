import Menu from "../componentes/Menu";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detalle = () => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const [animal, setAnimal] = useState<Animal | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/infoAnimales.json"); // Carga el JSON
        if (!response.ok) throw new Error("Error al cargar los datos");
        const data: Animal[] = await response.json();

        // Buscar el animal por ID
        const foundAnimal = data.find((animal) => animal.id === id);
        setAnimal(foundAnimal || null);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

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
  if (!animal)
    return (
      <div className="h-screen flex flex-col">
        <Menu />
        <div className="bg-white text-black p-4 flex-grow flex flex-col">
          <p>No se encontró el animal con ID {id}.</p>
        </div>
      </div>
    );

  return (
    <div className="h-screen flex flex-col">
      <Menu />
      <div className="bg-white text-black p-4 flex-grow flex flex-col">
        <div className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 cursor-pointer">
          <a
            href="/lista"
            className="flex items-center h-full space-x-2 text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            {/* Imagen con altura ajustada al texto */}
            <img
              src="/app/imgs/detalle/back.png"
              alt="Flecha atrás"
              className="h-full w-auto max-h-6 flex-shrink-0"
            />

            {/* Texto alineado con la imagen */}
            <span className="text-[#72544B] h-full flex items-center">
              Volver a la lista
            </span>
          </a>
        </div>
        {/* Contenedor Principal */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white shadow-lg p-6 rounded-lg">
          {/* Imagen del animal */}
          <img
            src={`/app/imgs/${animal.id}.png`}
            alt={animal.nombre}
            className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-lg shadow-md"
          />

          {/* Detalles */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold">{animal.nombre}</h2>

            {/* Datos generales */}
            <div className="mt-3 space-y-2 text-gray-700">
              <p className="flex items-center gap-2">
                <div className="flex items-center space-x-2">
                  <img
                    src="/app/imgs/detalle/raza.png"
                    alt="raza"
                    className="h-full w-auto max-h-6 flex-shrink-0"
                  />

                  <span className="h-full flex items-center">
                    {animal.raza}
                  </span>
                </div>
              </p>
              <p className="flex items-center gap-2">
                <div className="flex items-center space-x-2">
                  <img
                    src="/app/imgs/detalle/calendar.png"
                    alt="Calendario"
                    className="h-full w-auto max-h-6 flex-shrink-0"
                  />

                  <span className="h-full flex items-center">
                    {calcularEdad(animal.fechaNacimiento)}
                  </span>
                </div>
              </p>
              <p className="flex items-center gap-2">
                <div className="flex items-center space-x-2">
                  <img
                    src="/app/imgs/detalle/location.png"
                    alt="Ubicacion"
                    className="h-full w-auto max-h-6 flex-shrink-0"
                  />
                  <span className="h-full flex items-center">
                    {animal.refugio}
                  </span>
                </div>
              </p>
            </div>

            {/* Descripción */}
            <p className="mt-4 text-gray-600">
              <span>{animal.descripcion}</span>
            </p>

            {/* Gustos y No gustos */}
            <div className="mt-4 flex flex-col md:flex-row gap-6">
              <div>
                <h3 className="font-semibold">Le gusta:</h3>
                <ul className="list-none text-gray-600">
                  {Object.values(animal.like).map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <img
                        src="/app/imgs/detalle/liked.png"
                        alt="Icono"
                        className="h-6 w-auto flex-shrink-0"
                      />
                      <span className="flex items-center">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">No le gusta:</h3>
                <ul className="list-none text-gray-600">
                  {Object.values(animal.notLike).map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <img
                        src="/app/imgs/detalle/noLiked.png"
                        alt="Icono"
                        className="h-6 w-auto flex-shrink-0"
                      />
                      <span className="flex items-center">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Botón de adopción */}
            <button className="mt-6 bg-[#8D6E63] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#6D4C41] transition w-full md:w-auto">
              ¡Ponte en contacto con nosotros para adoptar a {animal.nombre}!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalle;
