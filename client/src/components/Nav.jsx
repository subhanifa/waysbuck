import React, { Fragment, useRef, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Menu, Transition } from "@headlessui/react";
import { AdminContext, LoginContext, RegisterContext} from '../contexts/AuthContext'
import { ModalContext } from '../contexts/ModalContext';
import { UserContext } from "../contexts/UserContext";
import { AddProd, AddTopp, Cart, logo, Logout, UserIcon, UserLogo } from '../exports/exportImage'
import Transactions from '../tempData/Transactions';

export default function Nav() {

    const [ login, setLogin ] = useContext(LoginContext)
    const [ admin, setAdmin ] = useContext(AdminContext);
    const [ open, setOpen ] = useContext(ModalContext)
    const [ state, dispatch ] = useContext(UserContext);
    const [ register, setRegister ] = useContext(RegisterContext)

    let navigate = useNavigate();

    const logout = () => {
        console.log(state);
        setLogin(false);
        dispatch({
        type: "LOGOUT",
        });
        navigate("/");
    };

    return (
            <nav className ="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded md:mt-3 dark:bg-gray-800 md:px-20">
                <div className ="container flex flex-wrap justify-between items-center mx-auto">
                    <div className ="flex cursor-pointer ">
                        <Link to='/'><img src={logo} alt="left-logo" className='w-16 md:w-20 '/></Link>
                        <span className ="hidden self-center text-lg font-semibold whitespace-nowrap dark:text-white">WAYSBUCK</span>
                    </div>
                    <div></div>
                    {login ? (
                    <>
                    <div className='flex gap-4 items-center'>
                        <Link
                        to={admin ? "/transactions" : "/cart"}
                        className="relative"
                        >
                            <img src={Cart} alt="shopping-basket" />

                            {admin ? null : Transactions.length > 0 ? (
                            <div className="w-5 h-5 text-xs text-white font-bold bg-red-600 rounded-full absolute -right-2 -top-1 flex justify-center items-center">
                            {Transactions.length}
                            </div>
                        ) : null}
                        </Link>

                        <Menu as="div" className="relative z-10">
                        <div>
                            <Menu.Button>
                            <span className="sr-only">Open user menu</span>
                            <img
                                src={admin ? logo : UserIcon}
                                alt="user"
                                className="h-14 w-14 object-cover rounded-full border-2 border-brand-red"
                            />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {admin ? (
                                <>
                                <Menu.Item>
                                    <Link
                                    to="/addproduct"
                                    className="p-4 flex items-center hover:bg-gray-100"
                                    >
                                    <img
                                        src={AddProd}
                                        className="w-5 mr-2"
                                        alt="drink"
                                    />
                                    Add Product
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link
                                    to="/addtopping"
                                    className="p-4 flex items-center hover:bg-gray-100"
                                    >
                                    <img
                                        src={AddTopp}
                                        className="w-5 mr-2"
                                        alt="topping"
                                    />
                                    Add Topping
                                    </Link>
                                </Menu.Item>
                                </>
                            ) : (
                                <>
                                <Menu.Item>
                                    <Link
                                    to="/profile"
                                    className="p-4 flex items-center hover:bg-gray-100"
                                    >
                                    <img
                                        src={UserLogo}
                                        className="w-5 mr-2"
                                        alt="profile"
                                    />
                                    My Profile
                                    </Link>
                                </Menu.Item>
                                </>
                            )}
                            <hr />
                            <Menu.Item onClick={logout}>
                                <div className="p-4 flex items-center hover:bg-gray-100 cursor-pointer">
                                <img src={Logout} className="w-5 mr-2" alt="logout" />
                                Logout
                                </div>
                            </Menu.Item>
                            </Menu.Items>
                        </Transition>
                        </Menu>
                    </div>
                </>
                ) : (


                <>
                    <button data-collapse-toggle="mobile-menu" type="button" className ="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className ="sr-only">Open main menu</span>
                    <svg className ="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className ="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul className ="flex flex-col items-end space-y-3 text-sm md:flex-row md:space-x-6 md:mt-0 md:text-base md:font-medium">
                        <li>
                            <button className='bg-white text-red-500 px-4 py-1.5 border-2 border-red-600 font-semibold rounded'
                            onClick={() => {
                            setOpen(!open)
                            setRegister(true)}
                            }>
                                Login
                            </button>
                        </li>
                        <li>
                            <button className='bg-red-500 text-white px-4 py-1.5 border-2 border-red-600 font-semibold rounded'
                            onClick={() => {
                            setOpen(!open)
                            setRegister(false)}
                            }>
                                Register
                            </button>
                        </li>
                    </ul>
                    </div>
                </>
                )}

                </div>
            </nav>

    )
}
