import './assets/styles/App.css';
import React, { useContext, useEffect } from 'react'
import Nav from './components/Nav';
import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom"
import { AdminContext, LoginContext, RegisterProvider } from "./contexts/AuthContext";
import { CartModalProvider, ModalProvider, TransactionModalProvider } from "./contexts/ModalContext";
import { UserContext } from './contexts/UserContext';
import LandingPages from './pages/LandingPages';
import ProductDetail from './pages/ProductDetail';
import ProfilePage from './pages/ProfilePage';
import Cart from './pages/Cart';
import AddProduct from './pages/admin/AddProduct';
import AddTopping from './pages/admin/AddTopping';
import TransactionsTable from './pages/admin/TransactionTable';
import Modal from './components/modal';
import AdminRoute from './components/auth/AdminRoute';
import CustomerRoute from './components/auth/CustomerRoute';
import { API, setAuthToken } from "./config/api";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export default function App() {

  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  const [admin, setAdmin] = useContext(AdminContext);
  const [login, setLogin] = useContext(LoginContext);
  // console.clear();
  // console.log(state);
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    // Redirect Auth
    if (!state.isLogin) {
      setLogin(false);
      navigate("/");
    } else {
      setLogin(true);
      if (state.user.status === "admin") {
        navigate("/");
        setAdmin(true);
      } else if (state.user.status === "customer") {
        navigate("/");
        setAdmin(false);
      }
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // Get user data
      let payload = response.data.data.user;
      // console.log(payload);
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);


    return (
      <>
        
            <ModalProvider>
              <RegisterProvider>
                <Nav/>
                <Modal/>
              </RegisterProvider>
            </ModalProvider>

                  <Routes>
                    <Route>
                      <Route exact path="/" element={ <LandingPages/> } />
                      <Route exact path="/product/:id" element={ <ProductDetail/> } />

                      <Route exact path="/" element={ <CustomerRoute />}>
                        <Route exact path="/profile/:fullname" element={ <ProfilePage/> } />
                        <Route exact path="/cart" 
                                element=
                                {<CartModalProvider>
                                  <Cart/> 
                                </CartModalProvider>}
                        />
                      </Route>

                      <Route exact path="/" element={ <AdminRoute />}>
                        <Route exact path="/addproduct" element={ <AddProduct/> } />
                        <Route exact path="/addtopping" element={ <AddTopping/> } />
                        <Route exact path="/transactions" 
                                element=
                                {
                                <TransactionModalProvider>
                                  <TransactionsTable/> 
                                </TransactionModalProvider>
                                } />
                      </Route>
                      
                    </Route>
                  </Routes>
        
      </>
    )
}

