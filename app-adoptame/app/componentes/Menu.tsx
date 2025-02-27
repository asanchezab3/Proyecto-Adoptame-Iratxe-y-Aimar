import { Link } from "react-router-dom";

const Menu = () => {
  return (

    <nav className="bg-[#865E53] text-white p-2 sm:p-4 flex justify-between items-center">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700"/>
        <div className="flex items-center space-x-10">
            <Link to="/">
                <img src="/images/logo_bg.png" alt="Logo" className="ml-2 lg:ml-10 h-8 lg:h-12" />
            </Link>
            
            <h1 className="text-sm sm:text-base md:text-lg font-bold hidden md:block">VIDA CON PATITAS</h1>
        </div>
        
        <ul className="flex space-x-2 sm:space-x-12 md:space-x-24 mr-2 md:mr-8">
            <li className="flex items-center">
                <span className="material-symbols-outlined mr-2 lg:mr-4">pets</span>
                <Link className="text-sm sm:text-base md:text-lg" to="/lista">Animales</Link>
            </li>
            <li className="flex items-center">
                <span className="material-symbols-outlined mr-2 lg:mr-4">person</span>
                <Link className="text-sm sm:text-base md:text-lg" to="">Iniciar sesión</Link>
            </li>
            <li className="flex items-center">
                <span className="material-symbols-outlined mr-2 lg:mr-4">mail</span>
                <Link className="text-sm sm:text-base md:text-lg" to="/contacto">Contacto</Link>
            </li>
        </ul>
    </nav>
  );
};

export default Menu;