import Menu from "../componentes/Menu";
// app/imgs/inicio_animal.jpg
const Inicio = () => {
  return (
    <div className="h-screen flex flex-col">
      <Menu />
      <div className="bg-white text-black p-4 flex-grow flex flex-col items-center justify-center">
        {/* Encabezado */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">VIDA CON PATITAS</h1>
          <p className="text-lg text-gray-600 mt-2">
            Encuentra un nuevo amigo y cambia su vida para siempre.
          </p>
        </header>

        {/* Imagen destacada en rectángulo */}
        <div className="w-full max-w-3xl h-200 bg-gray-300 rounded-lg mt-6 overflow-hidden flex items-center justify-center">
          <img
            src="app/imgs/inicio_animal.jpg"
            alt="Imagen representativa del proyecto"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
