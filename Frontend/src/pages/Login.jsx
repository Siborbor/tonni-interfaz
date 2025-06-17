import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";
import TopBannerHome from "../svg components/TopBannerHome";
import { motion } from "framer-motion";
import { login } from "../services/authService";


const Login = () => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const loginStore = useAuthStore();
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    if (token) navigate("/inicio");
  }, [token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await login({ correo, password: contrasena });
       loginStore.login(data.usuario, data.token);
      navigate("/inicio");
    } catch (err) {
      setError("Correo o contraseña inválidos");
      console.error(err);
    }
  };

  const handleClick = () => {
    navigate("/registro");
  }

  return (
    <div className="login-page">
      <motion.div
        className="contenedor_imgTop_home"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: -20, opacity: 1 }}
        transition={{ back: "backIn", duration: 0.5 }}
        exit={{ y: -100, opacity: 0 }}
      >
        <TopBannerHome />
      </motion.div>
      <div className="contenedor_titulo_login">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ circ: "circIn", duration: 0.5, delay: 0.2 }}
          exit={{ y: -100, opacity: 0 }}
        >
          Login
        </motion.h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Ingresar</button>
      </form>
      <a onClick={handleClick} className="link-registro">
        ¿No tienes cuenta? Regístrate aquí
      </a>
    </div>
  );
};

export default Login;
