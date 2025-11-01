import React from "react";
import { Button, Header, Segment } from "semantic-ui-react";

const HeroSection = ({ title, subtitle, buttonText, backgroundImage, onButtonClick }) => {
  return (
    <Segment
      textAlign="center"
      style={{
        position: "relative",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "10em 0",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* 🔹 Capa oscura sobre la imagen */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)", 
          zIndex: 1,
        }}
      ></div>

      {/* 🔹 Contenido principal (título, subtítulo, botón) */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Header
          as="h1"
          style={{
            fontSize: "4em",
            fontWeight: "bold",
            color: "white",
            textShadow: "1px 1px 20px rgba(149, 172, 190, 0.5)",
          }}
        >
          {title}
        </Header>

        <p
          style={{
            fontSize: "1.5em",
            marginBottom: "1.5em",
            color: "white",
            textShadow: "1px 1px 20px rgba(149, 172, 190, 0.5)",
          }}
        >
          {subtitle}
        </p>

        {/* 🔹 Botón con brillo animado */}
        <Button
          size="large"
          color="orange"
          onClick={onButtonClick}
          style={{
            marginTop: "1em",
            padding: "0.8em 2em",
            background: "linear-gradient(45deg, #ff8800, #ff4500)",
            boxShadow: "0 0 18px rgba(255, 160, 0, 0.9)",
            textShadow: "0 0 5px rgba(0,0,0,0.4)",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 0 45px rgba(255, 180, 0, 1)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 0 25px rgba(255, 160, 0, 0.9)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          {buttonText}
        </Button>
      </div>
    </Segment>
  );
};

export default HeroSection;
