import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import OrderForm from '../components/OrderForm'
import { OrderContext } from '../contexts/OrderContext'
import { Attach } from '../exports/exportImage'
import Transactions from '../tempData/Transactions'
import thousandSeparator from '../utilities/thousandSeparator'

export default function Cart() {

    const path = "http://localhost:5000/uploads/"
    const [ order, setOrder ] = useContext(OrderContext)

    return (
        <>
            <div className="text-red-700 font-['Avenir-Book'] mx-4 my-6 md:mx-20 md:my-16 lg:mx-40 xl:mx-32">
                <h4 className="font-['Avenir-Black'] font-bold text-3xl mb-8">My Cart</h4>
                <p className="mb-5">Review Your Order</p>
                    <div className="lg:flex justify-between">
                        <div className="w-full lg:w-7/12 mb-20 lg:mb-0">
                            <hr className="border-1 border-red-700" />
                            {order.length > 0 ? (
                                order.map((item, index) => (
                                <div key={index} className="flex justify-between">
                                    <div className="flex my-4 gap-x-4">
                                        <img
                                            src={ path + item.product.image}
                                            className="h-20 w-20 object-cover rounded-lg"
                                            alt="product"
                                        />
                                        <div className="flex flex-col justify-center gap-y-2">
                                            <h4 className="font-bold">{item.product.title}</h4>
                                            <p>Topping : {item.topping.title}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-end gap-y-2">
                                        <h4>Rp {thousandSeparator(item.price)},-</h4>
                                        <Link to="/cart">
                                            <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                            />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                ))
                            ) : (
                                <h1 className="text-center my-6">Cart is empty.</h1>
                            )}
                            <hr className="border-1 border-red-700 mb-12" />
                            <div className="flex justify-between space-x-4 lg:space-x-0">
                                <div className="w-7/12 lg:w-1/2">
                                    <hr className="border-1 border-red-700 mb-5" />
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span>Subtotal</span>
                                            <span>
                                                Rp{" "}
                                                {order.length > 0
                                                ? thousandSeparator(
                                                    order.map((item) => item.price).reduce(
                                                        (prev, next) => prev + next
                                                    )
                                                    )
                                                : 0}
                                                ,-
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Qty</span>
                                            <span>
                                                {order.length > 0 ? order.length : 0}
                                            </span>
                                        </div>
                                    </div>
                                    <hr className="border-red-700 my-5" />
                                    <div className="flex justify-between font-bold">
                                        <span>Total</span>
                                        <span>
                                        Rp{" "}
                                        {order.length > 0
                                            ? thousandSeparator(
                                                order.map((item) => item.price).reduce(
                                                (prev, next) => prev + next
                                                )
                                            )
                                            : 0}
                                        ,-
                                        </span>
                                    </div>
                                </div>

                                    <label
                                    htmlFor="file-upload"
                                    className="bg-red-50 w-5/12 lg:w-4/12 border-2 border-red-700 rounded-lg flex flex-col items-center justify-center gap-y-4 cursor-pointer"
                                    >
                                        <img className='mx-14' src={Attach} alt="" />
                                        <p className="text-gray-500 text-center">Attach of Transaction</p>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>

                            </div>
                        </div>

                        <div className="w-full lg:w-4/12">
                            <OrderForm />
                        </div>
                    </div>
            </div>
        </>
    )
}
