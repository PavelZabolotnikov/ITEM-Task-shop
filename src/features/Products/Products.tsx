import React, {  useState } from 'react';
import { Nav} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './Products.css';
import { RootState } from '../../store';

import usePagination from './Pagination/usePagination';



function Products():JSX.Element { 
  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')
  const [filter, setFilter]=useState({price:{from:0, to:10000}})
  const products = useSelector((state: RootState) => state.productState.products);

  
  

  const filteredPro = products.filter(product=>{
    return product.title.toLowerCase().includes(title.toLowerCase())
  })

  const filteredProducts= filteredPro.filter(product =>{
    return product.description.toLowerCase().includes(description.toLowerCase()) 
  })
  
  
  const { firstContentIndex, lastContentIndex, page, setPage, totalPages } =
  usePagination({
    contentPerPage: 4,
    count: products.length,
  });

  return (
    <>
    <div className="wrapper">
         <h1>Products</h1>
      <div className="search">
            <div className='title_search'>
               <p>Поиск по названию:</p>
               <input type='text'
                placeholder='Название' 
                className='title_input' 
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>

            <div className='description_search'>
                <p>Поиск по описанию:</p>
                <input type='text'
                placeholder='Описание'  
                className='description_input'
                onChange={(event) => setDescription(event.target.value)}
                />
            </div>

            <div className='priceinput'>
            <p>Поиск по цене:</p>
            <div className="price">
             <input onChange={(e) => setFilter({...filter, price:{...filter.price, from: +e.target.value}})} type='number' placeholder='Цена от' className='price_from' />
             <input onChange={(e) => setFilter({...filter, price:{...filter.price, to: +e.target.value}})} type='number' placeholder='Цена до' className='price_to' />
             </div>
      </div>
    </div>

   
    <div className="allProduct__container container">
      {filteredProducts
        .filter((el)=> parseFloat(el.price) >= +filter?.price?.from && parseFloat(el.price) <= +filter?.price?.to)
        .slice(firstContentIndex, lastContentIndex)
        .map((product,i) => (
          <div className="productDiv" key={i}>
              <div className="productImg">
               <img className="photo" src={product.thumbnail} alt="product_image" />
              </div> 
               <div className="productInfo">
               <div className="oneProductName">Название: {product.title}</div>
               <p className="oneProductDescription">Описание товара: {product.description}</p>
              <p className="oneDoctorPrice">Цена Товара: {product.price}</p>
              <div>
             <Nav.Link href={`product/${product.id}`} className="button_2" >
               Изменить
             </Nav.Link>
             </div>
          </div>
          </div>
      ))} 
    </div>


      <div className="pagination">
        {/* @ts-ignore */}
        {[...Array(totalPages).keys()].map((el) => (
          <button
            type="button"
            onClick={() => setPage(el + 1)}
            key={el}
            className={`page ${page === el + 1 ? 'actives' : ''}`}
          >
            {el + 1}
          </button>
        ))}
      </div>
      </div>
  </>
  )
}

export default Products