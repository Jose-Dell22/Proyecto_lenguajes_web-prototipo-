import React from "react";
import { Container, Header, Segment, Grid, Card, Button, Divider, Icon } from "semantic-ui-react";
import { useApp } from "../../context/AppContext";
import { Link } from "react-router-dom";
export default function AboutUs() {
  const { config } = useApp();

  return (
    <>
      {/* Hero Section */}
      <Segment textAlign="center" inverted color="orange" style={{ padding: "6em 0",    background: "linear-gradient(135deg, #ff7b00 0%, #ff4500 50%, #d35400 100%)",color: "white",
    borderRadius: "0 0 1em 1em", }}>
        <Header as="h1" size="huge" inverted>
          <Icon name="fire" />
          {config.RESTAURANT.name}
        </Header>
        <Header as="h3" inverted>
          Una tradición de sabor, pasión y autenticidad
        </Header>
      </Segment>

      <Container>
        {/* Nuestra Historia */}
        <Segment vertical>
          <Header as="h2" textAlign="center" color="orange">
            <Icon name="history" />
            Nuestra Historia
          </Header>
          <Divider />
          <Segment raised>
            <p style={{ fontSize: "1.2em", lineHeight: "1.8em", textAlign: "center", margin: "2em 0" }}>
              Fundado en 2010, <strong>{config.RESTAURANT.name}</strong> nació de la pasión por rescatar la tradición de cocinar carnes 
              a la manera más auténtica. Lo que comenzó como un pequeño emprendimiento familiar se ha convertido 
              en un referente gastronómico, reconocido por la calidad excepcional de nuestras carnes.
            </p>
            <p style={{ fontSize: "1.2em", lineHeight: "1.8em", textAlign: "center", margin: "2em 0" }}>
              Durante 10 años, hemos mantenido nuestro compromiso con la excelencia, seleccionando personalmente 
              cada corte y utilizando técnicas tradicionales que realzan el sabor natural de la carne.
            </p>
          </Segment>
          <Divider />
        </Segment>

        {/* Estadísticas */}
        <Segment vertical inverted>
          <Header as="h2" textAlign="center" inverted>
            <Icon name="chart line" />
            Nuestros Números
          </Header>
          <Grid columns={4} stackable textAlign="center">
            <Grid.Column>
              <Card color="orange">
                <Card.Content>
                  <Header as="h2" color="orange">15+</Header>
                  <Card.Description>Años de Tradición</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card color="orange">
                <Card.Content>
                  <Header as="h2" color="orange">1000+</Header>
                  <Card.Description>Clientes Diarios</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card color="orange">
                <Card.Content>
                  <Header as="h2" color="orange">50+</Header>
                  <Card.Description>Cortes Premium</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card color="orange">
                <Card.Content>
                  <Header as="h2" color="orange">100%</Header>
                  <Card.Description>Satisfacción</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
        </Segment>

        {/* Nuestros Valores */}
        <Segment vertical>
          <Header as="h2" textAlign="center" color="orange">
            <Icon name="heart" />
            Nuestros Valores
          </Header>
          <Grid columns={3} stackable>
            <Grid.Column>
              <Card color="orange" raised>
                <Card.Content textAlign="center">
                  <Icon name="star" size="huge" color="orange" />
                  <Card.Header>Calidad Premium</Card.Header>
                  <Card.Description>
                    Solo utilizamos las mejores carnes, seleccionadas cuidadosamente y preparadas al barril.
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card color="orange" raised>
                <Card.Content textAlign="center">
                  <Icon name="fire" size="huge" color="orange" />
                  <Card.Header>Tradición y Pasión</Card.Header>
                  <Card.Description>
                    Cada plato refleja nuestro compromiso con la tradición culinaria y la pasión por ofrecer experiencias memorables.
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card color="orange" raised>
                <Card.Content textAlign="center">
                  <Icon name="users" size="huge" color="orange" />
                  <Card.Header>Experiencia Auténtica</Card.Header>
                  <Card.Description>
                    Nos dedicamos a crear un ambiente acogedor donde cada cliente disfruta de la verdadera esencia de las carnes al barril.
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
        </Segment>

        {/* Nuestro Equipo */}
        <Segment vertical inverted>
          <Header as="h2" textAlign="center" inverted>
            <Icon name="users" />
            Nuestro Equipo
          </Header>
          <p style={{ fontSize: "1.2em", lineHeight: "1.8em", textAlign: "center", margin: "2em 0" }}>
            Un equipo de expertos apasionados por el arte de cocinar carnes al barril. Cada miembro trae 
            años de experiencia y dedicación a la excelencia culinaria.
          </p>
          <Grid columns={4} stackable textAlign="center">
            <Grid.Column>
              <Card color="orange" raised>
                <Card.Content textAlign="center">
                  <Icon name="user" size="huge" color="orange" />
                  <Card.Header>Jose Dell</Card.Header>
                  <Card.Meta>Propietario & Chef</Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card color="orange" raised>
                <Card.Content textAlign="center">
                  <Icon name="user" size="huge" color="orange" />
                  <Card.Header>Santiago Perdomo</Card.Header>
                  <Card.Meta>Chef Parrillero</Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card color="orange" raised>
                <Card.Content textAlign="center">
                  <Icon name="user" size="huge" color="orange" />
                  <Card.Header>Miguel Cordoba</Card.Header>
                  <Card.Meta>Gerente Restaurante</Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card color="orange" raised>
                <Card.Content textAlign="center">
                  <Icon name="user" size="huge" color="orange" />
                  <Card.Header>David Roa</Card.Header>
                  <Card.Meta>Chef Asistente</Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
        </Segment>

        {/* CTA Section */}
        <Segment vertical color="orange" textAlign="center">
          <Header as="h2" inverted>
            <Icon name="calendar" />
            ¿Quieres Visitarnos?
          </Header>
          <p style={{ fontSize: "1.2em", lineHeight: "1.8em", margin: "2em 0" }}>
            Ven y vive la experiencia única de nuestras carnes al barril. Te esperamos con la mejor calidad 
            y la más cálida bienvenida.
          </p>
     <Button as={Link} to="/contacto" size="large" color="black" inverted>    
            <Icon name="calendar" />
            Hacer Reserva
          </Button>
        </Segment>
      </Container>
    </>
  );
}
