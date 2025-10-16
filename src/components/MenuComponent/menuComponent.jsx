import React from "react";
import { Card, Image, Container, Header } from "semantic-ui-react";
import "../../styles.css";

const MenuComponent = () => {
  const menuData = {
    Carnes: [
      {
        nombre: "Carne al barril",
        descripcion: "Carne jugosa preparada al estilo tradicional.",
        precio: "$35.000",
        imagen: "/img/MCarnesAlBarril.webp",
      },
      {
        nombre: "Costillas BBQ",
        descripcion: "Costillas tiernas bañadas en salsa BBQ artesanal.",
        precio: "$38.000",
        imagen: "/img/MCostillasBBQ.webp",
      },
    ],
    Acompañamientos: [
      {
        nombre: "Papas criollas",
        descripcion: "Crujientes por fuera, suaves por dentro.",
        precio: "$8.000",
        imagen: "/img/MPapasCriollas.webp",
      },
      {
        nombre: "Yuca frita",
        descripcion: "Perfecta para acompañar cualquier plato.",
        precio: "$7.000",
        imagen: "/img/MYucaFrita.jpg",
      },
    ],
    Bebidas: [
      {
        nombre: "Limonada de coco",
        descripcion: "Refrescante y cremosa, ideal para el clima cálido.",
        precio: "$10.000",
        imagen: "/img/MLimonadaDeCoco.webp",
      },
      {
        nombre: "Cerveza artesanal",
        descripcion: "Hecha en casa, suave y con cuerpo.",
        precio: "$12.000",
        imagen: "/img/MCerbezaArtesanal.webp",
      },
    ],
    Postres: [
      {
        nombre: "Flan de caramelo",
        descripcion: "Suave y dulce, preparado con amor.",
        precio: "$9.000",
        imagen: "/img/MFlanDeCaramelo.webp",
      },
      {
        nombre: "Brownie con helado",
        descripcion: "Chocolate intenso con helado de vainilla.",
        precio: "$11.000",
        imagen: "/img/MBrownieConHelado.webp",
      },
    ],
  };

  return (
    <Container textAlign="center" style={{ marginTop: "7em", marginBottom: "4em" }}>
      <Header as="h1" style={{ marginBottom: "1.5em" }}>
        Menú del Restaurante
      </Header>

      {Object.entries(menuData).map(([categoria, platos]) => (
        <div key={categoria} style={{ marginBottom: "3em" }}>
          <Header as="h2" style={{ marginBottom: "1em" }}>
            {categoria}
          </Header>
          <Card.Group centered itemsPerRow={2}>
            {platos.map((plato, i) => (
              <Card key={i}>
                <Image src={plato.imagen} wrapped ui={false} />
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
        </div>
      ))}
    </Container>
  );
};

export default MenuComponent;
