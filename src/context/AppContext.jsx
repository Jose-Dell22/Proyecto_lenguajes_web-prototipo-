import React, { createContext, useContext, useState, useEffect } from 'react';
import { APP_CONFIG } from '../config/constants';

// Crear el contexto
const AppContext = createContext();

// Hook personalizado para usar el contexto
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp debe ser usado dentro de un AppProvider');
  }
  return context;
};

// Provider del contexto
export const AppProvider = ({ children }) => {
  // Estados globales
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [contactForm, setContactForm] = useState({
    data: { nombre: '', email: '', mensaje: '' },
    errors: {},
    isSubmitting: false,
    successMessage: '',
  });
  const [suggestions, setSuggestions] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [adminUser, setAdminUser] = useState(null);

  // Efectos
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), APP_CONFIG.APP.loadingTime);
    return () => clearTimeout(timer);
  }, []);

  // Cargar admin del localStorage al iniciar
  useEffect(() => {
    const savedAdmin = localStorage.getItem('adminUser');
    if (savedAdmin) {
      try {
        setAdminUser(JSON.parse(savedAdmin));
      } catch (error) {
        console.error('Error al cargar admin del localStorage:', error);
      }
    } else {
      // Si no hay admin guardado, crear uno por defecto (simulado)
      const defaultAdmin = {
        id: 1,
        nombre: 'Administrador',
        apellido: 'Principal',
        email: 'admin@carnesalbarril.com',
        telefono: '+57 318 123 4567',
        rol: 'Administrador',
        fechaIngreso: new Date().toISOString(),
      };
      setAdminUser(defaultAdmin);
      localStorage.setItem('adminUser', JSON.stringify(defaultAdmin));
    }
  }, []);

  // Funciones globales
  const addToCart = (item) => {
    setCart(prev => {
      // Buscar si el item ya existe en el carrito
      const existingItemIndex = prev.findIndex(cartItem => cartItem.id === item.id);
      
      if (existingItemIndex !== -1) {
        // Si existe, incrementar la cantidad
        const updatedCart = [...prev];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: (updatedCart[existingItemIndex].quantity || 1) + 1
        };
        return updatedCart;
      } else {
        // Si no existe, agregarlo con cantidad 1
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((item, itemIndex) => itemIndex !== index));
  };

  const decreaseQuantity = (index) => {
    setCart(prev => {
      const updatedCart = [...prev];
      const item = updatedCart[index];
      
      if (item.quantity > 1) {
        // Si la cantidad es mayor a 1, disminuir en 1
        updatedCart[index] = {
          ...item,
          quantity: item.quantity - 1
        };
      } else {
        // Si la cantidad es 1, eliminar el producto completamente
        updatedCart.splice(index, 1);
      }
      
      return updatedCart;
    });
  };

  const increaseQuantity = (index) => {
    setCart(prev => {
      const updatedCart = [...prev];
      updatedCart[index] = {
        ...updatedCart[index],
        quantity: (updatedCart[index].quantity || 1) + 1
      };
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  };

  const getCartItemsCount = () => {
    return cart.reduce((total, item) => total + (item.quantity || 1), 0);
  };

  const updateContactForm = (updates) => {
    setContactForm(prev => ({
      ...prev,
      ...updates,
    }));
  };

  const resetContactForm = () => {
    setContactForm({
      data: { nombre: '', email: '', mensaje: '' },
      errors: {},
      isSubmitting: false,
      successMessage: '',
    });
  };

  const loadProducts = async () => {
    try {
      const response = await fetch(APP_CONFIG.API.products);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error al cargar productos:', error);
    }
  };

  // Funciones para sugerencias
  const addSuggestion = (suggestion) => {
    const newSuggestion = {
      id: Date.now(),
      ...suggestion,
      fecha: new Date().toISOString(),
    };
    setSuggestions(prev => [newSuggestion, ...prev]);
  };

  const deleteSuggestion = (id) => {
    setSuggestions(prev => prev.filter(s => s.id !== id));
  };

  // Funciones para reservas
  const addReservation = (reservation) => {
    const newReservation = {
      id: Date.now(),
      ...reservation,
      fechaCreacion: new Date().toISOString(),
    };
    setReservations(prev => [newReservation, ...prev]);
  };

  const updateReservation = (id, updatedReservation) => {
    setReservations(prev =>
      prev.map(r => r.id === id ? { ...r, ...updatedReservation } : r)
    );
  };

  const deleteReservation = (id) => {
    setReservations(prev => prev.filter(r => r.id !== id));
  };

  // Funciones CRUD para productos
  const addProduct = (product) => {
    const newProduct = {
      id: Date.now(),
      ...product,
    };
    setProducts(prev => [newProduct, ...prev]);
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts(prev =>
      prev.map(p => p.id === id ? { ...p, ...updatedProduct } : p)
    );
  };

  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  // Funciones de autenticación
  const loginAdmin = (adminData) => {
    const admin = {
      id: adminData.id || Date.now(),
      nombre: adminData.nombre,
      apellido: adminData.apellido,
      email: adminData.email,
      telefono: adminData.telefono || '',
      rol: adminData.rol || 'Administrador',
      fechaIngreso: adminData.fechaIngreso || new Date().toISOString(),
    };
    setAdminUser(admin);
    localStorage.setItem('adminUser', JSON.stringify(admin));
  };

  const logoutAdmin = () => {
    setAdminUser(null);
    localStorage.removeItem('adminUser');
  };

  // Valor del contexto
  const value = {
    // Estados
    loading,
    products,
    cart,
    contactForm,
    suggestions,
    reservations,
    adminUser,
    
    // Configuración
    config: APP_CONFIG,
    
    // Funciones de carrito
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
    
    // Funciones de formulario de contacto
    updateContactForm,
    resetContactForm,
    
    // Funciones de productos
    loadProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    
    // Funciones de sugerencias
    addSuggestion,
    deleteSuggestion,
    
    // Funciones de reservas
    addReservation,
    updateReservation,
    deleteReservation,
    
    // Funciones de autenticación
    loginAdmin,
    logoutAdmin,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
