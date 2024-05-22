import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../Features/Products/ProductSlice';
import cartReducer from '../Features/Cart/CartSlice';
import WishlistSlice from '../Features/Wishlist/WishlistSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    wishlist: WishlistSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
