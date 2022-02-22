import React, { useState } from 'react'
import { IceCoffeePS } from '../exports/exportImage';
import Toppings from '../tempData/Toppings';
import kSeparator from "../utilities/thousandSeparator";



export default function ProductDetail(item) {

    const [price, setPrice] = useState(27000);
    const [useTopping, setUseTopping] = useState(false);

    function toggleAddTopping() {
        if (useTopping === false) {
          setPrice(price + 4000);  
          setUseTopping(true);
        } else {
          setPrice(price - 4000);
          setUseTopping(false);
        }
      }
    //   my-6 relative md:mx-20 md:my-16 md:w-auto lg:mx-40 xl:mx-32 
    return (
        <div className="mx-8 pb-20 md:py-16 lg:mx-32 lg:flex xl:mx-32">
            <div className="img my-8 w-full lg:my-0 lg:w-5/12">
                <img
                    src={IceCoffeePS}
                    alt="product"
                    className="w-full md:w-full xl:w-96"
                />
            </div>
            <div className="text w-full lg:w-7/12">
                <div className="mb-10 lg:mb-14">
                    <h1 className="text-red-700 text-5xl font-extrabold font-['Avenir-Black'] mb-4">
                    Ice Coffee Palm Sugar
                    </h1>
                    <p className="text-red-500 text-xl">
                    Rp {kSeparator(price)},-
                    </p>
                </div>
                <div className="mb-10 lg:mb-14">
                    <h4 className="text-red-700 text-xl font-bold">Topping</h4>
                    <div className="flex flex-wrap items-center text-center text-red-600">
                    {Toppings.map((item) => (
                        <button
                        onClick={() => toggleAddTopping()}
                        type="button"
                        className="w-1/2 lg:w-1/4 mt-10 flex flex-col items-center relative"
                        key={item.index}
                        >
                        <img src={item.image} alt="" className="hover:opacity-75" />
                        <h4 className="mt-3 text-sm md:text-base">{item.toppingName}</h4>
                        </button>
                    ))}
                    </div>
                </div>
                <div className="mb-10 lg:mb-10 flex justify-between text-xl font-bold text-red-800">
                    <span>Total</span>
                    <span>Rp {kSeparator(price)},-</span>
                </div>
                <button className="w-full bg-red-700 text-white py-2 rounded-md hover:bg-brand-red">
                    Add Cart
                </button>
            </div>
      </div>    
    )
}
