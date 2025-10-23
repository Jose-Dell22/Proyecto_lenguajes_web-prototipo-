import React from "react";
import { Card, Image, Container } from "semantic-ui-react";
import "./menuComponent.css";

const MenuComponent = () => {
  const menuData = [
    {
      nombre: "Carne al Barril",
      descripcion:
        "Corte jugoso cocinado lentamente al barril, con sabor ahumado irresistible.",
      precio: "$35.000",
      imagen: "/img/MCarnesAlBarril.webp",
    },
    {
      nombre: "Costillas BBQ",
      descripcion:
        "Costillas tiernas bañadas en salsa BBQ artesanal, servidas con limón y hierbas.",
      precio: "$38.000",
      imagen: "/img/MCostillasBBQ.webp",
    },
    {
      nombre: "limonada",
      descripcion:
        "Jugoso , refrescastnte y nutritivo para hidratarse ",
      precio: "$12.000",
      imagen: "/img/limonada.jpg",
    },

  ];

  return (
    <Container textAlign="center" style={{ marginTop: "2em" }}>
      <Card.Group centered itemsPerRow={2} stackable>
        {menuData.map((plato, index) => (
          <Card key={index}>
            <Image src={plato.imagen} alt={plato.nombre} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{plato.nombre}</Card.Header>
              <Card.Description>{plato.descripcion}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <strong>{plato.precio}</strong>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Container>
  );
};

export default MenuComponent;
