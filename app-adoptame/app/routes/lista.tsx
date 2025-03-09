import Menu from "../components/Menu";
import Animal from "../components/Animal";
import { useEffect, useState } from "react";
import Loader from "~/components/Loader";

const Lista = () => {
  const [animales, setAnimales] = useState<Animal[] | null>(null);
  const [loading, setLoading] = useState(true);

  const [filtrosAplicados, setFiltrosAplicados] = useState({
    tipoAnimal: "",
    comunidad: "",
    refugio: "",
    tamano: ""
  });

  const [tipoAnimal, setTipoAnimal] = useState("");
  const [comunidad, setComunidad] = useState("");
  const [refugio, setRefugio] = useState("");
  const [tamano, setTamano] = useState("");
  
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
  },[]);

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

    return `${años} año${años !== 1 ? "s" : ""} y ${meses} mes${
      meses !== 1 ? "es" : ""
    }`;
  };

  const comunidades = ["Andalucía", "Aragón", "Islas Baleares", "Canarias", "Cantabria", "Castilla-La Mancha", "Castilla y León", "Cataluña", "Comunidad de Madrid","Comunidad Foral de Navarra", "Comunidad Valenciana", "Extremadura", "Galicia", "País Vasco", "Principado de Asturias", "Región de Murcia", "La Rioja"]

  if (loading) {
    return <Loader />;
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


  const aplicarFiltros = () => {
    setFiltrosAplicados({
      tipoAnimal,
      comunidad,
      refugio,
      tamano
    });
  };

  const animalesFiltrados = animales.filter((animal) => {
    return (
      (filtrosAplicados.refugio === "" || animal.refugio === filtrosAplicados.refugio) &&
      (filtrosAplicados.comunidad === "" || animal.comunidad === filtrosAplicados.comunidad) &&
      (filtrosAplicados.tipoAnimal === "" || animal.tipo === filtrosAplicados.tipoAnimal) &&
      (filtrosAplicados.tamano === "" || animal.tamano === filtrosAplicados.tamano) 
    );
  });

  return (
    <div className="min-h-screen bg-white text-black flex flex-col ">
      <Menu />
      <div className="flex flex-grow">
        {/* MENÚ LATERAL */}
        <form className="w-3/7 lg:w-1/7 p-2 lg:p-8 bg-[#E0DDDD]">
          <div className="mt-10">
            <label>Tipo de animal</label>
            <select className="w-full mt-2 p-1 lg:p-2 border rounded-lg bg-[#FFFFFF] text-sm lg:text-lg" value={tipoAnimal} onChange={(e) => setTipoAnimal(e.target.value)}>
              <option value="">Seleccionar</option>
              <option value="perro">Perro</option>
              <option value="gato">Gato</option>
              <option value="pajaro">Pájaro</option>
              <option value="reptil">Reptil</option>
            </select>
          </div>

          <div className="mt-10">
            <label>Comunidad</label>
            <select className="w-full mt-2 p-1 lg:p-2 border rounded-lg bg-[#FFFFFF] text-sm lg:text-lg" value={comunidad} onChange={(e) => setComunidad(e.target.value)}>
              <option value="">Seleccionar</option>
              {comunidades.map((comunidad, index) => (
                <option key={index} value={comunidad}>{comunidad}</option>
              ))}
            </select>
          </div>
          
          <div className="mt-10">
            <label>Refugio</label>
            <select className="w-full mt-2 p-1 lg:p-2 border rounded-lg bg-[#FFFFFF] text-sm lg:text-lg" value={refugio} onChange={(e) => setRefugio(e.target.value)}>
              <option value="">Seleccionar</option>
              <option value="Protectora de animales de Navarra">Protectora de animales de Navarra</option>
              <option value="Huellitas">Huellitas</option>
              <option value="Protectora de animales Ribera">Protectora de animales Ribera</option>
            </select>
          </div>
          
          <div className="mt-10">
            <label>Tamaño</label>
            <select className="w-full mt-2 p-1 lg:p-2 border rounded-lg bg-[#FFFFFF] text-sm lg:text-lg" value={tamano} onChange={(e) => setTamano(e.target.value)}>
              <option value="">Seleccionar</option>
              <option value="grande">Grande</option>
              <option value="mediano">Mediano</option>
              <option value="pequeno">Pequeño</option>
            </select>
          </div>

          <button type="button" className="bg-[#865E53] text-white mt-30 p-2 border rounded w-full text-sm lg:text-lg" onClick={aplicarFiltros}>
            Aplicar filtros
          </button>
        </form>
        {/* LISTA DE ANIMALES */}
        <div className="w-4/7 lg:w-6/7 grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-22 m-8 lg:m-18">
          {animalesFiltrados.length > 0 ? (
            animalesFiltrados.map((animal, index) => (
              <Animal
                key={index}
                id={animal.id}
                imagen={`/images/animales/${animal.id}.png`}
                nombre={animal.nombre}
                descripcion={`${animal.raza} - ${calcularEdad(animal.fechaNacimiento)}`}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-lg">No hay animales que coincidan con los filtros seleccionados.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lista;
