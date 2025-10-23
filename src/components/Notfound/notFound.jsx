import React from "react";
import { Container, Header, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <Container textAlign="center">
        <Header as="h1" icon className="notfound-header">
          <Icon name="warning sign" color="orange" />
          Error 404
        </Header>

        <Header.Subheader className="notfound-subheader">
          Ostras, se nos quemó el asado tío
        </Header.Subheader>

        <Button as={Link} to="/" color="orange" size="large" className="back-button">
          <Icon name="arrow left" /> Volver al inicio
        </Button>
      </Container>
    </div>
  );
};

export default NotFound;
