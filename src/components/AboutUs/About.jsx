import React from "react";
import "./Aboutstyle.css"; 

export default function AboutUs() {
  return (
    <div className="about-container">
      <div className="hero">
        <h1 className="hero-title">Carnes al Barril</h1>
        <p className="hero-subtitle">Una tradición de sabor, pasión y autenticidad</p>
    </div>

      <div className="content-wrapper">
        <section className="section dark-section">
          <h2 className="section-title">Nuestra Historia</h2>
          <div className="divider"></div>
          <p className="description">
            Fundado en 2010, Carnes al Barril nació de la pasión por rescatar la tradición de cocinar carnes 
            a la manera más auténtica. Lo que comenzó como un pequeño emprendimiento familiar se ha convertido 
            en un referente gastronómico, reconocido por la calidad excepcional de nuestras carnes.
          </p>
          <p className="description">
            Durante más de una década, hemos mantenido nuestro compromiso con la excelencia, seleccionando personalmente 
            cada corte y utilizando técnicas tradicionales que realzan el sabor natural de la carne.
          </p>
          <div className="divider"></div>
        </section>

        <section>
          <div className="stats-container">
            <div>
              <div className="stat-number">15+</div>
              <div className="stat-label">Años de Tradición</div>
            </div>
            <div>
              <div className="stat-number">1000+</div>
              <div className="stat-label">Clientes Diarios</div>
            </div>
            <div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Cortes Premium</div>
            </div>
            <div>
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfacción</div>
            </div>
          </div>
        </section>

        <section className="section dark-section">
          <h2 className="section-title">Nuestros Valores</h2>
          <div className="values-container">
            <div className="value-card">
              <h3 className="value-title">Calidad Premium</h3>
              <p className="value-text">
                Solo utilizamos las mejores carnes, seleccionadas cuidadosamente y preparadas al barril con técnicas tradicionales.
              </p>
            </div>
            <div className="value-card">
              <h3 className="value-title">Tradición y Pasión</h3>
              <p className="value-text">
                Cada plato refleja nuestro compromiso con la tradición culinaria y la pasión por ofrecer experiencias memorables.
              </p>
            </div>
            <div className="value-card">
              <h3 className="value-title">Experiencia Auténtica</h3>
              <p className="value-text">
                Nos dedicamos a crear un ambiente acogedor donde cada cliente disfruta de la verdadera esencia de las carnes al barril.
              </p>
            </div>
          </div>
        </section>

        <section className="section dark-section">
          <h2 className="section-title">Nuestro Equipo</h2>
          <p className="description">
            Un equipo de expertos apasionados por el arte de cocinar carnes al barril. Cada miembro trae 
            años de experiencia y dedicación a la excelencia culinaria.
          </p>
          <div className="team-container">
            <div className="team-member">
              <div className="avatar">JD</div>
              <h3 className="member-name">Jose Dell</h3>
              <p className="member-role">Propietario & Chef</p>
            </div>
            <div className="team-member">
              <div className="avatar">SP</div>
              <h3 className="member-name">Santiago Perdomo</h3>
              <p className="member-role">Chef Parrillero</p>
            </div>
            <div className="team-member">
              <div className="avatar">MC</div>
              <h3 className="member-name">Miguel Cordoba</h3>
              <p className="member-role">Gerente Restaurante</p>
            </div>
            <div className="team-member">
              <div className="avatar">DR</div>
              <h3 className="member-name">David Roa</h3>
              <p className="member-role">Chef Asistente</p>
            </div>
          </div>
        </section>

        <section className="section dark-section cta-section">
          <h2 className="section-title">¿Quieres Visitarnos?</h2>
          <p className="description">
            Ven y vive la experiencia única de nuestras carnes al barril. Te esperamos con la mejor calidad 
            y la más cálida bienvenida.
          </p>
          <button className="cta-button">Hacer Reserva</button>
        </section>
      </div>
    </div>
  );
}
