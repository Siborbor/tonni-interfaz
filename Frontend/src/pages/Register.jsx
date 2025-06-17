import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";
import TopBannerHome from "../svg components/TopBannerHome";
import { motion } from "framer-motion";

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await register({
        nombre,
        correo,
        edad: Number(edad),
        password: contrasena,
      });
      navigate("/login");
    } catch (err) {
      setError("Error al registrarse. Revisa los datos e intenta de nuevo.");
      console.error(err);
    }
  };

  return (
    <div className="register-page">
      <motion.div
        className="contenedor_imgTop_home"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: -20, opacity: 1 }}
        transition={{ back: "backIn", duration: 0.5 }}
        exit={{ y: -100, opacity: 0 }}
      >
        <TopBannerHome />
      </motion.div>
      <div className="contenedor_titulo_register">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ circ: "circIn", duration: 0.5, delay: 0.4 }}
          exit={{ y: -100, opacity: 0 }}
        >
          Registro
        </motion.h2>
      </div>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ circ: "circIn", duration: 0.5, delay: 0.5 }}
        exit={{ y: -100, opacity: 0 }}
      >
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          required
          min={1}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
          minLength={6}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Registrarse</button>
      </motion.form>
    </div>
  );
};

export default Register;
