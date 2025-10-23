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

  // Efectos
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), APP_CONFIG.APP.loadingTime);
    return () => clearTimeout(timer);
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

  // Valor del contexto
  const value = {
    // Estados
    loading,
    products,
    cart,
    contactForm,
    
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
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
