import React , { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Menu, Container, Loader, Dimmer, Dropdown, Icon } from "semantic-ui-react";

import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import ContactoUbicacion from "./components/Contact/ContactoUbicacion";
import NotFound from "./components/Notfound/Notfound";
import AboutUs from "./components/AboutUs/About";
import MenuComponent from "./components/MenuComponent/menuComponent";
import FloatingCart from "./components/common/FloatingCart";
import Footer from "./components/common/Footer";
import ReservationForm from "./components/Reservations/ReservationForm";

import { useApp } from "./context/AppContext";
import { MESSAGES } from "./config/constants";
import "./styles.css";

import { useTranslation } from "react-i18next";

const App = () => {
  const { loading, config } = useApp();
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 👈 Controla el menú móvil

  if (loading) {
    return (
      <Dimmer active inverted>
        <Loader size="large" content={MESSAGES.loading} />
      </Dimmer>
    );
  }

  // 🌎 Opciones de idioma
  const languageOptions = [
    { key: "es", value: "es", flag: "es", text: "Español" },
    { key: "en", value: "en", flag: "us", text: "English" },
    { key: "zh", value: "zh", flag: "cn", text: "中文" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      {/* 🔝 NAVBAR */}
     <Menu fixed="top" inverted borderless size="large" className="navbar" stackable>
  <Container fluid className="navbar-inner">
    {/* 🏠 Marca */}
    <Menu.Item
      as={NavLink}
      to={config.ROUTES.HOME}
      end
      header
      className="brand"
      active={false}
    >
      {config.RESTAURANT.name}
    </Menu.Item>

    {/* 🔗 Links principales */}
    <Menu.Menu className={`nav-spreader ${isMenuOpen ? "open" : ""}`}>
      <Menu.Item as={NavLink} to={config.ROUTES.HOME} end onClick={() => setIsMenuOpen(false)}>
        {t("navbar.home")}
      </Menu.Item>
      <Menu.Item as={NavLink} to={config.ROUTES.MENU_COMPONENT} onClick={() => setIsMenuOpen(false)}>
        {t("navbar.specialties")}
      </Menu.Item>
      <Menu.Item as={NavLink} to={config.ROUTES.PRODUCTS} onClick={() => setIsMenuOpen(false)}>
        {t("navbar.products")}
      </Menu.Item>
      <Menu.Item as={NavLink} to={config.ROUTES.CONTACT} onClick={() => setIsMenuOpen(false)}>
        {t("navbar.contact")}
      </Menu.Item>
      <Menu.Item as={NavLink} to={config.ROUTES.ABOUT} onClick={() => setIsMenuOpen(false)}>
        {t("navbar.about")}
      </Menu.Item>
    </Menu.Menu>

    {/* 🌍 Selector de idioma */}
    <Menu.Menu position="right" className="lang-menu">
      <Dropdown
        item
        simple
        floating
        options={languageOptions}
        value={i18n.language}
        onChange={(e, { value }) => changeLanguage(value)}
        icon={null}
        trigger={
          <span style={{ color: "#fff", fontWeight: "bold" }}>
            <Icon name="globe" style={{ marginRight: "5px" }} />
            {t("navbar.language")}
          </span>
        }
      />
    </Menu.Menu>

    {/* 📱 Botón hamburguesa (visible solo en móvil) */}
    <div className="hamburger-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <Icon name={isMenuOpen ? "close" : "bars"} size="large" color="orange" />
    </div>
  </Container>
  </Menu>

      {/* 📄 Contenido */}
      <div className="main-content">
        <Routes>
          <Route path={config.ROUTES.HOME} element={<Home />} />
          <Route path={config.ROUTES.PRODUCTS} element={<Products />} />
          <Route path={config.ROUTES.CONTACT} element={<ContactoUbicacion />} />
          <Route path={config.ROUTES.MENU_COMPONENT} element={<MenuComponent />} />
          <Route path={config.ROUTES.ABOUT} element={<AboutUs />} />
          <Route path={config.ROUTES.RESERVATION} element={<ReservationForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <FloatingCart />
      </div>

      <Footer />
    </Router>
  );
};

export default App;