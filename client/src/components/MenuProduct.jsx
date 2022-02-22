import React from 'react'

export default function MenuProduct(props) {

    return (
            <div className="flex bg-red-100 rounded-lg mb-4 sm:m-1 sm:block sm:w-max sm:justify-center md:m-2 md:block md:w-max md:justify-center">
                <div className='shrink-0 md:shrink-0'>
                    <img src={props.image} alt="product" className="h-full w-28 object-contain md:w-full md:object-contain items-center rounded-lg" />
                </div>
                <div className ="px-4 self-center space-y-4 py-4 md:space-y-2">
                    <p className ="tracking-wide text-red-600 font-bold">{props.name}</p>
                    <p className ="text-sm text-red-500 font-semibold">Rp {props.price}</p>
                </div>
            </div>
        )
}
