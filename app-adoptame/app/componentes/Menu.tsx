import { Link } from "react-router-dom";

const Menu = () => {
  return (

    <nav className="bg-[#865E53] text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-10">
            <Link to="/">
                <img src="app/imgs/logo_bg.png" alt="Logo" className="ml-6 h-12" />
            </Link>
            <h1 className="text-2xl font-bold">VIDA CON PATITAS</h1>
        </div>
        
        <ul className="flex space-x-24 mr-8">
        <li>
            <Link to="/lista">Animales</Link>
        </li>
        <li>
            <Link to="/login">Iniciar sesión</Link>
        </li>
        <li>
            <Link to="/contacto">Contacto</Link>
        </li>
        </ul>
    </nav>
  );
};

export default Menu;