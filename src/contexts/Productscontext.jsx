import React, {createContext, useState, useEffect} from 'react';

export const Productscontext = createContext();
 const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState([]);

useEffect(()=> {
const fetchProducts = async ()=> {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProducts(data);
};
fetchProducts();
}, [])

  return (
  <Productscontext.Provider value={{products}}>{children}</Productscontext.Provider>
  )
}

export default ProductsProvider;