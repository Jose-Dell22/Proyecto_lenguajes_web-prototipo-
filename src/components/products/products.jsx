import React, { useEffect, useState } from "react";
import {
  Card,
  Image,
  Button,
  Icon,
  Loader,
  Container,
  Header,
  Message,
} from "semantic-ui-react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [addedMessage, setAddedMessage] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar productos:", err);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]);
    setAddedMessage(item.title);
    setTimeout(() => setAddedMessage(null), 1500);
  };

  if (loading) {
    return (
      <Loader active inline="centered" size="large" content="Cargando productos..." />
    );
  }

  const visibleProducts = products.slice(0, visibleCount);

  return (
    <Container textAlign="center" style={{ marginTop: "4em", marginBottom: "4em" }}>
      <Header
        as="h1"
        style={{
          color: "#fff",
          background: "linear-gradient(90deg, #ff7b00, #ff4500)",
          padding: "0.7em",
          borderRadius: "12px",
          textTransform: "uppercase",
          letterSpacing: "2px",
          boxShadow: "0 4px 20px rgba(255, 94, 0, 0.4)",
        }}
      >
        Carnes al Barril
      </Header>

      {addedMessage && (
        <Message positive style={{ marginTop: "1em" }}>
          <Icon name="check circle" />
          <strong>{addedMessage}</strong> fue agregado al carrito 🛒
        </Message>
      )}

      <Card.Group centered itemsPerRow={4} stackable style={{ marginTop: "2em" }}>
        {visibleProducts.map((item) => (
          <Card
            key={item.id}
            style={{
              borderRadius: "18px",
              background: "linear-gradient(145deg, #fff5e1, #ffe4b3)",
              boxShadow: "0 6px 15px rgba(255, 136, 0, 0.2)",
              transition: "all 0.3s ease",
            }}
          >
            <Image
              src={item.image}
              alt={item.title}
              style={{ height: "180px", objectFit: "contain", padding: "1em" }}
            />
            <Card.Content textAlign="center">
              <Card.Header style={{ color: "#ff7b00" }}>{item.title}</Card.Header>
              <Card.Description style={{ fontSize: "0.9em", color: "#444" }}>
                {item.description.slice(0, 80)}...
              </Card.Description>
            </Card.Content>
            <Card.Content extra textAlign="center">
              <strong style={{ color: "#d35400" }}>
                ${item.price.toLocaleString("es-CO", { minimumFractionDigits: 0 })}
              </strong>
              <Button
                color="orange"
                circular
                icon
                onClick={() => handleAddToCart(item)}
                style={{ marginLeft: "1em" }}
              >
                <Icon name="plus" />
              </Button>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>

      {visibleCount < products.length && (
        <Button
          color="orange"
          size="large"
          icon
          labelPosition="right"
          onClick={() => setVisibleCount((prev) => prev + 4)}
          style={{ marginTop: "2em" }}
        >
          Ver más
          <Icon name="arrow down" />
        </Button>
      )}

      {cart.length > 0 && (
        <Button
          color="orange"
          icon
          labelPosition="right"
          style={{
            position: "fixed",
            bottom: "25px",
            right: "25px",
            borderRadius: "30px",
            boxShadow: "0 4px 10px rgba(255, 136, 0, 0.5)",
          }}
        >
          <Icon name="shopping cart" />
          {cart.length} en carrito
        </Button>
      )}
    </Container>
  );
};

export default Products;
