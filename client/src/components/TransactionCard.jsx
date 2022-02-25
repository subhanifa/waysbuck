import React, { useContext } from 'react'
import { logo, QrCode } from '../exports/exportImage'
import { OrderContext } from '../contexts/OrderContext'

import thousandSeparator from '../utilities/thousandSeparator'
import dateFormat from 'dateformat'


export default function TransactionCard() {

    const path = "http://localhost:5000/uploads/"
    const [ order, setOrder ] = useContext(OrderContext)

  return (
    <>

      <div className="w-full lg:w-8/12 space-y-4 mb-4 lg:mb-0">
        
        {order.map((item, index) => (
          <div key={index} className="flex">
            <img src={ path + item.product.image} alt="product" className="w-1/3 object-contain lg:w-3/12" />
              <div className="text-red-600 font-['Avenir-Book'] space-y-2 ml-2 lg:ml-4 lg:space-y-5 lg:w-full ">
                  <h4 className="text-md font-['Avenir-Black'] font-bold">
                      {item.product.title}
                  </h4>
                  <p className="text-xs">
                    {dateFormat(item.createdAt, "dddd, mmmm dd, yyyy")}
                  </p>
                  <p className="text-xs">
                    Topping : {item.topping.title}
                  </p>
                  <p className="text-sm">
                      Price : Rp {thousandSeparator(item.price)}
                  </p>
              </div>
          </div>
        ))}
      </div>
      
      <div className="flex flex-row lg:flex-col justify-between lg:justify-start items-center lg:space-y-4">
        <img src={logo} alt="" className="" />
        <img src={QrCode} alt="" />
          <div className="space-y-5 md:space-y-7">
            <p className="text-sm bg-blue-200 text-cyan-500 font-bold px-5 py-1 rounded-md">
              On The Way
            </p>
            <p className="text-xs text-yellow-700 font-bold">
              Sub Total : Rp{" "}
              {thousandSeparator(
                order.map((item) => item.price).reduce(
                  (prev, next) => prev + next
                )
              )}
              ,-
            </p>
          </div>
      </div>

    </>
  )
}
    