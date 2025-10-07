import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Menu, Container, Loader, Dimmer } from "semantic-ui-react";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";  
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
          <Menu.Item as={Link} to="https://i.postimg.cc/hj5pn4Nc/logo.png" header className="brand">
            Carnes al Barril
          </Menu.Item>
          <Menu.Item as={Link} to="/">
            Inicio
          </Menu.Item>
        </Container>
      </Menu>

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
