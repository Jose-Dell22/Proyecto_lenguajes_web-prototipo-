import React, { useEffect } from "react";
import { Segment, Container, Header, Grid, Button, Divider } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import HeroSection from "../common/HeroSection";
import { styles } from "./Home_styles";
import "../../animations.css";

const Home = () => {
  const navigate = useNavigate();

  // 🔹 Botón de WhatsApp
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/573001112233?text=¡Hola!%20Quiero%20hacer%20un%20pedido%20🍖",
      "_blank"
    );
  };

  // 🔹 Botón que lleva al contacto
  const handleRappiClick = () => {
    navigate("/contacto"); // ✅ redirección correcta dentro del router
  };

  // 🔹 Animación de aparición
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-section");
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("visible");
      }, 300 * i);
    });
  }, []);

  return (
    <>
      {/* Sección principal */}
      <div className="fade-in-section fade-in-delay-1">
        <HeroSection
          title="Carnes al Barril"
          subtitle="El sabor auténtico del fuego 🔥"
          buttonText="Explora nuestro menú"
          backgroundImage="/logo.png"
          onButtonClick={() => (window.location.href = "/products")}
          buttonClass="pulse-btn"
        />
      </div>

      {/* Sección de presentación */}
      <Segment
        vertical
        style={styles.darkSection}
        className="fade-in-section fade-in-delay-2"
      >
        <Container text textAlign="center">
          <Header as="h2" style={styles.headerLight}>
            Tradición, fuego y sabor artesanal
          </Header>
          <p style={styles.textLight}>
            En <b>Carnes al Barril</b> combinamos el arte del fuego con la mejor
            selección de cortes para ofrecerte una experiencia única.
            ¡Ven a probar el sabor que nos hace auténticos!
          </p>

          <div style={{ marginTop: "3em" }}>
            <Button
              size="large"
              className="pulse-btn"
              style={styles.orangeButton}
              onClick={handleWhatsAppClick}
            >
              WhatsApp
            </Button>

            <Button
              size="large"
              className="pulse-btn"
              style={styles.orangeButton}
              onClick={handleRappiClick} // ✅ ahora navega correctamente a /contacto
            >
              ¡Pide de una vez!
            </Button>
          </div>
        </Container>
      </Segment>

      {/* Separador */}
      <Divider
        style={styles.whiteDivider}
        className="fade-in-section fade-in-delay-3"
      />

      {/* Sección de reseñas */}
      <Segment
        vertical
        style={styles.reviewSection}
        className="fade-in-section fade-in-delay-3"
      >
        <Container>
          <Header as="h3" textAlign="center" style={styles.headerOrange}>
            Lo que dicen nuestros clientes
          </Header>

          <Grid
            stackable
            columns={3}
            textAlign="center"
            style={{ marginTop: "2em" }}
          >
            {[
              {
                text: "Las mejores costillas que he probado, ¡100% recomendado!",
                author: "Andrés G.",
              },
              {
                text: "Ambiente familiar y comida espectacular. ¡Volveré pronto!",
                author: "Laura P.",
              },
              {
                text: "Sabor ahumado increíble, atención excelente.",
                author: "Carlos T.",
              },
            ].map((item, index) => (
              <Grid.Column
                key={index}
                className="card-hover fade-in-section fade-in-delay-3"
                style={styles.reviewCard}
              >
                <p style={styles.reviewText}>"{item.text}"</p>
                <strong style={styles.reviewAuthor}>- {item.author}</strong>
              </Grid.Column>
            ))}
          </Grid>
        </Container>
      </Segment>
    </>
  );
};

export default Home;
