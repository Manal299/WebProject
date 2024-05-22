// Features/Wishlist/wishlistSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WishlistItem {
    _id: number;
    name: string;
    price: number;
    imageUrl: string;
    isLiked: boolean;
}


interface WishlistState {
  items: WishlistItem[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<WishlistItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item._id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;
