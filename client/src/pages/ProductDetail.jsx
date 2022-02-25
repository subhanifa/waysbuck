import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import formatThousands from "format-thousands";
import { API } from "../config/api";


export default function ProductDetail() {
    let { id } = useParams();
    const path = "http://localhost:5000/uploads/"

    const [product, setProduct] = useState({});
    const [toppings, setToppings] = useState([]);

    const getProduct = async (id) => {
      try {
        const response = await API.get("/product/" + id);
        // Store product data to useState variabel
        setProduct(response.data.data.product);
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    const getToppings = async () => {
        try {
          const response = await API.get("/toppings");
          // Store product data to useState variabel
          setToppings(response.data.data.toppings);
        } catch (error) {
          console.log(error);
        }
    };

    const handleClick = (id) => {
      const checkedTopping = toppings.filter(
        (topping) => topping.id.checked === true
      );
  
      console.log(checkedTopping);
    };
  
    useEffect(() => {
        getToppings();
        getProduct(id);
        return () => {
            setProduct({});
            setToppings({});
          };  
    }, [id]);


    return (
        <div className="mx-8 pb-20 md:py-16 lg:mx-32 lg:flex xl:mx-32">
            <div className="img my-8 w-full lg:my-0 lg:w-5/12">
                <img
                    src={path + product.image}
                    alt="product"
                    className="w-full md:w-full xl:w-10/12 "
                />
            </div>
            <div className="text w-full lg:w-7/12">
                <div className="mb-10 lg:mb-14">
                    <h1 className="text-red-700 text-5xl font-extrabold font-['Avenir-Black'] mb-4">
                    {product.title}
                    </h1>
                    <p className="text-red-500 text-xl">
                    Rp {formatThousands(product.price, ".")},-
                    </p>
                </div>
                <div className="mb-10 lg:mb-14">
                    <h4 className="text-red-700 text-xl font-bold">Topping</h4>
                    <div className="flex flex-wrap items-center text-center text-red-600">
                    {toppings.map((item, index) => (
                        <button
                        // onClick={() => toggleAddTopping()}
                        type="button"
                        className="w-1/2 lg:w-1/4 mt-10 flex flex-col items-center relative"
                        key={index}
                        >
                        <img src={item.image} alt="" className="hover:opacity-75" />
                        <h4 className="mt-3 text-sm md:text-base">{item.title}</h4>
                        <h4 className="mt-2 text-xs">Rp {formatThousands(item.price,".")}</h4>
                        </button>
                    ))}
                    </div>
                </div>
                <div className="mb-10 lg:mb-10 flex justify-between text-xl font-bold text-red-800">
                    <span>Total</span>
                    <span>Rp {formatThousands(product.price)},-</span>
                </div>
                <button className="w-full bg-red-700 text-white py-2 rounded-md hover:bg-brand-red"
                onClick={handleClick}
                >
                    Add Cart
                </button>
            </div>
      </div>    
    )
}
