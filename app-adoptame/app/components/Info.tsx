const Info = () => {
  return (
    <div className="hidden md:flex md:w-1/2 bg-[#865E53] text-white flex-col items-center justify-center p-8 rounded-r-lg">
      <img
        src="/images/Auth/Perro.png"
        alt="Perro feliz"
        className="w-48 h-48 rounded-md mb-4"
      />
      <h2 className="text-lg font-bold text-center">
        ¡Encuentra al compañero ideal para ti!
      </h2>
      <p className="text-center text-sm">
        Nuestra misión es conectar a los amantes de los animales como tú con sus
        nuevos compañeros. ¡Inicia sesión para empezar tu viaje de adopción!
      </p>
    </div>
  );
};

export default Info;
