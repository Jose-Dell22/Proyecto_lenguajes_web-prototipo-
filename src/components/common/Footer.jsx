import React from 'react';
import { Container, Grid, Header, Icon, Segment, Divider } from 'semantic-ui-react';
import { useApp } from '../../context/AppContext';
import { APP_CONFIG } from '../../config/constants';

const Footer = () => {
  const { config } = useApp();

  return (
    <Segment 
      inverted 
      color="orange" 
      style={{ 
        marginTop: '50px',
        background: 'linear-gradient(135deg, #ff8800 0%, #cc5500 100%)',
        boxShadow: '0 -5px 20px rgba(255, 136, 0, 0.3)',
        border: 'none',
        borderRadius: '0'
      }}
    >
      <Container>
        <Grid stackable>
          {/* Información del Restaurante */}
          <Grid.Column width={4}>
            <Header as="h3" inverted style={{ color: 'white', marginBottom: '15px' }}>
              <Icon name="fire" style={{ color: '#ffdd44' }} />
              {config.RESTAURANT.name}
            </Header>
            <p style={{ color: 'white', lineHeight: '1.6' }}>
              Tradición, fuego y sabor artesanal en {config.RESTAURANT.location}
            </p>
            <div style={{ marginTop: '15px' }}>
              <Icon name="star" style={{ color: '#ffdd44' }} />
              <Icon name="star" style={{ color: '#ffdd44' }} />
              <Icon name="star" style={{ color: '#ffdd44' }} />
              <Icon name="star" style={{ color: '#ffdd44' }} />
              <Icon name="star" style={{ color: '#ffdd44' }} />
              <span style={{ color: 'white', marginLeft: '8px' }}>4.9/5</span>
            </div>
          </Grid.Column>

          {/* Horarios */}
          <Grid.Column width={4}>
            <Header as="h4" inverted style={{ color: 'white', marginBottom: '15px' }}>
              <Icon name="clock" style={{ color: '#ffdd44' }} />
              Horarios de Atención
            </Header>
            <div style={{ color: 'white', lineHeight: '1.8' }}>
              {config.RESTAURANT.schedules.map((schedule, index) => (
                <p key={index}>
                  <strong>{schedule.day}:</strong> {schedule.hours}
                </p>
              ))}
            </div>
          </Grid.Column>

          {/* Contacto */}
          <Grid.Column width={4}>
            <Header as="h4" inverted style={{ color: 'white', marginBottom: '15px' }}>
              <Icon name="phone" style={{ color: '#ffdd44' }} />
              Contacto
            </Header>
            <div style={{ color: 'white', lineHeight: '1.8' }}>
              <p>
                <Icon name="phone" style={{ color: '#ffdd44' }} />
                {config.RESTAURANT.phone}
              </p>
              <p>
                <Icon name="mail" style={{ color: '#ffdd44' }} />
                {config.RESTAURANT.email}
              </p>
              <p>
                <Icon name="map marker" style={{ color: '#ffdd44' }} />
                {config.RESTAURANT.address}
              </p>
            </div>
          </Grid.Column>

          {/* Redes Sociales */}
          <Grid.Column width={4}>
            <Header as="h4" inverted style={{ color: 'white', marginBottom: '15px' }}>
              <Icon name="share alternate" style={{ color: '#ffdd44' }} />
              Síguenos
            </Header>
            <div style={{ marginBottom: '15px' }}>
              <Icon 
                name="facebook" 
                size="large" 
                style={{ color: '#ffdd44', marginRight: '10px', cursor: 'pointer' }}
                title="Facebook"
                onClick={() => window.open(config.RESTAURANT.social.facebook, '_blank')}
              />
              <Icon 
                name="instagram" 
                size="large" 
                style={{ color: '#ffdd44', marginRight: '10px', cursor: 'pointer' }}
                title="Instagram"
                onClick={() => window.open(config.RESTAURANT.social.instagram, '_blank')}
              />
              <Icon 
                name="whatsapp" 
                size="large" 
                style={{ color: '#ffdd44', marginRight: '10px', cursor: 'pointer' }}
                title="WhatsApp"
                onClick={() => window.open(config.RESTAURANT.social.whatsapp, '_blank')}
              />
            </div>
            <p style={{ color: 'white', fontSize: '0.9em' }}>
              © 2024 {config.RESTAURANT.name}. Todos los derechos reservados.
            </p>
          </Grid.Column>
        </Grid>

        <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }} />

        {/* Mensaje Final */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p style={{ color: 'white', fontSize: '1.1em', margin: '0' }}>
            <Icon name="heart" style={{ color: '#ff6b6b' }} />
            Hecho con amor para los amantes de la buena carne en {config.RESTAURANT.location}
            <Icon name="heart" style={{ color: '#ff6b6b' }} />
          </p>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9em', margin: '10px 0 0 0' }}>
            {config.RESTAURANT.neighborhood} • {config.RESTAURANT.location}
          </p>
        </div>
      </Container>
    </Segment>
  );
};

export default Footer;
