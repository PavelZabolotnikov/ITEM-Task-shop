import { Product } from "./type";
import ProductChange from './ProductChange';

type State = {
    products: Product[];
    filterPro: Product[];
    oneProduct: Product;
    changeProductCard?: ProductChange;
  };
  export default State;