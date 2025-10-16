import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Menu, Container, Loader, Dimmer } from "semantic-ui-react";

import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import ContactoUbicacion from "./components/Contact/ContactoUbicacion";
import NotFound from "./components/Notfound/Notfound";
import AboutUs from "./components/AboutUs/About"
import MenuComponent from "./components/MenuComponent/menuComponent";



import "./styles.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Dimmer active inverted>
        <Loader size="large" content="Cargando Carnes al Barril..." />
      </Dimmer>
    );
  }

  return (
    <Router>
      <Menu fixed="top" inverted className="navbar">
        <Container>
          <Menu.Item as={Link} to="/" header className="brand">
            Carnes al Barril
          </Menu.Item>
          <Menu.Item as={Link} to="/">Inicio</Menu.Item>
          <Menu.Item as={Link} to="/products">Productos</Menu.Item>
          <Menu.Item as={Link} to="/menu">Menú</Menu.Item>
          {/* NUEVO: enlace a tu pestaña */}
          <Menu.Item as={Link} to="/contacto">Contacto / Ubicación</Menu.Item>
          <Menu.Item as={Link} to="/about">Sobre Nosotros</Menu.Item>
        </Container>
      </Menu>

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/menu" element={<MenuComponent />} />
          {/* NUEVO: ruta de tu componente */}
          <Route path="/contacto" element={<ContactoUbicacion />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
