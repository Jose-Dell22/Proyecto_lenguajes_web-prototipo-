# Documentación Completa - Proyecto Carnes al Barril

## **📋 Índice General**
1. [Introducción para Principiantes](#introducción-para-principiantes)
2. [Configuración Global](#configuración-global)
3. [Contexto de la Aplicación](#contexto-de-la-aplicación)
4. [Componentes del Proyecto](#componentes-del-proyecto)
5. [Variables y Constantes](#variables-y-constantes)
6. [Funcionalidades Implementadas](#funcionalidades-implementadas)
7. [Estructura del Proyecto](#estructura-del-proyecto)
8. [Cambios y Mejoras Realizadas](#cambios-y-mejoras-realizadas)
9. [Guía de Ubicación de Archivos](#guía-de-ubicación-de-archivos)

---

## **🎯 Introducción para Principiantes**

### **¿Qué es este proyecto?**
Este es un sitio web para un restaurante llamado "Carnes al Barril" ubicado en Neiva, Colombia. Es una aplicación web moderna construida con React que permite a los usuarios:

- **Ver productos** del restaurante
- **Agregar productos** a un carrito de compras
- **Contactar** al restaurante
- **Conocer** la historia del restaurante
- **Navegar** fácilmente entre diferentes secciones

### **¿Qué tecnologías se usaron?**
- **React**: Framework principal para crear la interfaz
- **Semantic UI React**: Biblioteca de componentes para diseño
- **React Router**: Para navegación entre páginas
- **Context API**: Para manejar información global
- **CSS**: Para estilos y diseño visual

### **¿Cómo está organizado?**
El proyecto está dividido en carpetas y archivos que tienen funciones específicas:
- **Componentes**: Cada página o sección del sitio
- **Configuración**: Información centralizada del restaurante
- **Contexto**: Información global compartida
- **Estilos**: Archivos CSS para diseño

---

## **⚙️ Configuración Global**

### **📁 Archivo: `src/config/constants.js`**

Este archivo contiene TODA la información del restaurante y configuración de la aplicación. Es como el "cerebro" del proyecto.

#### **🏪 Información del Restaurante**:
```javascript
RESTAURANT: {
  name: 'Carnes al Barril',           // Nombre del restaurante
  location: 'Neiva',                  // Ciudad
  address: 'Cra. 1 # 23-45, Neiva, Huila, Colombia',  // Dirección completa
  phone: '+57 318 123 4567',         // Teléfono
  email: 'contacto@carnesalbarril.com',  // Email
  social: {                          // Redes sociales
    instagram: 'https://www.instagram.com/tu_restaurante',
    facebook: 'https://www.facebook.com/tu_restaurante',
    whatsapp: 'https://wa.me/573181234567',
  },
  schedules: [                       // Horarios de atención
    { day: 'Lun – Jue', hours: '12:00 m – 10:00 p. m.' },
    { day: 'Vie – Sáb', hours: '12:00 m – 11:30 p. m.' },
    { day: 'Dom', hours: '12:00 m – 9:00 p. m.' },
  ]
}
```

#### **🛣️ Rutas de Navegación**:
```javascript
ROUTES: {
  HOME: '/',                    // Página principal
  PRODUCTS: '/products',        // Página de productos
  CONTACT: '/contacto',         // Página de contacto
  ABOUT: '/about',              // Página sobre nosotros
  MENU_COMPONENT: '/MenuComponent',  // Página de menú
}
```

#### **🎨 Colores del Tema**:
```javascript
COLORS: {
  primary: '#ff7b00',          // Color naranja principal
  secondary: '#ff4500',       // Color naranja secundario
  background: '#000',          // Fondo negro
  text: '#fff',               // Texto blanco
  cardBackground: 'linear-gradient(145deg, #fff5e1, #ffe4b3)',  // Fondo de cards
}
```

#### **🌐 Conexión con APIs**:
```javascript
API: {
  products: 'https://fakestoreapi.com/products',  // URL para obtener productos
}
```

#### **✅ Reglas de Validación**:
```javascript
VALIDATION_RULES: {
  name: { required: true, minLength: 2, message: 'Ingresa tu nombre.' },
  email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, message: 'Correo no válido.' },
  message: { required: true, minLength: 10, message: 'Cuéntanos un poco más (≥ 10 caracteres).' }
}
```

#### **💬 Mensajes del Sistema**:
```javascript
MESSAGES: {
  loading: 'Cargando Carnes al Barril...',
  loadingProducts: 'Cargando productos...',
  contactSuccess: '¡Gracias! Recibimos tu mensaje y te contactaremos pronto.',
  productAdded: 'fue agregado al carrito'
}
```

#### **🔍 Iconos Utilizados**:
```javascript
ICONS: {
  phone: 'phone', email: 'mail', map: 'map marker alternate',
  clock: 'clock outline', send: 'send', check: 'check circle',
  instagram: 'instagram', facebook: 'facebook', whatsapp: 'whatsapp'
}
```

---

## **🔄 Contexto de la Aplicación**

### **📁 Archivo: `src/context/AppContext.jsx`**

Este archivo maneja TODA la información global de la aplicación. Es como una "memoria compartida" que todos los componentes pueden usar.

#### **📊 Estados Globales**:
```javascript
const [loading, setLoading] = useState(true);        // Estado de carga
const [products, setProducts] = useState([]);        // Lista de productos
const [cart, setCart] = useState([]);                // Carrito de compras
const [contactForm, setContactForm] = useState({     // Formulario de contacto
  data: { nombre: '', email: '', mensaje: '' },
  errors: {},
  isSubmitting: false,
  successMessage: '',
});
```

#### **🛒 Funciones del Carrito**:
```javascript
// Agregar producto al carrito (agrupa productos repetidos)
addToCart: (item) => {
  // Si el producto ya existe: aumenta la cantidad
  // Si no existe: lo agrega con cantidad 1
}

// Remover producto del carrito
removeFromCart: (index) => {
  // Elimina el producto por su posición
}

// Disminuir cantidad de un producto
decreaseQuantity: (index) => {
  // Reduce la cantidad, si llega a 0 lo elimina
}

// Aumentar cantidad de un producto
increaseQuantity: (index) => {
  // Aumenta la cantidad del producto
}

// Limpiar todo el carrito
clearCart: () => {
  // Vacía completamente el carrito
}
```

#### **🧮 Funciones de Cálculo**:
```javascript
// Calcular el total del carrito
getCartTotal: () => {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Contar cuántos items hay en el carrito
getCartItemsCount: () => {
  return cart.reduce((total, item) => total + item.quantity, 0);
}
```

#### **📝 Funciones del Formulario**:
```javascript
// Actualizar un campo del formulario
updateContactForm: (field, value) => {
  // Actualiza el campo específico del formulario
}

// Limpiar el formulario
resetContactForm: () => {
  // Borra todos los campos del formulario
}
```

---

## **🧩 Componentes del Proyecto**

### **🏠 1. Home (`src/components/Home/Home.jsx`)**

**¿Qué hace?** Es la página principal del sitio web.

**Características principales**:
- **Sección Hero**: Imagen de fondo con título principal
- **Sección de Navegación**: 4 tarjetas para ir a otras páginas
- **Productos Destacados**: Muestra los primeros 6 productos del API
- **Reseñas de Clientes**: Opiniones realistas de clientes
- **Botones de Acción**: WhatsApp y Rappi

**Cards de Navegación**:
```javascript
// Menú → /products (Página de productos)
// Ubicación → /contacto (Página de contacto)
// Sobre Nosotros → /about (Página sobre nosotros)
// Especiales → /MenuComponent (Página de menú)
```

**Productos Destacados**:
- Carga automática del API
- Muestra los primeros 6 productos
- Botón "Agregar al carrito" funcional
- Navegación a la página completa de productos

**Reseñas de Clientes**:
```javascript
// María Elena Rodríguez (5 estrellas - Hace 2 semanas)
// Carlos Mendoza (5 estrellas - Hace 1 mes)
// Ana Sofía López (5 estrellas - Hace 3 días)
```

### **🛍️ 2. Products (`src/components/Products/Products.jsx`)**

**¿Qué hace?** Muestra todos los productos disponibles del restaurante.

**Funcionalidades**:
- **Carga de productos** desde API externa
- **Grid responsive** de productos
- **Botones "Agregar al carrito"** funcionales
- **Estados de carga** y manejo de errores
- **Integración con carrito global**

**Estructura técnica**:
```javascript
// useEffect para cargar productos al iniciar
// useState para manejar loading y productos
// Grid de productos con tarjetas
// Botones de acción por cada producto
```

**Estilos CSS**:
- **Archivo CSS separado**: `src/components/Products/Products.css`
- **Imagen de fondo**: Alguien asando carne
- **Overlay oscuro**: Para contraste y legibilidad
- **Cards profesionales**: Con bordes redondeados y sombras

### **📞 3. Contacto (`src/components/Contact/ContactoUbicacion.jsx`)**

**¿Qué hace?** Página de contacto con formulario y información del restaurante.

**Características**:
- **Formulario de contacto** con validación
- **Información del restaurante** dinámica
- **Mapa embebido** de Google Maps
- **Display del carrito** cuando hay productos agregados
- **Botones de gestión** del carrito

**Formulario**:
```javascript
// Campos: nombre, email, mensaje
// Validación: reglas desde constants.js
// Estados: loading, success, error
// Integración: con contexto global
```

**Carrito en Contacto**:
- Lista de productos agregados
- Controles de cantidad (+/-)
- Eliminación individual (icono de papelera)
- Botón "Limpiar carrito"
- Cálculo de total dinámico

### **ℹ️ 4. About Us (`src/components/AboutUs/About.jsx`)**

**¿Qué hace?** Cuenta la historia y valores del restaurante.

**Secciones**:
- **Hero Section**: Título y descripción principal
- **Nuestra Historia**: Texto narrativo sobre el restaurante
- **Estadísticas**: Números importantes del restaurante
- **Nuestros Valores**: 3 tarjetas con valores principales
- **Nuestro Equipo**: Información del equipo

**Cards de Valores**:
```javascript
// Calidad Premium - Icono estrella
// Tradición y Pasión - Icono fuego
// Experiencia Auténtica - Icono usuarios
```

### **🛒 5. FloatingCart (`src/components/common/FloatingCart.jsx`)**

**¿Qué hace?** Carrito de compras flotante que aparece en todas las páginas.

**Funcionalidades**:
- **Carrito flotante** global accesible desde cualquier página
- **Contador de items** en el botón
- **Modal con productos** del carrito
- **Controles de cantidad** (+/-)
- **Eliminación individual** de productos
- **Navegación** a página de contacto
- **Botón "Limpiar carrito"**

**Estados Visuales**:
```javascript
// Botón con contador de items
// Modal que se abre/cierra
// Lista de productos con controles
// Total calculado dinámicamente
```

### **🦶 6. Footer (`src/components/common/Footer.jsx`)**

**¿Qué hace?** Pie de página que aparece en todas las páginas.

**Secciones**:
- **Información del restaurante** con calificación
- **Horarios de atención** dinámicos
- **Información de contacto** completa
- **Redes sociales** con enlaces funcionales
- **Mensaje final** contextualizado

**Datos Dinámicos**:
```javascript
// Nombre: {config.RESTAURANT.name}
// Horarios: {config.RESTAURANT.schedules}
// Contacto: {config.RESTAURANT.phone, email, address}
// Redes: {config.RESTAURANT.social.*}
```

---

## **🔧 Variables y Constantes**

### **🌐 Variables Globales Disponibles**

#### **Desde `useApp()` hook**:
```javascript
const {
  loading,           // Estado de carga global
  products,          // Array de productos del API
  cart,              // Array del carrito de compras
  contactForm,       // Estado del formulario de contacto
  config,            // Configuración completa de la app
  addToCart,         // Función para agregar al carrito
  removeFromCart,    // Función para remover del carrito
  decreaseQuantity,  // Función para disminuir cantidad
  increaseQuantity,  // Función para aumentar cantidad
  clearCart,         // Función para limpiar carrito
  getCartTotal,      // Función para calcular total
  getCartItemsCount, // Función para contar items
  updateContactForm, // Función para actualizar formulario
  resetContactForm,  // Función para resetear formulario
  loadProducts       // Función para cargar productos
} = useApp();
```

#### **Desde `config` object**:
```javascript
config.RESTAURANT.name        // 'Carnes al Barril'
config.RESTAURANT.location    // 'Neiva'
config.RESTAURANT.address     // 'Cra. 1 # 23-45, Neiva, Huila, Colombia'
config.RESTAURANT.phone       // '+57 318 123 4567'
config.RESTAURANT.email      // 'contacto@carnesalbarril.com'
config.RESTAURANT.schedules   // Array de horarios
config.RESTAURANT.social.*    // Redes sociales
config.ROUTES.*               // Rutas de navegación
config.COLORS.*               // Paleta de colores
config.API.*                  // URLs de APIs
```

---

## **⚡ Funcionalidades Implementadas**

### **🛒 1. Sistema de Carrito Completo**
- **Agregar productos** desde cualquier página
- **Agrupar productos repetidos** con cantidades
- **Eliminar productos individualmente**
- **Controlar cantidades** (+/-)
- **Limpiar carrito completo**
- **Calcular total** dinámicamente
- **Contar items** en tiempo real

### **📱 2. Diseño Responsive**
- **Semantic UI React** para todos los componentes
- **Grid system** adaptativo
- **Hover effects** interactivos
- **Gradientes y sombras** profesionales
- **Iconografía consistente**

### **🧭 3. Navegación Global**
- **React Router DOM** para rutas
- **Navbar** con navegación principal
- **Footer** en todas las páginas
- **Carrito flotante** accesible desde cualquier lugar

### **🔄 4. Gestión de Estado**
- **Context API** para estado global
- **Hooks personalizados** (useForm, useApp)
- **Configuración centralizada**
- **Variables globales** reutilizables

### **🌐 5. Integración con APIs**
- **Carga de productos** desde fakestoreapi.com
- **Estados de carga** y error
- **Manejo de datos** dinámico

### **📝 6. Formularios Inteligentes**
- **Validación en tiempo real**
- **Mensajes de error** descriptivos
- **Estados de envío** (loading, success, error)
- **Integración con contexto** global

---

## **📁 Estructura del Proyecto**

```
src/
├── components/                    // Todos los componentes
│   ├── common/                   // Componentes compartidos
│   │   ├── FloatingCart.jsx      // Carrito flotante global
│   │   ├── Footer.jsx           // Footer global
│   │   ├── HeroSection.jsx     // Sección hero reutilizable
│   │   └── LoaderSpinner.jsx   // Spinner de carga
│   ├── Home/                    // Página principal
│   │   ├── Home.jsx            // Componente principal
│   │   └── Home.css            // Estilos del Home
│   ├── Products/                // Página de productos
│   │   ├── Products.jsx        // Componente principal
│   │   └── Products.css        // Estilos de Products
│   ├── Contact/                // Página de contacto
│   │   └── ContactoUbicacion.jsx // Componente principal
│   ├── AboutUs/                // Página sobre nosotros
│   │   └── About.jsx           // Componente principal
│   └── MenuComponent/          // Página de menú
│       └── menuComponent.jsx   // Componente principal
├── context/                    // Contexto global
│   └── AppContext.jsx          // Contexto principal
├── config/                     // Configuración
│   └── constants.js           // Constantes centralizadas
├── hooks/                      // Hooks personalizados
│   └── useForm.js             // Hook para formularios
├── styles/                     // Estilos globales
│   ├── variables.css          // Variables CSS globales
│   └── styles.css             // Estilos globales
├── App.jsx                     // Componente principal
└── main.jsx                   // Punto de entrada
```

---

## **🔄 Cambios y Mejoras Realizadas**

### **🎨 1. Separación de Estilos CSS**

**¿Qué se hizo?**
- Se separaron todos los estilos inline de los componentes JSX
- Se crearon archivos CSS dedicados para cada componente
- Se aplicaron clases CSS con nombres descriptivos

**Archivos CSS creados**:
- `src/components/Products/Products.css` - Estilos del componente Products
- `src/components/Home/Home.css` - Estilos del componente Home

**Beneficios**:
- ✅ **Código más limpio**: JSX sin estilos inline
- ✅ **Mejor organización**: CSS en archivos dedicados
- ✅ **Fácil mantenimiento**: Estilos centralizados
- ✅ **Mejor rendimiento**: CSS optimizado

### **🖼️ 2. Imágenes de Fondo Implementadas**

**¿Qué se hizo?**
- Se agregó imagen de fondo al componente Products
- Se agregó imagen de fondo al componente Home
- Se implementó efecto parallax para dinamismo visual

**Imágenes utilizadas**:
- **Products**: Imagen de alguien asando carne
- **Home**: Imagen de alguien cortando carne

**Características técnicas**:
```css
background-image: url('...');
background-size: cover;
background-position: center;
background-attachment: fixed;  // Efecto parallax
background-repeat: no-repeat;
opacity: 0.7;  // Para no interferir con el contenido
```

### **🎯 3. Corrección de Problemas de Fondo**

**Problema identificado**:
- El fondo del componente Products se mostraba completamente negro
- Los estilos CSS no se aplicaban correctamente

**Solución implementada**:
- Se agregó `!important` a los estilos críticos
- Se simplificó la estructura de capas
- Se ajustó la opacidad del overlay

**Código corregido**:
```css
.products-container {
  background-image: url('...') !important;
  background-size: cover !important;
  background-position: center !important;
  background-attachment: fixed !important;
  background-repeat: no-repeat !important;
  min-height: 100vh !important;
  position: relative !important;
}
```

### **🎨 4. Consistencia Visual Mejorada**

**¿Qué se hizo?**
- Se adaptó el estilo de productos del componente Products al Home
- Se mantuvieron los mismos colores y efectos visuales
- Se creó una experiencia visual unificada

**Elementos unificados**:
- Cards con bordes redondeados (18px)
- Gradientes naranjas consistentes
- Sombras con efectos glow
- Botones circulares con iconos

### **🛒 5. Sistema de Carrito Mejorado**

**Funcionalidades implementadas**:
- **Agrupación de productos**: Los productos repetidos se agrupan con cantidades
- **Eliminación individual**: Cada producto se puede eliminar por separado
- **Controles de cantidad**: Botones +/- para ajustar cantidades
- **Cálculo automático**: Total y conteo de items en tiempo real
- **Carrito flotante**: Accesible desde cualquier página

### **📱 6. Footer Global Implementado**

**Características del Footer**:
- **Información dinámica**: Usa datos del archivo de configuración
- **Horarios de atención**: Se muestran automáticamente
- **Redes sociales**: Enlaces funcionales a Instagram, Facebook, WhatsApp
- **Diseño consistente**: Aparece en todas las páginas
- **Estilo profesional**: Gradientes y iconos dorados

---

## **🗺️ Guía de Ubicación de Archivos**

### **📁 ¿Dónde encontrar cada cosa?**

#### **🏪 Información del Restaurante**:
- **Archivo**: `src/config/constants.js`
- **Sección**: `RESTAURANT`
- **Contiene**: Nombre, dirección, teléfono, email, horarios, redes sociales

#### **🎨 Colores y Estilos**:
- **Archivo**: `src/config/constants.js`
- **Sección**: `COLORS`
- **Archivo**: `src/styles/variables.css`
- **Archivo**: `src/styles.css`

#### **🛒 Funciones del Carrito**:
- **Archivo**: `src/context/AppContext.jsx`
- **Funciones**: `addToCart`, `removeFromCart`, `getCartTotal`, etc.

#### **🛣️ Rutas de Navegación**:
- **Archivo**: `src/config/constants.js`
- **Sección**: `ROUTES`
- **Archivo**: `src/App.jsx` (implementación)

#### **📝 Validación de Formularios**:
- **Archivo**: `src/config/constants.js`
- **Sección**: `VALIDATION_RULES`
- **Archivo**: `src/hooks/useForm.js` (implementación)

#### **🌐 Conexión con APIs**:
- **Archivo**: `src/config/constants.js`
- **Sección**: `API`
- **Implementación**: En componentes Products y Home

#### **🎨 Estilos de Componentes**:
- **Products**: `src/components/Products/Products.css`
- **Home**: `src/components/Home/Home.css`
- **Globales**: `src/styles/variables.css` y `src/styles.css`

#### **🧩 Componentes Principales**:
- **Home**: `src/components/Home/Home.jsx`
- **Products**: `src/components/Products/Products.jsx`
- **Contacto**: `src/components/Contact/ContactoUbicacion.jsx`
- **About**: `src/components/AboutUs/About.jsx`
- **Footer**: `src/components/common/Footer.jsx`
- **Carrito**: `src/components/common/FloatingCart.jsx`

### **🔍 ¿Cómo usar las variables?**

#### **En cualquier componente**:
```javascript
import { useApp } from '../context/AppContext';

const MiComponente = () => {
  const { 
    config,           // Configuración completa
    cart,             // Carrito de compras
    addToCart,        // Función para agregar
    getCartTotal      // Función para calcular total
  } = useApp();

  return (
    <div>
      <h1>{config.RESTAURANT.name}</h1>
      <p>Total: ${getCartTotal()}</p>
      <button onClick={() => addToCart(producto)}>
        Agregar al carrito
      </button>
    </div>
  );
};
```

#### **Para navegación**:
```javascript
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

// Navegar a productos
navigate(config.ROUTES.PRODUCTS);

// Navegar a contacto
navigate(config.ROUTES.CONTACT);
```

#### **Para acceder a configuración**:
```javascript
// Información del restaurante
config.RESTAURANT.name
config.RESTAURANT.phone
config.RESTAURANT.address

// Rutas de navegación
config.ROUTES.HOME
config.ROUTES.PRODUCTS
config.ROUTES.CONTACT

// Colores del tema
config.COLORS.primary
config.COLORS.secondary
```

---

## **✅ Estado Final del Proyecto**

### **🎯 Completamente Funcional**:
- ✅ **Navegación** entre todas las páginas
- ✅ **Carrito de compras** global y funcional
- ✅ **Formularios** con validación
- ✅ **APIs** integradas y funcionando
- ✅ **Diseño responsive** en todos los dispositivos
- ✅ **Footer global** consistente
- ✅ **Configuración centralizada** y mantenible

### **🎨 Diseño Profesional**:
- ✅ **Semantic UI React** en todos los componentes
- ✅ **Gradientes y efectos** visuales atractivos
- ✅ **Iconografía consistente** en toda la app
- ✅ **Hover effects** interactivos
- ✅ **Imágenes de fondo** temáticas
- ✅ **Efectos parallax** para dinamismo

### **🚀 Listo para Producción**:
- ✅ **Código limpio** y bien estructurado
- ✅ **Variables globales** centralizadas
- ✅ **Contexto optimizado** para rendimiento
- ✅ **Estilos separados** en archivos CSS
- ✅ **Documentación completa** del proyecto

### **📱 Características Destacadas**:
- ✅ **Carrito inteligente** que agrupa productos repetidos
- ✅ **Eliminación individual** de productos
- ✅ **Cálculo automático** de totales
- ✅ **Formularios con validación** en tiempo real
- ✅ **Imágenes de fondo** temáticas y profesionales
- ✅ **Footer dinámico** con información actualizada
- ✅ **Navegación fluida** entre todas las páginas

**¡El proyecto está completamente funcional, bien documentado y listo para usar!** 🎉✨

---

## **📞 Soporte y Mantenimiento**

### **🔧 Para hacer cambios**:
1. **Información del restaurante**: Modificar `src/config/constants.js`
2. **Colores**: Cambiar `config.COLORS` en constants.js
3. **Estilos**: Editar archivos CSS correspondientes
4. **Funcionalidades**: Modificar `src/context/AppContext.jsx`

### **📋 Para agregar nuevas funcionalidades**:
1. **Nuevos componentes**: Crear en `src/components/`
2. **Nuevas rutas**: Agregar en `config.ROUTES`
3. **Nuevas variables**: Agregar en `config` object
4. **Nuevos estilos**: Crear archivos CSS separados

**¡El proyecto está diseñado para ser fácil de mantener y expandir!** 🚀
