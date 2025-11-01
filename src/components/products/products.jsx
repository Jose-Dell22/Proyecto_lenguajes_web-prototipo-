import React, { useState, useEffect } from "react";
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
import { useApp } from "../../context/AppContext";
import { APP_CONFIG, MESSAGES, ICONS } from "../../config/constants";
import "./Products.css";

const Products = () => {
  const { addToCart, getCartItemsCount, config } = useApp();
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(config.APP.productsPerPage);
  const [addedMessage, setAddedMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(APP_CONFIG.API.products);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedMessage(item.title);
    setTimeout(() => setAddedMessage(null), config.APP.messageTimeout);
  };

  if (loading) {
    return (
      <Loader
        active
        inline="centered"
        size="large"
        content={MESSAGES.loadingProducts}
      />
    );
  }

  const visibleProducts = products.slice(0, visibleCount);

  return (
    <div
      className="products-container"
      style={{
        position: "relative",
        backgroundColor: "#000",
        paddingBottom: "0.5em",
      }}
    >
      {/* Fondo oscuro permanente */}
      <div
        className="products-overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.75)",
          zIndex: 0,
        }}
      />

      <Container
        textAlign="center"
        className="products-content"
        style={{
          position: "relative",
          zIndex: 1,
          paddingTop: "4em",
        }}
      >
        {/* 🔶 Título con estilo cálido y resaltado */}
        <Header
          as="h1"
          className="products-header"
          style={{
            color: "#fff",
            display: "inline-block",
            padding: "0.6em 1.5em",
            borderRadius: "14px",
            textTransform: "uppercase",
            letterSpacing: "2px",
            background: "linear-gradient(45deg, #ff7b00, #ff4500)",
            boxShadow: "0 4px 15px rgba(255, 123, 0, 0.4)",
            fontSize: "1.8em",
            fontWeight: "800",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {config.RESTAURANT.name}
        </Header>

        {addedMessage && (
          <Message positive style={{ marginTop: "1em" }}>
            <Icon name={ICONS.check} />
            <strong>{addedMessage}</strong> {MESSAGES.productAdded}
          </Message>
        )}

        {/* 🟧 Tarjetas mejoradas */}
        <Card.Group
          centered
          itemsPerRow={4}
          stackable
          style={{ marginTop: "2em", marginBottom: "3em" }}
        >
          {visibleProducts.map((item) => (
            <Card
              key={item.id}
              style={{
                background: "#fff",
                borderRadius: "16px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                overflow: "hidden",
                border: "none",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(0,0,0,0.15)";
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                }}
              />

              <Card.Content textAlign="center" style={{ padding: "1em" }}>
                <Card.Header
                  style={{
                    color: "#ff7b00",
                    fontWeight: "700",
                    fontSize: "1.1em",
                    marginBottom: "0.4em",
                  }}
                >
                  {item.title}
                </Card.Header>
                <Card.Description
                  style={{
                    color: "#555",
                    fontSize: "0.9em",
                    lineHeight: "1.4",
                  }}
                >
                  {item.description.slice(0, 80)}...
                </Card.Description>
              </Card.Content>

              <Card.Content
                extra
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0.9em",
                  borderTop: "1px solid #eee",
                  gap: "0.7em",
                }}
              >
                <strong
                  style={{
                    color: "#ff7b00",
                    fontSize: "1.1em",
                    fontWeight: "700",
                  }}
                >
                  ${" "}
                  {item.price.toLocaleString("es-CO", {
                    minimumFractionDigits: 0,
                  })}
                </strong>

                <Button
                  circular
                  icon
                  color="orange"
                  onClick={() => handleAddToCart(item)}
                  style={{
                    boxShadow: "0 0 12px rgba(255, 136, 0, 0.4)",
                    transition: "all 0.2s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.style.boxShadow =
                      "0 0 18px rgba(255, 136, 0, 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 0 12px rgba(255, 136, 0, 0.4)";
                  }}
                >
                  <Icon name={ICONS.plus} />
                </Button>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>

        {/* 🟢 Botón Ver más sin tocar */}
        {visibleCount < products.length && (
          <div
            style={{
              position: "relative",
              marginTop: "3em",
              marginBottom: "2em",
              display: "flex",
              justifyContent: "center",
              zIndex: 2,
            }}
          >
            <Button
              color="orange"
              size="large"
              icon
              labelPosition="right"
              onClick={() =>
                setVisibleCount((prev) => prev + config.APP.productsPerPage)
              }
              className="products-load-more"
              style={{
                background: "linear-gradient(45deg, #ff7b00, #ff4500)",
                boxShadow: "0 4px 15px rgba(255, 123, 0, 0.4)",
                padding: "1em 1em",
                border: "none",
                color: "white",
                fontWeight: "bold",
                transition: "all 0.2s ease-in-out",
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = "scale(0.97)";
                e.currentTarget.style.boxShadow =
                  "0 2px 10px rgba(255, 123, 0, 0.6)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(255, 123, 0, 0.4)";
              }}
            >
              Ver más
              <Icon name={ICONS.arrowDown} />
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Products;
