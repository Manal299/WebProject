import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState, AppDispatch } from '../app/store';
import ProductCard from './ProductCard';

const Wishlist: React.FC = () => {
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.wishlist.items);

  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {items.map((products) => (
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
export default Wishlist;
