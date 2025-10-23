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
        console.error('Error al cargar productos:', error);
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
      <Loader active inline="centered" size="large" content={MESSAGES.loadingProducts} />
    );
  }

  const visibleProducts = products.slice(0, visibleCount);

  return (
    <div className="products-container">
      {/* Overlay oscuro para mejor contraste */}
      <div className="products-overlay" />
      
      <Container textAlign="center" className="products-content">
        <Header
          as="h1"
          className="products-header"
        >
          {config.RESTAURANT.name}
        </Header>

      {addedMessage && (
        <Message positive style={{ marginTop: "1em" }}>
          <Icon name={ICONS.check} />
          <strong>{addedMessage}</strong> {MESSAGES.productAdded}
        </Message>
      )}

      <Card.Group centered itemsPerRow={4} stackable style={{ marginTop: "2em" }}>
        {visibleProducts.map((item) => (
          <Card
            key={item.id}
            className="products-card transition-normal"
          >
            <Image
              src={item.image}
              alt={item.title}
              className="products-image"
            />
            <Card.Content textAlign="center">
              <Card.Header className="products-title">{item.title}</Card.Header>
              <Card.Description className="products-description">
                {item.description.slice(0, 80)}...
              </Card.Description>
            </Card.Content>
            <Card.Content extra textAlign="center">
              <strong className="products-price">
                ${item.price.toLocaleString("es-CO", { minimumFractionDigits: 0 })}
              </strong>
              <Button
                color="orange"
                circular
                icon
                onClick={() => handleAddToCart(item)}
                className="products-button"
              >
                <Icon name={ICONS.plus} />
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
          onClick={() => setVisibleCount((prev) => prev + config.APP.productsPerPage)}
          className="products-load-more"
        >
          Ver más
          <Icon name={ICONS.arrowDown} />
        </Button>
      )}

      </Container>
    </div>
  );
};

export default Products;
