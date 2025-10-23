import React from "react";
import { Card, Image, Container, Header } from "semantic-ui-react";
import "./menuComponent.css";

const MenuComponent = () => {
  const menuData = [
    {
      nombre: "Carne al Barril",
      descripcion: "Corte jugoso cocinado lentamente al barril, con sabor ahumado irresistible.",
      precio: "$35.000",
      imagen: "/img/MCarnesAlBarril.webp",
    },
    {
      nombre: "Costillas BBQ",
      descripcion: "Costillas tiernas bañadas en salsa BBQ artesanal, servidas con limón y hierbas.",
      precio: "$38.000",
      imagen: "/img/MCostillasBBQ.webp",
    },
    {
      nombre: "Bife de Chorizo Premium",
      descripcion: "Corte jugoso y tierno, madurado 21 días, perfecto al barril con nuestro toque especial.",
      precio: "$52.000",
      imagen: "/img/MBifeDeChorizo.webp",
    },
    {
      nombre: "Ojo de Bife Angus",
      descripcion: "Carne Angus de primera calidad, marmoleado perfecto y sabor intenso.",
      precio: "$58.000",
      imagen: "/img/MOjoDeBifeAngus.webp",
    },
  ];

  return (
    <div className="menu-container">
      <Container textAlign="center">
        <Header as="h1" className="menu-title">
          ¡Te recomendamos estos platos!
        </Header>

        <Card.Group centered itemsPerRow={2} stackable>
          {menuData.map((plato, i) => (
            <Card key={i} className="menu-card">
              <Image src={plato.imagen} wrapped ui={false} alt={plato.nombre} className="menu-image" />
              <Card.Content className="menu-content">
                <Card.Header className="menu-header">{plato.nombre}</Card.Header>
                <Card.Description className="menu-description">
                  {plato.descripcion}
                </Card.Description>
              </Card.Content>
              <Card.Content extra className="menu-price">
                <strong>{plato.precio}</strong>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Container>
    </div>
  );
};

export default MenuComponent;
