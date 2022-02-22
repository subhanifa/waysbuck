import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import Products from '../tempData/Products'
import MenuProduct from './MenuProduct'
import thousandSeparator from "../utilities/thousandSeparator";
import { API } from "../config/api";

export default function Menu() {

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await API.get("/products");
      // Store product data to useState variabel
      setProducts(response.data.data.products);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="mx-5 my-4 md:mx-32 md:my-10 relative">
      <h1 className="mb-6 text-red-600 font-['Avenir-Black'] text-4xl md:text-5xl md:mb-10 ">
        Let&#39;s Order
      </h1>
      <div className="product-list block sm:flex sm:flex-wrap sm:justify-between md:flex md:flex-wrap md:justify-between ">
        {products.map((items, index) => (
          <Link key={index} to={`/product/${items.id}`}>
            <MenuProduct
              name={items.title}
              image={items.image}
              price={thousandSeparator(items.price)}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
