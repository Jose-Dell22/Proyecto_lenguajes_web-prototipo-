import React, { useState } from 'react';
import { Button, Icon, Popup, Segment, List, Header, Divider } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

const FloatingCart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart, getCartTotal, getCartItemsCount, config } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  const handleGoToContact = () => {
    navigate(config.ROUTES.CONTACT);
    setIsOpen(false);
  };

  const cartItemsCount = getCartItemsCount();
  const cartTotal = getCartTotal();

  if (cartItemsCount === 0) {
    return null;
  }

  return (
    <Popup
      trigger={
        <Button
          circular
          color="orange"
          size="large"
          style={{
            position: "fixed",
            bottom: "25px",
            right: "25px",
            zIndex: 1000,
            boxShadow: "0 4px 20px rgba(255, 136, 0, 0.5)",
            animation: "pulse 2s infinite",
          }}
        >
          <Icon name="shopping cart" />
          {cartItemsCount}
        </Button>
      }
      content={
        <Segment>
          <Header as="h4" textAlign="center">
            <Icon name="shopping cart" />
            Carrito de Compras
          </Header>
          <Divider />
          
          {cart.length > 0 ? (
            <>
              <List divided relaxed>
                {cart.map((item, index) => (
                  <List.Item key={`${item.id}-${index}`}>
                    <List.Content floated="right">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Button
                          icon="minus"
                          size="mini"
                          color="orange"
                          onClick={() => decreaseQuantity(index)}
                          title="Disminuir cantidad"
                          disabled={item.quantity <= 1}
                        />
                        <span style={{ minWidth: '20px', textAlign: 'center', fontWeight: 'bold' }}>
                          {item.quantity || 1}
                        </span>
                        <Button
                          icon="plus"
                          size="mini"
                          color="orange"
                          onClick={() => increaseQuantity(index)}
                          title="Aumentar cantidad"
                        />
                        <Button
                          icon="trash"
                          size="mini"
                          color="red"
                          onClick={() => removeFromCart(index)}
                          title="Eliminar producto"
                        />
                      </div>
                    </List.Content>
                    <List.Content>
                      <List.Header>{item.title}</List.Header>
                      <List.Description>
                        ${item.price.toLocaleString("es-CO")} × {item.quantity || 1} = ${((item.price || 0) * (item.quantity || 1)).toLocaleString("es-CO")}
                      </List.Description>
                    </List.Content>
                  </List.Item>
                ))}
              </List>
              
              <Divider />
              
              <Header as="h5" textAlign="center">
                Total: ${cartTotal.toLocaleString("es-CO")}
              </Header>
              
              <Button
                color="orange"
                fluid
                onClick={handleGoToContact}
                style={{ marginTop: "1em" }}
              >
                <Icon name="map marker alternate" />
                Ir a Contacto/Ubicación
              </Button>
              
              <Button
                color="red"
                fluid
                basic
                onClick={() => clearCart()}
                style={{ marginTop: "0.5em" }}
              >
                <Icon name="trash" />
                Limpiar Carrito
              </Button>
            </>
          ) : (
            <p>Carrito vacío</p>
          )}
        </Segment>
      }
      on="click"
      open={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      position="top right"
      style={{ maxWidth: "300px" }}
    />
  );
};

export default FloatingCart;
