import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import productSlice from './features/Products/productSlice';


const store = configureStore({
  reducer: {
    productState: productSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;