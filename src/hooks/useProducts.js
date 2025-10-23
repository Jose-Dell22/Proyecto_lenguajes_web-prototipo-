import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';

export const useProducts = () => {
  const { loadProducts, products } = useApp();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        await loadProducts();
      } catch (err) {
        setError('Error al cargar los productos');
        console.error('Error al cargar productos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [loadProducts]);

  return {
    products,
    loading,
    error,
  };
};
