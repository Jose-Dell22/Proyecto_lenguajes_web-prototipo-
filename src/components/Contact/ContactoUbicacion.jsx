import React from 'react'
import './ContactoUbicacion.css'
import {
  Container,
  Header,
  Grid,
  Segment,
  Form,
  Input,
  TextArea,
  Button,
  Icon,
  Divider,
  List,
  Message,
  Embed,
} from 'semantic-ui-react'
import { useApp } from '../../context/AppContext'
import { useForm } from '../../hooks/useForm'
import { APP_CONFIG, MESSAGES, ICONS } from '../../config/constants'

export default function ContactoUbicacion() {
  const {
    config,
    contactForm,
    updateContactForm,
    resetContactForm,
    cart,
    getCartTotal,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
  } = useApp()

  const { values, errors, isSubmitting, handleChange, handleSubmit, reset } = useForm()

  const onSubmit = async (formData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 700)) // Simulación de envío
      updateContactForm({
        successMessage: MESSAGES.contactSuccess,
        data: { nombre: '', email: '', mensaje: '' },
      })
      reset()
    } catch (error) {
      throw new Error(MESSAGES.contactError)
    }
  }

  return (
    <Container className="contact-page">
      <Header as="h1" textAlign="center" className="contact-title">
        <Icon name={ICONS.phone} /> Contacto
        <Header.Subheader>
          ¿Reservas, dudas o sugerencias? Escríbenos.
        </Header.Subheader>
      </Header>

      {/* Mostrar carrito si hay productos */}
      {cart.length > 0 && (
        <Segment color="orange" style={{ marginBottom: '2em' }}>
          <Header as="h3" color="orange">
            <Icon name="shopping cart" />
            Productos en tu Carrito
          </Header>
          <List divided relaxed>
            {cart.map((item, index) => (
              <List.Item key={`${item.id}-${index}`}>
                <List.Content floated="right">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Button
                      icon="minus"
                      size="mini"
                      color="orange"
                      onClick={() => decreaseQuantity(index)}
                      title="Disminuir cantidad"
                      disabled={item.quantity <= 1}
                    />
                    <span style={{ minWidth: '20px', textAlign: 'center', fontWeight: 'bold' }}>
                      {item.quantity || 1}
                    </span>
                    <Button
                      icon="plus"
                      size="mini"
                      color="orange"
                      onClick={() => increaseQuantity(index)}
                      title="Aumentar cantidad"
                    />
                    <Button
                      icon="trash"
                      size="mini"
                      color="red"
                      onClick={() => removeFromCart(index)}
                      title="Eliminar producto"
                    />
                  </div>
                </List.Content>
                <List.Content>
                  <List.Header>{item.title}</List.Header>
                  <List.Description>
                    Precio: ${item.price.toLocaleString('es-CO')} × {item.quantity || 1} = $
                    {((item.price || 0) * (item.quantity || 1)).toLocaleString('es-CO')}
                  </List.Description>
                </List.Content>
              </List.Item>
            ))}
          </List>
          <Divider />
          <Header as="h4" textAlign="center">
            Total del Pedido: ${getCartTotal().toLocaleString('es-CO')}
          </Header>
          <div style={{ textAlign: 'center', marginTop: '1em' }}>
            <Button color="red" basic onClick={() => clearCart()} size="small">
              <Icon name="trash" />
              Limpiar Todo el Carrito
            </Button>
          </div>
        </Segment>
      )}

      {/* Tarjeta principal (SIN 'placeholder' para evitar centrado) */}
      <Segment raised className="contact-card">
        {/* Grid alineado arriba y con clase para CSS */}
        <Grid
          stackable
          columns={2}
          className="contact-grid"
          style={{ alignItems: 'flex-start' }}
        >
          {/* Columna izquierda: Formulario */}
          <Grid.Column
            computer={8}
            tablet={16}
            mobile={16}
            className="form-col"
            textAlign="left"
            verticalAlign="top"
          >
            <Header as="h3" className="section-title">Escríbenos</Header>

            <Form
              size="large"
              className="contact-form"
              onSubmit={(e) => handleSubmit(e, onSubmit)}
              error={!!errors.general}
              success={!!contactForm.successMessage}
              style={{ textAlign: 'left', width: '100%', maxWidth: 'none', margin: 0 }}
            >
              {errors.general && (
                <Message error icon>
                  <Icon name={ICONS.warning} />
                  <Message.Content>
                    <Message.Header>Ups…</Message.Header>
                    {errors.general}
                  </Message.Content>
                </Message>
              )}

              {contactForm.successMessage && (
                <Message success icon>
                  <Icon name={ICONS.check} />
                  <Message.Content>
                    <Message.Header>Mensaje enviado</Message.Header>
                    {contactForm.successMessage}
                  </Message.Content>
                </Message>
              )}

              <Form.Field
                control={Input}
                label="Nombre"
                placeholder="Tu nombre"
                name="nombre"
                value={values.nombre || ''}
                onChange={handleChange}
                error={errors.nombre ? { content: errors.nombre } : null}
                required
              />

              <Form.Field
                control={Input}
                type="email"
                label="Correo"
                placeholder="tucorreo@ejemplo.com"
                name="email"
                value={values.email || ''}
                onChange={handleChange}
                error={errors.email ? { content: errors.email } : null}
                required
              />

              <Form.Field
                control={TextArea}
                label="Mensaje"
                placeholder="¿En qué podemos ayudarte?"
                name="mensaje"
                value={values.mensaje || ''}
                onChange={handleChange}
                error={errors.mensaje ? { content: errors.mensaje } : null}
                rows={6}
                required
              />

              <Button
                type="submit"
                primary
                fluid
                size="large"
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                <Icon name={ICONS.send} /> Enviar
              </Button>
            </Form>

            <Divider hidden />

            <Header as="h4" className="section-subtitle">También por aquí</Header>
            <div className="contact-actions">
              <Button
                as="a"
                href={`tel:${config.RESTAURANT.phone.replace(/\s|-/g, '')}`}
                basic
                icon
                labelPosition="left"
              >
                <Icon name={ICONS.phone} /> {config.RESTAURANT.phone}
              </Button>
              <Button
                as="a"
                href={`mailto:${config.RESTAURANT.email}`}
                basic
                icon
                labelPosition="left"
              >
                <Icon name={ICONS.email} /> {config.RESTAURANT.email}
              </Button>
            </div>

            <Divider hidden />

            <div className="social-icons">
              <a
                href={config.RESTAURANT.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Icon name={ICONS.instagram} size="big" />
              </a>
              <a
                href={config.RESTAURANT.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <Icon name={ICONS.facebook} size="big" />
              </a>
              <a
                href={config.RESTAURANT.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <Icon name={ICONS.whatsapp} size="big" />
              </a>
            </div>
          </Grid.Column>

          {/* Columna derecha: Info & Mapa */}
          <Grid.Column
            computer={8}
            tablet={16}
            mobile={16}
            className="info-col"
            textAlign="left"
            verticalAlign="top"
          >
            <Header as="h3" className="section-title">Visítanos</Header>

            <Segment tertiary className="info-card">
              <List relaxed>
                <List.Item>
                  <Icon name={ICONS.map} size="large" />
                  <List.Content>
                    <List.Header>
                      {config.RESTAURANT.name} – {config.RESTAURANT.location}
                    </List.Header>
                    <List.Description>
                      {config.RESTAURANT.address} – {config.RESTAURANT.neighborhood}
                    </List.Description>
                    <a
                      href={config.RESTAURANT.maps.directionsUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon name={ICONS.direction} /> Cómo llegar
                    </a>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <Icon name={ICONS.clock} size="large" />
                  <List.Content>
                    <List.Header>Horarios</List.Header>
                    <List.List>
                      {config.RESTAURANT.schedules.map((schedule) => (
                        <List.Item key={schedule.day}>
                          <strong>{schedule.day}:</strong> {schedule.hours}
                        </List.Item>
                      ))}
                    </List.List>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <Icon name={ICONS.phone} size="large" />
                  <List.Content>
                    <List.Header>Reservas</List.Header>
                    <a href={`tel:${config.RESTAURANT.phone.replace(/\s|-/g, '')}`}>
                      {config.RESTAURANT.phone}
                    </a>
                  </List.Content>
                </List.Item>
              </List>
            </Segment>

            <div className="map-wrap">
              <Embed
                active
                iframe={{
                  title: 'Mapa del restaurante',
                  src: config.RESTAURANT.maps.embedUrl,
                  allowFullScreen: true,
                  loading: 'lazy',
                  referrerPolicy: 'no-referrer-when-downgrade',
                }}
              />
            </div>
          </Grid.Column>
        </Grid>
      </Segment>

      <Divider hidden />

      <Segment basic textAlign="center">
        <Header as="h5" disabled>
          <Icon name={ICONS.shield} />
          {MESSAGES.privacy}
        </Header>
      </Segment>
    </Container>
  )
}
