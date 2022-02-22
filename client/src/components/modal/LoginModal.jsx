import React, {useContext, useState} from 'react'
import { Dialog } from '@headlessui/react'
import { AdminContext, LoginContext, RegisterContext } from '../../contexts/AuthContext'
import { ModalContext } from '../../contexts/ModalContext'
import { UserContext } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import { API } from "../../config/api";


export default function LoginModal() {
    let navigate = useNavigate();

    const [ open, setOpen ] = useContext(ModalContext)
    const [ login, setLogin ] = useContext(LoginContext)
    const [ register, setRegister ] = useContext(RegisterContext)

    const [ admin, setAdmin ] = useContext(AdminContext);
    const [ state, dispatch ] = useContext(UserContext);

    const [ message, setMessage ] = useState(null);
    const [ form, setForm ] = useState({
        email: "",
        password: "",
    });

    const { email, password } = form;

    const handleChange = (e) => {
        setForm({
        ...form,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        try {
          e.preventDefault();
    
          // Configuration
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
    
          // Data body
          const body = JSON.stringify(form);
    
          // Insert data for login process
          const response = await API.post("/login", body, config);
    
          // Checking process
          if (response?.status === 200) {
            // Send data to useContext
            dispatch({
              type: "LOGIN_SUCCESS",
              payload: response.data.data.user,
            });
    
            setOpen(false);
            // Status check
            if (response.data.data.user.status === "admin") {
              navigate("/");
              setAdmin(true);
            } else {
              navigate("/");
              setAdmin(false);
              console.log(response);
              // console.log(response);
            }
    
            // const alert = (
            //   <Alert variant="success" className="py-1">
            //     Login success
            //   </Alert>
            // );
            // setMessage(alert);
          }
          } catch (error) {
            const alert = (
              <div
                className="flex items-center text-red-500 border border-red-500 rounded-lg py-2 text-md justify-center font-bold"
                role="alert"
              >
                <p>Failed to login. Try Again</p>
              </div>
            );
            setMessage(alert);
            console.log(error);
          }
      };
    

    return (
        <>
            <Dialog.Title as="h3" className=" text-2xl font-bold text-red-700">
                Login
            </Dialog.Title>
            {message && message}
            <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <input
                // id="email-address"
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-2 border-2 border-red-700 bg-red-50 placeholder-gray-500 rounded-md focus:outline-none  focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                />
            </div>
            <div>
                <input
                // id="password"
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-2 border-2 border-red-700 bg-red-50 placeholder-gray-500 rounded-md focus:outline-none  focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                />
            </div>
            <div>
                <button 
                type="submit" 
                className=' bg-red-700 w-full text-white px-4 py-2 font-semibold rounded'
                >
                    Sign In
                </button>
            </div>
            <p className='text-center'>Don't have an account ? Click <button onClick={() => setRegister(!register)} className='font-bold'>Here</button></p>
            </form>
        </>
        
    )
}
