import React, { useContext, useEffect, useState } from 'react'
import { UserImg } from '../exports/exportImage'
import { API } from '../config/api'
import { UserContext } from '../contexts/UserContext'


export default function ProfileCard() {

  const [ state, dispatch ] = useContext(UserContext)
    const [ user, setUser ] = useState({})
    const getUser = async () => {
      try {
        const response = await API.get('/user/' + state.user.id);
        setUser(response.data.data.user)
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      getUser();
      return () => 
      {setUser({})};
  }, [])
  
  return (
    <div className="flex">
        <div className="mr-4 lg:mr-8">
            <img src={UserImg} alt="" />
        </div>
        <div className="space-y-4">
            <p className="text-yellow-700 font-bold">Full Name</p>
            <p>{user.fullname}</p>
            <p className="text-yellow-700 font-bold">Email</p>
            <p>{user.email}</p>
        </div>
    </div>
  )
}
