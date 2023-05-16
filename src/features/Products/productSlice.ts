import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import assert from 'assert';
import  State  from './Type/State';
import ProductChange from './Type/ProductChange';
import * as api from './api';


const initialState: State = {
  products: [],
  filterPro: [],
  oneProduct: {    id: 1,
    title: '',
    description: '',
    price: '',
    thumbnail: ''  },

};

export const loadProducts = createAsyncThunk('products/loadProducts', async () => {
    const products = await api.loadProducts();
    return products;
  });

  export const loadOneProduct = createAsyncThunk(
    'products/loadOneProduct',
    async (id: number) => {
      const product = await api.loadOneProduct(id);
      return product;
    },
  );

export const changeProductCard = createAsyncThunk(
    'event/changeProduct',
    async (changeProduct: ProductChange) => {
      await api.updateProduct(changeProduct);
      return  {changeProduct} ;
      
    },
  );


const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(loadOneProduct.fulfilled, (state, action) => {
        state.oneProduct = action.payload;
      })
      .addCase(changeProductCard.fulfilled, (state, action) => {
        const data = state.products.find(
          (el) => el.id === action.payload.changeProduct.id,
        );
        assert(action.payload.changeProduct.title);
        assert(action.payload.changeProduct.description);
        assert(action.payload.changeProduct.price);
        assert(action.payload.changeProduct.thumbnail);
        assert(data);
        data.title = action.payload.changeProduct.title;
        data.description = action.payload.changeProduct.description;
        data.price = action.payload.changeProduct.price;
        data.thumbnail = action.payload.changeProduct.thumbnail;
      });
  },
});

export default productSlice.reducer;
