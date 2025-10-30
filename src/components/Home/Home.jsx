import React, { useState, useEffect } from "react";
import { Segment, Container, Header, Grid, Button, Divider, Card, Image, Icon, Loader } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import HeroSection from "../common/HeroSection";
import { APP_CONFIG } from "../../config/constants";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const { config, addToCart } = useApp();
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Cargar productos destacados
  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(APP_CONFIG.API.products);
        const data = await response.json();
        // Tomar solo los primeros 6 productos como destacados
        setFeaturedProducts(data.slice(0, 6));
      } catch (error) {
        console.error('Error al cargar productos destacados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  // 🔹 Botón de WhatsApp
  const handleWhatsAppClick = () => {
    window.open(
      `${config.RESTAURANT.social.whatsapp}?text=¡Hola!%20Quiero%20hacer%20un%20pedido`,
      "_blank"
    );
  };

  // 🔹 Botón que lleva al contacto
  const handleRappiClick = () => {
    navigate(config.ROUTES.CONTACT);
  };

  // 🔹 Agregar producto al carrito
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <>
      {/* Sección principal */}
        <HeroSection
        title={config.RESTAURANT.name}
          subtitle="El sabor auténtico del fuego"
          buttonText="Explora nuestro menú"
        backgroundImage="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        onButtonClick={() => navigate(config.ROUTES.PRODUCTS)}
      />

      {/* Sección de navegación llamativa */}
      <Segment vertical style={{ 
        background: 'linear-gradient(135deg, #ff7b00 0%, #ff4500 50%, #d35400 100%)',
        padding: '4em 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Efectos de fondo */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
        
        <Container>
          <Header as="h1" textAlign="center" inverted style={{ 
            fontSize: '3em',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            marginBottom: '0.5em'
          }}>
            <Icon name="fire" style={{ 
              color: '#ffeb3b'
            }} />
            Explora Nuestro Mundo
          </Header>
          
          <Header as="h3" textAlign="center" inverted style={{ 
            fontWeight: '300',
            marginBottom: '3em',
            opacity: 0.9,
            color: 'white'
          }}>
            Descubre la magia de nuestras carnes al barril
          </Header>

          <Grid stackable columns={4} textAlign="center">
            <Grid.Column>
              <div style={{
                transform: 'translateY(0)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
              onClick={() => navigate(config.ROUTES.PRODUCTS)}>
                <Card color="black" inverted raised style={{
                  background: 'linear-gradient(145deg, #1a1a1a, #2d2d2d)',
                  border: '2px solid #ff7b00',
                  boxShadow: '0 10px 30px rgba(255, 123, 0, 0.3)',
                  minHeight: '300px'
                }}>
                  <Card.Content style={{ padding: '2em' }}>
                    <Icon name="utensils" size="massive" color="orange"  className="home-navigation-icon" style={{
                      filter: 'drop-shadow(0 0 10px rgba(255, 123, 0, 0.5))'
                    }} />
                    <Card.Header style={{ 
                      fontSize: '1.5em',
                      color: '#ff7b00',
                      marginTop: '1em',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                    }}>
                      Nuestro Menú
                    </Card.Header>
                    <Card.Description style={{ 
                      fontSize: '1.1em',
                      marginTop: '1em',
                      lineHeight: '1.6'
                    }}>
                      Descubre nuestros mejores platillos preparados al barril con técnicas tradicionales
                    </Card.Description>
                    <Button 
                      color="orange" 
                      size="large"
                      onClick={() => navigate(config.ROUTES.PRODUCTS)}
                      style={{ 
                        marginTop: "2em",
                        background: 'linear-gradient(45deg, #ff7b00, #ff4500)',
                        boxShadow: '0 4px 15px rgba(255, 123, 0, 0.4)',
                      }}
                    >
                      <Icon name="arrow right" />
                      Ver Menú Completo
                    </Button>
                  </Card.Content>
                </Card>
              </div>
            </Grid.Column>

            <Grid.Column>
              <div style={{
                transform: 'translateY(0)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
              onClick={() => navigate(config.ROUTES.CONTACT)}>
                <Card color="black" inverted raised style={{
                  background: 'linear-gradient(145deg, #1a1a1a, #2d2d2d)',
                  border: '2px solid #ff7b00',
                  boxShadow: '0 10px 30px rgba(255, 123, 0, 0.3)',
                  minHeight: '300px'
                }}>
                  <Card.Content style={{ padding: '2em' }}>
                    <Icon name="map marker alternate" size="massive" color="orange" className="home-navigation-icon" style={{
                      filter: 'drop-shadow(0 0 10px rgba(255, 123, 0, 0.5))'
                    }} />
                    <Card.Header style={{ 
                      fontSize: '1.5em',
                      color: '#ff7b00',
                      marginTop: '1em',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                    }}>
                       Ubicación
                    </Card.Header>
                    <Card.Description style={{ 
                      fontSize: '1.1em',
                      marginTop: '1em',
                      lineHeight: '1.6'
                    }}>
                      Ven a visitarnos y vive la experiencia única de nuestras carnes al barril
                    </Card.Description>
                    <Button 
                      color="orange" 
                      size="large"
                      onClick={() => navigate(config.ROUTES.CONTACT)}
                      style={{ 
                        marginTop: "2em",
                        background: 'linear-gradient(45deg, #ff7b00, #ff4500)',
                        boxShadow: '0 4px 15px rgba(255, 123, 0, 0.4)',
                      }}
                    >
                      <Icon name="location arrow" />
                      Ver Ubicación
                    </Button>
                  </Card.Content>
                </Card>
              </div>
            </Grid.Column>

            <Grid.Column>
              <div style={{
                transform: 'translateY(0)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
              onClick={() => navigate(config.ROUTES.ABOUT)}>
                <Card color="black" inverted raised style={{
                  background: 'linear-gradient(145deg, #1a1a1a, #2d2d2d)',
                  border: '2px solid #ff7b00',
                  boxShadow: '0 10px 30px rgba(255, 123, 0, 0.3)',
                  minHeight: '300px'
                }}>
                  <Card.Content style={{ padding: '2em' }}>
                    <Icon name="users" size="massive" color="orange" className="home-navigation-icon" style={{
                      filter: 'drop-shadow(0 0 10px rgba(255, 123, 0, 0.5))'
                    }} />
                    <Card.Header style={{ 
                      fontSize: '1.5em',
                      color: '#ff7b00',
                      marginTop: '1em',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                    }}>
                      Sobre Nosotros
                    </Card.Header>
                    <Card.Description style={{ 
                      fontSize: '1.1em',
                      marginTop: '1em',
                      lineHeight: '1.6'
                    }}>
                      Conoce nuestra historia, tradición y el equipo que hace posible la magia
                    </Card.Description>
                    <Button 
                      color="orange" 
                      size="large"
                      onClick={() => navigate(config.ROUTES.ABOUT)}
                      style={{ 
                        marginTop: "2em",
                        background: 'linear-gradient(45deg, #ff7b00, #ff4500)',
                        boxShadow: '0 4px 15px rgba(255, 123, 0, 0.4)',
                      }}
                    >
                      <Icon name="info circle" />
                      Conocer Más
                    </Button>
                  </Card.Content>
                </Card>
              </div>
            </Grid.Column>

            <Grid.Column>
              <div style={{
                transform: 'translateY(0)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
              onClick={() => navigate(config.ROUTES.MENU_COMPONENT)}>
                <Card color="black" inverted raised style={{
                  background: 'linear-gradient(145deg, #1a1a1a, #2d2d2d)',
                  border: '2px solid #ff7b00',
                  boxShadow: '0 10px 30px rgba(255, 123, 0, 0.3)',
                  minHeight: '300px'
                }}>
                  <Card.Content style={{ padding: '2em' }}>
                    <Icon name="gem" size="massive" color="orange"   className="home-navigation-icon"  style={{
                      filter: 'drop-shadow(0 0 15px rgba(255, 123, 0, 0.8))',
                      transition: 'none'
                    }} />
                    <Card.Header style={{ 
                      fontSize: '1.5em',
                      color: '#ff7b00',
                      marginTop: '1em',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                    }}>
                      Especiales
                    </Card.Header>
                    <Card.Description style={{ 
                      fontSize: '1.1em',
                      marginTop: '1em',
                      lineHeight: '1.6'
                    }}>
                      Nuestros mejores platillos y especialidades que no puedes dejar de probar
                    </Card.Description>
                    <Button 
                      color="orange" 
                      size="large"
                      onClick={() => navigate(config.ROUTES.MENU_COMPONENT)}
                      style={{ 
                        marginTop: "2em",
                        background: 'linear-gradient(45deg, #ff7b00, #ff4500)',
                        boxShadow: '0 4px 15px rgba(255, 123, 0, 0.4)',
                      }}
                    >
                      <Icon name="heart" />
                      Ver Especiales
                    </Button>
                  </Card.Content>
                </Card>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>

      {/* Sección de productos destacados */}
      <Segment vertical style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Imagen de fondo de alguien picando carnes */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 0.1,
          zIndex: 0
        }} />
        
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Header as="h2" textAlign="center" color="orange" style={{ marginBottom: '1em' }}>
            <Icon name="star" />
            Productos Destacados
          </Header>
          <p style={{ textAlign: "center", marginBottom: "2em", fontSize: "1.1em", color: '#333' }}>
            Los favoritos de nuestros clientes
          </p>

          {loading ? (
            <div style={{ textAlign: "center", padding: "2em" }}>
              <Loader active inline="centered" />
              <p>Cargando productos destacados...</p>
            </div>
          ) : (
            <Card.Group centered itemsPerRow={3} stackable style={{ marginTop: "2em" }}>
              {featuredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="transition-normal"
                  style={{
                    borderRadius: "18px",
                    background: config.COLORS.cardBackground,
                    boxShadow: "0 6px 15px rgba(255, 136, 0, 0.2)",
                    border: 'none'
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    style={{ height: "180px", objectFit: "contain", padding: "1em" }}
                  />
                  <Card.Content textAlign="center">
                    <Card.Header className="text-primary" style={{ color: config.COLORS.primary }}>
                      {product.title}
                    </Card.Header>
                    <Card.Description style={{ fontSize: "0.9em", color: "#444" }}>
                      {product.description.slice(0, 80)}...
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra textAlign="center">
                    <strong style={{ color: "#d35400" }}>
                      ${product.price.toLocaleString("es-CO", { minimumFractionDigits: 0 })}
                    </strong>
                    <Button
                      color="orange"
                      circular
                      icon
                      onClick={() => handleAddToCart(product)}
                      style={{ marginLeft: "1em" }}
                    >
                      <Icon name="plus" />
                    </Button>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          )}
          <div style={{ textAlign: "center", marginTop: "2em" }}>
            <Button 
              size="large" 
              color="orange"
              onClick={() => navigate(config.ROUTES.PRODUCTS)}
              style={{
                background: 'linear-gradient(45deg, #ff7b00, #ff4500)',
                boxShadow: '0 4px 15px rgba(255, 123, 0, 0.4)'
              }}
            >
              Ver Todos los Productos
            </Button>
      </div>
        </Container>
      </Segment>

      {/* Sección de presentación */}
      <Segment vertical inverted>
        <Container text textAlign="center">
          <Header as="h2" inverted>
            <Icon name="fire" />
            Tradición, fuego y sabor artesanal
          </Header>
          <p style={{ fontSize: "1.2em", lineHeight: "1.6em" }}>
            En <b>{config.RESTAURANT.name}</b> combinamos el arte del fuego con la mejor
            selección de cortes para ofrecerte una experiencia única.
            ¡Ven a probar el sabor que nos hace auténticos!
          </p>

          <div style={{ marginTop: "3em" }}>
            <Button
              size="large"
              color="orange"
              onClick={handleWhatsAppClick}
              style={{ margin: "0.5em" }}
            >
              <Icon name="whatsapp" />
              WhatsApp
            </Button>

            <Button
              size="large"
              color="orange"
              onClick={handleRappiClick}
              style={{ margin: "0.5em" }}
            >
              <Icon name="shopping cart" />
              ¡Pide de una vez!
            </Button>
          </div>
        </Container>
      </Segment>

      {/* Separador */}
      <Divider />

      {/* Sección de reseñas */}
      <Segment vertical inverted>
        <Container>
          <Header as="h3" textAlign="center" color="orange">
            <Icon name="quote left" />
            Lo que dicen nuestros clientes
          </Header>

          <Grid stackable columns={3} textAlign="center" style={{ marginTop: "2em" }}>
            {[
              {
                text: "Llevo 3 años viniendo aquí y nunca me decepcionan. Las costillas están perfectas, jugosas por dentro y crujientes por fuera. El ambiente es acogedor y el personal súper atento.",
                author: "María Elena Rodríguez",
                rating: 5,
                date: "Hace 2 semanas"
              },
              {
                text: "Increíble experiencia gastronómica. La carne al barril tiene un sabor ahumado único que no encuentras en ningún otro lugar. Mi familia y yo venimos cada domingo. ¡Los niños aman las papas!",
                author: "Carlos Mendoza",
                rating: 5,
                date: "Hace 1 mes"
              },
              {
                text: "Primera vez que vengo y quedé impresionado. La calidad de la carne es excepcional y el precio muy justo. El chef se tomó el tiempo de explicarme el proceso. Definitivamente regresaré.",
                author: "Ana Sofía López",
                rating: 5,
                date: "Hace 3 días"
              },
            ].map((item, index) => (
              <Grid.Column key={index}>
                <Card color="orange" raised style={{ minHeight: '280px' }}>
                  <Card.Content textAlign="center" style={{ padding: '2em' }}>
                    <Icon name="quote left" size="huge" color="orange" />
                    <p style={{ 
                      fontStyle: "italic", 
                      marginBottom: "1em", 
                      fontSize: "1.1em",
                      lineHeight: "1.6",
                      minHeight: "120px"
                    }}>
                      "{item.text}"
                    </p>
                    
                    {/* Estrellas */}
                    <div style={{ marginBottom: "0.5em" }}>
                      {[...Array(item.rating)].map((_, i) => (
                        <Icon key={i} name="star" color="yellow" />
                      ))}
                    </div>
                    
                    <strong style={{ color: "#f46a1f", fontSize: "1.1em" }}>
                      - {item.author}
                    </strong>
                    
                    <p style={{ 
                      color: "#666", 
                      fontSize: "0.9em", 
                      marginTop: "0.5em",
                      fontStyle: "italic"
                    }}>
                      {item.date}
                    </p>
                  </Card.Content>
                </Card>
              </Grid.Column>
            ))}
          </Grid>
        </Container>
      </Segment>
    </>
  );
};

export default Home;
