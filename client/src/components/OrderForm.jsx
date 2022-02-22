import React, { useContext } from 'react'
import { CartModalContext } from "../contexts/ModalContext";
import CartModal from './modal/CartModal';

export default function OrderForm() {

    const [open, setOpen] = useContext(CartModalContext);

    function successPrompt() {
        setOpen(!open);
        setTimeout(() => {
            setOpen(false);
        }, 1000);
    }

    return (

            <div>
                <form className='w-full space-y-4 lg:space-y-5' action="/cart">
                    <div>
                        <label htmlFor="name" className="sr-only">
                        Name
                        </label>
                        <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete=""
                        required
                        className="appearance-none relative block w-full px-3 py-2 border-2 border-red-700 bg-red-50 placeholder-gray-500 rounded-md focus:outline-none  focus:border-red-500 focus:z-10 sm:text-sm"
                        placeholder="Name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email-address" className="sr-only">
                        Email address
                        </label>
                        <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete=""
                        required
                        className="appearance-none relative block w-full px-3 py-2 border-2 border-red-700 bg-red-50 placeholder-gray-500 rounded-md focus:outline-none  focus:border-red-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone-number" className="sr-only">
                        Phone
                        </label>
                        <input
                        id="phone-number"
                        name="phoneNumber"
                        type="text"
                        autoComplete=""
                        required
                        className="appearance-none relative block w-full px-3 py-2 border-2 border-red-700 bg-red-50 placeholder-gray-500 rounded-md focus:outline-none  focus:border-red-500 focus:z-10 sm:text-sm"
                        placeholder="Phone"
                        />
                    </div>

                    <div>
                        <label htmlFor="post-code" className="sr-only">
                        Post Code
                        </label>
                        <input
                        id="post-code"
                        name="postCode"
                        type="text"
                        className="appearance-none relative block w-full px-3 py-2 border-2 border-red-700 bg-red-50 placeholder-gray-500 rounded-md focus:outline-none  focus:border-red-500 focus:z-10 sm:text-sm"
                        placeholder="Post Code"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="address" className="sr-only">
                        Address
                        </label>
                        <textarea
                        id="address"
                        name="address"
                        type="text"
                        className="resize-y appearance-none relative block w-full px-3 py-2 border-2 border-red-700 bg-red-50 placeholder-gray-500 rounded-md focus:outline-none  focus:border-red-500 focus:z-10 sm:text-sm"
                        placeholder="Address"
                        rows={4}
                        />
                    </div>

                    <div>
                    <button type="button" className='mt-2 mb-14 lg:mb-8 lg:mt-6 bg-red-700 w-full text-white px-4 py-2 font-semibold rounded'
                    onClick={() => {
                    successPrompt();
                    }}>
                        Pay
                    </button>
                    </div>
                </form>
                <CartModal />
            </div>
    )
}
