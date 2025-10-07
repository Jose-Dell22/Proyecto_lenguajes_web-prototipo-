import React, { useEffect, useState } from "react";
import {
  Image,
  Button,
  Icon,
  Loader,
  Container,
  Header,
  Message,
} from "semantic-ui-react";
import "./Products.css";

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
      <div className="products-loader">
        <Loader active inline="centered" size="large" content="Cargando productos..." />
      </div>
    );
  }

  const visibleProducts = products.slice(0, visibleCount);

  return (
    <Container textAlign="left" className="products-container fade-in-section visible">
      <Header as="h2" className="products-title fade-in-section visible fade-in-delay-1">
        🥩 Carnes al Barril
      </Header>


      {addedMessage && (
        <div className="added-message fade-in-section visible fade-in-delay-1">
          <Message positive>
            <Icon name="check circle" />
            <strong>{addedMessage}</strong> fue agregado al carrito 🛒
          </Message>
        </div>
      )}

      <div className="products-list">
        {visibleProducts.map((item, index) => (
          <div
            key={item.id}
            className={`product-card card-hover fade-in-section fade-in-delay-${(index % 3) + 1} visible`}
          >
            <Image src={item.image} alt={item.title} className="product-img" />
            <div className="product-info">
              <h3>{item.title}</h3>
              <p>{item.description.slice(0, 120)}...</p>
              <strong>${item.price.toLocaleString("es-CO", { minimumFractionDigits: 0 })}</strong>
            </div>
            <div className="product-action">
              <Button
                color="orange"
                circular
                icon
                className="pulse-btn"
                onClick={() => handleAddToCart(item)}
              >
                <Icon name="plus" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < products.length && (
        <div className="load-more-container fade-in-section visible fade-in-delay-3">
          <Button
            color="orange"
            size="large"
            icon
            labelPosition="right"
            className="pulse-btn"
            onClick={() => setVisibleCount((prev) => prev + 4)}
          >
            Ver más
            <Icon name="arrow down" />
          </Button>
        </div>
      )}

      {/* Carrito flotante (solo para mostrar cuántos hay) */}
      {cart.length > 0 && (
        <div className="cart-floating fade-in-section visible fade-in-delay-2">
          <Button color="orange" icon labelPosition="right" className="pulse-btn">
            <Icon name="shopping cart" />
            {cart.length} en carrito
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Products;
