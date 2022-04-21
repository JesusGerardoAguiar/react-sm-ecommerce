import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/slices';

export const store = configureStore({
  reducer: {
    productsData: productsReducer,
  },
});
