"use client";
import React, { useState } from 'react'
type UserType ={
  name:string
}
const Page = () => {
  const [username , setUsername] = useState("");
  const [user , setUser] = useState<UserType | null>(null);
  const handleContact = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUser({name:username})
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }
  return (
    <div className='w-full h-[90vh]'>
      <div className='flex items-center justify-center h-full'>
        {user? (`Hello ${user.name}😁,Thankyou for contacting us!`) : <form className='flex flex-col border  border-gray-300 px-6 py-6 gap-y-4 rounded-md'>
          <input className='outline-none bg-gray-100 p-2 rounded-md' type="text" placeholder='Your Name' onChange={handleChange} />
          <button className='bg-green-500 py-2 rounded-md text-gray-100' onClick={handleContact}>Contact Us</button>
        </form>}
      </div>
      
    </div>
  )
}

export default Page
