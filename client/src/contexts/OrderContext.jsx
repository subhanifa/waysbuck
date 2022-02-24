import React, { useState, createContext, useContext } from 'react'
import { useEffect } from 'react';
import { API } from '../config/api';
import { LoginContext } from './AuthContext';
import { UserContext } from './UserContext';

export const OrderContext = createContext();

export const OrderProvider = ({children}) => {
    const [ order, setOrder ] = useState([]);

    const [ state, dispatch ] = useContext(UserContext)
    const [ login, setLogin]  = useContext(LoginContext);

    const getOrders = async () => {
        try {
            const response = await API.get('/order/' + state.user.id)
            setOrder(response.data.orders)
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getOrders();
        return () => 
        {setOrder({})};
    }, [login])

    return (
        <OrderContext.Provider value={[ order, setOrder ]}>
            {children}
        </OrderContext.Provider>
    )
}