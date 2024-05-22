import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Features/Products/ProductSlice';

import { RootState, AppDispatch } from '../app/store';
import ProductCard from './ProductCard';

const Products: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { loading, products, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((products) => (
            <ProductCard
            key={products._id}
              imageUrl={products.imageUrl}
              name={products.name}
              price={products.price}
              productId={products._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Products;