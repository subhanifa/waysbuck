import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'flowbite';
import App from './App';
import { AdminProvider, LoginProvider } from "./contexts/AuthContext";
import { UserProvider } from './contexts/UserContext';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom"
import { OrderProvider } from './contexts/OrderContext';


ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <AdminProvider>
        <LoginProvider>
          <OrderProvider>
            <Router>
              <App />
            </Router>
          </OrderProvider>
        </LoginProvider>
      </AdminProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
