  import React, { useContext, useState } from 'react'
import ProfileCard from '../components/ProfileCard'
import TransactionCard from '../components/TransactionCard'
import { UserContext } from '../contexts/UserContext'
  
  export default function ProfilePage() {

    // const [ user, setUser ] = useState({})
    // const getUser = async (id) => {
    //   try {
    //     const response = await API.get('/user');
    //     setUser(response.data.data.user)
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

    return (
      <div className="lg:flex justify-between mx-4 my-6 md:mx-20 md:my-16 lg:mx-40 xl:mx-32">

            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                <h3 className="text-3xl font-['Avenir-Black'] font-extrabold text-red-700 mb-8">
                My Profile
                </h3>
            <div className='rounded-lg'>
                <ProfileCard />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-['Avenir-Black'] font-extrabold text-red-900">
                    My Transaction
                </h3>
                <div className="justify-between my-8 bg-red-200 rounded-lg p-4 lg:p-6 lg:flex">
                    <TransactionCard />
                </div>
          </div>

      </div>
    )
  }
  