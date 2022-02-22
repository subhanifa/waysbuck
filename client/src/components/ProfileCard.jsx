import React from 'react'
import { UserImg } from '../exports/exportImage'

export default function ProfileCard() {
  return (
    <div className="flex">
        <div className="mr-4 lg:mr-8">
            <img src={UserImg} alt="" />
        </div>
        <div className="space-y-4">
            <p className="text-yellow-700 font-bold">Full Name</p>
            <p>Subhan Hanifa</p>
            <p className="text-yellow-700 font-bold">Email</p>
            <p>subhanifa@mail.com</p>
        </div>
    </div>
  )
}
