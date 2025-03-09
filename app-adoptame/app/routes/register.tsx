import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Info from "~/components/Info";
import Loader from "~/components/Loader";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!user || !password || !email) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/data/users.json"); // Carga el JSON de usuarios
      if (!response.ok) throw new Error("Error al cargar los datos");

      const data: UserCreate[] = await response.json();

      // Verificar si el usuario ya existe
      const foundUser = data.find((logger) => logger.user === user);

      if (foundUser) {
        setError("El usuario ya está registrado.");
      } else {
            setError("La función de registro de usuarios no está disponible por el momento. Sin embargo, puedes acceder con el usuario `prueba` y la contraseña `1234`.")
        }
    } catch (error) {
      setError("Se ha producido un error. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#DFC3BB] p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
        {/* Sección izquierda (Formulario) */}
        <div className="md:w-1/2 p-8">
          <div className="flex items-center space-x-2 mb-4">
            <img src="/images/Auth/Logo.png" alt="Logo" className="w-10" />
            <h1 className="text-2xl font-bold text-[#865E53]">
              VIDA CON PATTITAS
            </h1>
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}{" "}
          {/* Muestra errores */}
          <form className="mt-4 space-y-4" onSubmit={handleRegister}>
            {/* Nombre de usuario */}
            <div className="relative">
              <label className="block text-sm text-black" htmlFor="user">
                Nombre de usuario
              </label>
              <div className="mt-2 flex items-center border border-black rounded p-2">
                <img
                  src="/images/Auth/User.png"
                  alt="Usuario"
                  className="w-5 h-5 text-[#6D6D6D]"
                />
                <input
                  id="user"
                  name="user"
                  type="text"
                  placeholder="Usuario"
                  className="w-full pl-2 text-[#6D6D6D] placeholder:text-[#6D6D6D] focus:outline-none"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
              </div>
            </div>
            {/* Correo */}
            <div className="relative">
              <label className="block text-sm text-black" htmlFor="email">
                Correo electrónico
              </label>
              <div className="mt-2 flex items-center border border-black rounded p-2">
                <img
                  src="/images/Auth/Email.png"
                  alt="Usuario"
                  className="w-5 h-5 text-[#6D6D6D]"
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Correo"
                  className="w-full pl-2 text-[#6D6D6D] placeholder:text-[#6D6D6D] focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            {/* Password */}
            <div className="relative">
              <label className="block text-sm text-black" htmlFor="pass">
                Contraseña
              </label>
              <div className="flex items-center border border-black rounded p-2">
                <img
                  src="/images/Auth/Lock.png"
                  alt="Contraseña"
                  className="w-5 h-5 text-[#6D6D6D]"
                />
                <input
                  id="pass"
                  name="pass"
                  type="password"
                  placeholder="Contraseña"
                  className="w-full pl-2 text-[#6D6D6D] placeholder:text-[#6D6D6D] focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            {/* Boton */}
            <button
              type="submit"
              className="w-full bg-[#865E53] text-white p-2 rounded hover:opacity-90"
            >
              Crear cuenta
            </button>
          </form>
          <p className="mt-4 text-sm text-left text-black">
            ¿Ya tienes una cuenta?{" "}
            <a href="/Auth/Login" className="text-[#865E53]">
              Acceder
            </a>
          </p>
          <p className="mt-4 text-sm text-left text-black">
            <a href="/lista" className="text-[#865E53]">
              Continuar sin cuenta
            </a>
          </p>
        </div>
        {/* Sección derecha (Imagen y mensaje) */}
        <Info />
      </div>
    </div>
  );
};

export default Register;
