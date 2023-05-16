
import { Product } from "./Type/type";
import ProductChange from './Type/ProductChange';



export const loadProducts =  async (): Promise<Product[]> => {
  const res = await fetch('https://dummyjson.com/products')
  const {products} = await res.json()
  return products;
};

export const loadOneProduct = async (id: number): Promise<Product> => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json()  
  return product;
};

  export async function updateProduct(changeProduct: ProductChange): Promise<void> {
   try{
    const res = await fetch(`https://dummyjson.com/products/${changeProduct.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        title:changeProduct.title,
        description:changeProduct.description,
        price:changeProduct.price,
        thumbnail:changeProduct.thumbnail,
       }),
    });
    const product = await res.json()  
    return product;
  } catch (e) {
    console.error(e)
  }
  }