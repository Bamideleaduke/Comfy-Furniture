import React, { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
import { products_url as url } from "../plugin/Plugin";

const ProductsContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});
  const [loading, isLoading] = useState(false);
  const [error, isError] = useState(false);

  const fetchProduct = async (url) => {
    try {
      const response = await axios.get(url);
      const products = response.data;
      setProducts(products);
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchSingleProduct = async (url) => {
    try {
      const response = await axios.get(url);
      const singleProduct = response.data;
      setSingleProduct(singleProduct);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchProduct(url);
    // eslint-disable-next-line
  }, [url]);
  return (
    <ProductsContext.Provider
      value={{
        products,
        singleProduct,
        fetchSingleProduct,
        loading,
        error,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ProductsContext);
};

export { ProductsContext, ProductProvider };
