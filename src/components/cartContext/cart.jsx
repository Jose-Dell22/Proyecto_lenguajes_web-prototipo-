import React from "react";
import { Container, Header, Table, Button, Icon, Message } from "semantic-ui-react";
import { useCart } from "../../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Container textAlign="left" className="fade-in-section visible" style={{ marginTop: "6em" }}>
      <Header as="h2" color="orange" textAlign="center" className="fade-in-section visible fade-in-delay-1">
        🛒 Domicilios / Carrito
      </Header>

      {cart.length === 0 ? (
        <Message warning>
          <Icon name="info circle" />
          Tu carrito está vacío. Agrega productos desde la pestaña <b>Productos</b>.
        </Message>
      ) : (
        <>
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Producto</Table.HeaderCell>
                <Table.HeaderCell>Precio</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {cart.map((item, index) => (
                <Table.Row key={index}>
                  <Table.Cell>
                    <strong>{item.title}</strong>
                  </Table.Cell>
                  <Table.Cell>${item.price.toLocaleString("es-CO", { minimumFractionDigits: 0 })}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell textAlign="right">Total:</Table.HeaderCell>
                <Table.HeaderCell>
                  <strong>${total.toLocaleString("es-CO", { minimumFractionDigits: 0 })}</strong>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>

          <div style={{ textAlign: "center", marginTop: "2em" }}>
            <Button color="red" icon labelPosition="left" className="pulse-btn" onClick={clearCart}>
              <Icon name="trash" />
              Vaciar carrito
            </Button>

            <Button
              color="orange"
              icon
              labelPosition="right"
              className="pulse-btn"
              onClick={() => alert("Pedido enviado")}
            >
              Confirmar pedido
              <Icon name="check circle" />
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;
