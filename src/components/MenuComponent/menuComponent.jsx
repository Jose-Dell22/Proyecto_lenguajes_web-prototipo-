import React, { useState } from "react";
import { Card, Image, Button, Icon, Container, Message } from "semantic-ui-react";
import { useApp } from "../../context/AppContext";
import { ICONS, MESSAGES } from "../../config/constants";
import "./menuComponent.css";

const MenuComponent = () => {
  const { addToCart, config } = useApp();
  const [addedMessage, setAddedMessage] = useState(null);

  const menuData = [
    {
      id: 1,
      title: "Carne al Barril",
      description:
        "Corte jugoso cocinado lentamente al barril, con sabor ahumado irresistible.",
      price: 35000,
      image: "/img/carnesAlBarril.jpg",
    },
    {
      id: 2,
      title: "Costillas BBQ",
      description:
        "Costillas tiernas bañadas en salsa BBQ artesanal, servidas con limón y hierbas.",
      price: 38000,
      image: "/img/costillasBBQ.jpg",
    },
    {
      id: 3,
      title: "Chorizo Parrillero",
      description:
        "Chorizos artesanales asados al carbón, servidos con arepa y chimichurri.",
      price: 25000,
      image: "/img/chorizoParrillero.jpeg",
    },
    {
      id: 4,
      title: "Punta de Anca",
      description:
        "Corte premium con un toque de sal gruesa y mantequilla de ajo, suave y jugoso.",
      price: 42000,
      image: "/img/puntadeAnca.jpg",
    },
    {
      id: 5,
      title: "Pechuga a la Parrilla",
      description:
        "Pechuga de pollo marinada con hierbas finas, cocinada a la parrilla a la perfección.",
      price: 30000,
      image: "/img/PechugaParrilla.jpg",
    },
    {
      id: 6,
      title: "Trilogía Parrillera",
      description:
        "Selección de tres cortes —chorizo, punta de anca y lomo— cocinados al barril, servidos con papas criollas y chimichurri artesanal.",
      price: 52000,
      image: "/img/TrilogíaParrillera.jpg",
    },
  ];

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedMessage(item.title);
    setTimeout(() => setAddedMessage(null), config.APP.messageTimeout);
  };

  return (
    <div className="menu-estatico-container">
      {/* === Encabezado con estilo tipo Products === */}
      <Container textAlign="center" className="menu-estatico-content">
        <h1 className="menu-estatico-header">Especiales del Barril</h1>

        {/* Mensaje de confirmación */}
        {addedMessage && (
          <Message positive style={{ marginTop: "1em" }}>
            <Icon name={ICONS.check} />
            <strong>{addedMessage}</strong> {MESSAGES.productAdded}
          </Message>
        )}

        {/* Cartas del menú */}
        <Card.Group centered itemsPerRow={3} stackable style={{ marginTop: "2em" }}>
          {menuData.map((item) => (
            <Card key={item.id} className="menu-estatico-card transition-normal">
              <Image
                src={item.image}
                alt={item.title}
                className="menu-estatico-image"
              />
              <Card.Content textAlign="center">
                <Card.Header className="menu-estatico-title">
                  {item.title}
                </Card.Header>
                <Card.Description className="menu-estatico-description">
                  {item.description}
                </Card.Description>
              </Card.Content>
              <Card.Content extra textAlign="center">
                <strong className="menu-estatico-price">
                  ${item.price.toLocaleString("es-CO", {
                    minimumFractionDigits: 0,
                  })}
                </strong>
                <Button
                  color="orange"
                  circular
                  icon
                  onClick={() => handleAddToCart(item)}
                  className="menu-estatico-button"
                >
                  <Icon name={ICONS.plus} />
                </Button>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Container>
    </div>
  );
};

export default MenuComponent;


