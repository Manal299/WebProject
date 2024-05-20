// src/features/products/productsAPI.js

export const fetchProducts = async () => {
    const response = await fetch('http://localhost:3000');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  };
  