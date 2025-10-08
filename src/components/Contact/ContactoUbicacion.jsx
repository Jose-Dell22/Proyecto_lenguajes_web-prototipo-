import React, { useState } from 'react'
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

export default function ContactoUbicacion() {
  // —— Config editable —— 
  const INFO = {
    nombre: 'Carnes al Barril – Neiva',
    direccion: 'Cra. 1 # 23-45, Neiva, Huila, Colombia',
    barrio: 'Barrio Centro',
    telefono: '+57 318 123 4567',
    email: 'contacto@carnesalbarril.com',
    instagram: 'https://www.instagram.com/tu_restaurante',
    facebook: 'https://www.facebook.com/tu_restaurante',
    whatsapp: 'https://wa.me/573181234567',
    horarios: [
      { dia: 'Lun – Jue', horas: '12:00 m – 10:00 p. m.' },
      { dia: 'Vie – Sáb', horas: '12:00 m – 11:30 p. m.' },
      { dia: 'Dom', horas: '12:00 m – 9:00 p. m.' },
    ],
    mapsEmbedUrl:
      'https://www.google.com/maps?q=Carnes%20al%20Barril%20Neiva%20Huila&z=15&output=embed',
    mapsDirections:
      'https://www.google.com/maps/dir/?api=1&destination=Carnes%20al%20Barril%20Neiva%20Huila',
  }

  // —— Estado del formulario —— 
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' })
  const [errors, setErrors] = useState({})
  const [enviando, setEnviando] = useState(false)
  const [okMsg, setOkMsg] = useState('')

  const handleChange = (e, { name, value }) => {
    setFormData((d) => ({ ...d, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const validar = () => {
    const er = {}
    if (!formData.nombre.trim()) er.nombre = 'Ingresa tu nombre.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(formData.email)) er.email = 'Correo no válido.'
    if (formData.mensaje.trim().length < 10) er.mensaje = 'Cuéntanos un poco más (≥ 10 caracteres).'
    setErrors(er)
    return Object.keys(er).length === 0
  }

  const handleSubmit = async () => {
    setOkMsg('')
    if (!validar()) return
    setEnviando(true)
    try {
      await new Promise((r) => setTimeout(r, 700)) // demo
      setOkMsg('¡Gracias! Recibimos tu mensaje y te contactaremos pronto.')
      setFormData({ nombre: '', email: '', mensaje: '' })
    } catch {
      setErrors((er) => ({ ...er, general: 'Ocurrió un error al enviar. Intenta de nuevo.' }))
    } finally {
      setEnviando(false)
    }
  }

  return (
    <Container className="contact-page">
      <Header as="h1" textAlign="center" className="contact-title">
        <Icon name="phone" /> Contacto & Ubicación
        <Header.Subheader>
          ¿Reservas, dudas o sugerencias? Escríbenos o visítanos.
        </Header.Subheader>
      </Header>

      <Segment placeholder raised className="contact-card">
        <Grid stackable doubling columns={2}>
          {/* Columna izquierda: Formulario */}
          <Grid.Column>
            <Header as="h3" className="section-title">Escríbenos</Header>

            <Form size="large" className="contact-form" onSubmit={handleSubmit} error={!!errors.general} success={!!okMsg}>
              {errors.general && (
                <Message error icon>
                  <Icon name="warning circle" />
                  <Message.Content>
                    <Message.Header>Ups…</Message.Header>
                    {errors.general}
                  </Message.Content>
                </Message>
              )}

              {okMsg && (
                <Message success icon>
                  <Icon name="check circle" />
                  <Message.Content>
                    <Message.Header>Mensaje enviado</Message.Header>
                    {okMsg}
                  </Message.Content>
                </Message>
              )}

              <Form.Field
                control={Input}
                label="Nombre"
                placeholder="Tu nombre"
                name="nombre"
                value={formData.nombre}
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
                value={formData.email}
                onChange={handleChange}
                error={errors.email ? { content: errors.email } : null}
                required
              />

              <Form.Field
                control={TextArea}
                label="Mensaje"
                placeholder="¿En qué podemos ayudarte?"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                error={errors.mensaje ? { content: errors.mensaje } : null}
                rows={6}
                required
              />

              <Button type="submit" primary fluid size="large" loading={enviando} disabled={enviando}>
                <Icon name="send" /> Enviar
              </Button>
            </Form>

            <Divider hidden />

            <Header as="h4" className="section-subtitle">También por aquí</Header>
            <div className="contact-actions">
              <Button as="a" href={`tel:${INFO.telefono.replace(/\s|-/g, '')}`} basic icon labelPosition="left">
                <Icon name="phone" /> {INFO.telefono}
              </Button>
              <Button as="a" href={`mailto:${INFO.email}`} basic icon labelPosition="left">
                <Icon name="mail" /> {INFO.email}
              </Button>
            </div>

            <Divider hidden />

            <div className="social-icons">
              <a href={INFO.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Icon name="instagram" size="big" />
              </a>
              <a href={INFO.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <Icon name="facebook" size="big" />
              </a>
              <a href={INFO.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <Icon name="whatsapp" size="big" />
              </a>
            </div>
          </Grid.Column>

          {/* Columna derecha: Info & Mapa */}
          <Grid.Column>
            <Header as="h3" className="section-title">Visítanos</Header>

            <Segment tertiary className="info-card">
              <List relaxed>
                <List.Item>
                  <Icon name="map marker alternate" size="large" />
                  <List.Content>
                    <List.Header>{INFO.nombre}</List.Header>
                    <List.Description>
                      {INFO.direccion} – {INFO.barrio}
                    </List.Description>
                    <a href={INFO.mapsDirections} target="_blank" rel="noreferrer">
                      <Icon name="direction" /> Cómo llegar
                    </a>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <Icon name="clock outline" size="large" />
                  <List.Content>
                    <List.Header>Horarios</List.Header>
                    <List.List>
                      {INFO.horarios.map((h) => (
                        <List.Item key={h.dia}>
                          <strong>{h.dia}:</strong> {h.horas}
                        </List.Item>
                      ))}
                    </List.List>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <Icon name="phone" size="large" />
                  <List.Content>
                    <List.Header>Reservas</List.Header>
                    <a href={`tel:${INFO.telefono.replace(/\s|-/g, '')}`}>{INFO.telefono}</a>
                  </List.Content>
                </List.Item>
              </List>
            </Segment>

            <div className="map-wrap">
              <Embed
                active
                iframe={{
                  title: 'Mapa del restaurante',
                  src: INFO.mapsEmbedUrl,
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
          <Icon name="shield alternate" />
          Nos importa tu privacidad: la información del formulario solo se usa para responder tu solicitud.
        </Header>
      </Segment>
    </Container>
  )
}
