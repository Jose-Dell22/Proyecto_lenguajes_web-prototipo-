import React from "react";
import { Button, Header, Segment } from "semantic-ui-react";

const HeroSection = ({ title, subtitle, buttonText, backgroundImage, onButtonClick }) => {
  return (
    <Segment
      textAlign="center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "10em 0",
        color: "white",
        position: "relative",
      }}
    >
      <Header as="h1" style={{ fontSize: "4em", fontWeight: "bold", color: "white" }}>
        {title}
      </Header>

      <p style={{ fontSize: "1.5em", marginBottom: "1em", color: "white" }}>
        {subtitle}
      </p>

      <Button
        size="large"
        color="orange"
        onClick={onButtonClick}
        style={{ marginTop: "1em" }}
      >
        {buttonText}
      </Button>
    </Segment>
  );
};

export default HeroSection;
