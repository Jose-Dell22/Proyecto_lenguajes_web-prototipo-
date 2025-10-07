import React from "react";
import { Button, Header } from "semantic-ui-react";
import "../../animations.css"; 

const HeroSection = ({ title, subtitle, buttonText, backgroundImage, onButtonClick }) => {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "10em 0",
    textAlign: "center",
    color: "white",
    position: "relative",
  };

  return (
    <div style={sectionStyle} className="fade-in-section visible">
      <div className="fade-in-section fade-in-delay-1">
        <Header as="h1" style={{ fontSize: "4em", fontWeight: "bold", color: "white" }}>
          {title}
        </Header>
      </div>

      <div className="fade-in-section fade-in-delay-2">
        <p style={{ fontSize: "1.5em", marginBottom: "1em", color: "white" }}>
          {subtitle}
        </p>
      </div>

      <div className="fade-in-section fade-in-delay-3">
        <Button
          size="large"
          className="pulse-btn fade-in-section fade-in-delay-3"
          color="orange"
          onClick={onButtonClick}
          style={{
            backgroundColor: "#ff6a1f",
            color: "white",
            fontWeight: "bold",
            marginTop: "1em",
          }}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
