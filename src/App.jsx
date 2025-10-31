import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Menu, Container, Loader, Dimmer } from "semantic-ui-react";

import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import ContactoUbicacion from "./components/Contact/ContactoUbicacion";
import NotFound from "./components/Notfound/Notfound";
import AboutUs from "./components/AboutUs/About"
import MenuComponent from "./components/MenuComponent/menuComponent";
import FloatingCart from "./components/common/FloatingCart";
import Footer from "./components/common/Footer";

import { useApp } from "./context/AppContext";
import { APP_CONFIG, MESSAGES } from "./config/constants";
import "./styles.css";

const App = () => {
  const { loading, config } = useApp();

  if (loading) {
    return (
      <Dimmer active inverted>
        <Loader size="large" content={MESSAGES.loading} />
      </Dimmer>
    );
  }

  return (
    <Router>
      <Menu fixed="top" inverted className="navbar">
        <Container>
          <Menu.Item as={Link} to={config.ROUTES.HOME} header className="brand">
            {config.RESTAURANT.name}
          </Menu.Item>
          <Menu.Item as={Link} to={config.ROUTES.HOME}>Inicio</Menu.Item>
          <Menu.Item as={Link} to={config.ROUTES.MENU_COMPONENT}>Especialidades del Barril</Menu.Item>
          <Menu.Item as={Link} to={config.ROUTES.PRODUCTS}>Productos</Menu.Item>
          <Menu.Item as={Link} to={config.ROUTES.CONTACT}>Contacto / Ubicación</Menu.Item>
          <Menu.Item as={Link} to={config.ROUTES.ABOUT}>Sobre Nosotros</Menu.Item>
        </Container>
      </Menu>

      <div className="main-content">
        <Routes>
          <Route path={config.ROUTES.HOME} element={<Home />} />
          <Route path={config.ROUTES.PRODUCTS} element={<Products />} />
          <Route path={config.ROUTES.CONTACT} element={<ContactoUbicacion />} />
          <Route path={config.ROUTES.MENU_COMPONENT} element={<MenuComponent />} /> 
          <Route path={config.ROUTES.ABOUT} element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Carrito flotante global */}
        <FloatingCart />
      </div>

      {/* Footer global */}
      <Footer />
    </Router>
  );
};

export default App;
