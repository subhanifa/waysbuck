import React, { useState, createContext } from 'react'

export const LoginContext = createContext();

export const LoginProvider = ({children}) => {
    const [ login, setLogin]  = useState(false);

    return (
        <LoginContext.Provider value={[ login, setLogin ]}>
            {children}
        </LoginContext.Provider>
    )
}

export const RegisterContext = createContext();

export const RegisterProvider = ({children}) => {
    const [ register, setRegister] = useState(false);

    return (
        <RegisterContext.Provider value={[ register, setRegister ]}>
            {children}
        </RegisterContext.Provider>
    )
}

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(false);

  return (
    <AdminContext.Provider value={[ admin, setAdmin ]}>
      {children}
    </AdminContext.Provider>
  );
};

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(false);

  return (
    <AlertContext.Provider value={[alert, setAlert]}>
      {children}
    </AlertContext.Provider>
  );
};