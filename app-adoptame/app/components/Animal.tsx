import { Link } from "react-router";

const Animal: React.FC<AnimalProps> = ({ id, imagen, nombre, descripcion }) => {
  return (
    <Link to={`/detalle/${id}`}>
      <div className="bg-[#E0DDDD] text-white lg:min-h-100 rounded hover:scale-105">
        <img src={imagen} alt={nombre} />
        <div className="p-4">
          <h1 className="md:text-2xl font-bold mb-2 text-black">{nombre}</h1>
          <p className="text-black mb-4">{descripcion}</p>
          <div className="flex justify-end">
            <span className="material-symbols-outlined text-red-500">
              favorite
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Animal;
