import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Products from '../features/Products/Products';
import { loadProducts } from '../features/Products/productSlice';
import { useAppDispatch } from '../store';
import OneProduct from '../features/Products/OneProduct';

function App():JSX.Element {

  const dispatch = useAppDispatch();

  useEffect(() => {
  dispatch(loadProducts())
  },[dispatch]);

  return (
    <Routes>     
        <Route path="/" element={<Products />} />  
        <Route path="/product/:id" element={<OneProduct />} /> 
    </Routes>
  );
}

export default App;
