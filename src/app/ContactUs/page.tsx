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

  <div className='h-[90vh] flex flex-col items-center justify-center'>
    
    {user? (`Hello ${user.name}😁,Thankyou for contacting us!`) : <form className='flex flex-col border  border-gray-300 px-6 py-6 gap-y-4 rounded-md'>
      <input className='outline-none bg-gray-100 p-2 rounded-md' type="text" placeholder='Your Name' onChange={handleChange} />
      <button className='bg-green-500 py-2 rounded-md text-gray-100' onClick={handleContact}>Contact Us</button>
    </form>}
  
    <div className='mt-10 font-semibold '>
      <p >In the ever-evolving landscape of beauty, Queens stands as an emblem of elegance, empowerment, and unapologetic self-expression. From the moment you uncap their opulent packaging, you’re transported into a realm where every stroke of makeup becomes a brushstroke on the canvas of your identity.</p>
     
    </div>
  </div>


  )
}
/**
 * <div className='  h-[90vh]'>
      <div className='flex items-center justify-center h-full'>
        {user? (`Hello ${user.name}😁,Thankyou for contacting us!`) : <form className='flex flex-col border  border-gray-300 px-6 py-6 gap-y-4 rounded-md'>
          <input className='outline-none bg-gray-100 p-2 rounded-md' type="text" placeholder='Your Name' onChange={handleChange} />
          <button className='bg-green-500 py-2 rounded-md text-gray-100' onClick={handleContact}>Contact Us</button>
        </form>}
      </div>
      
    </div>
 */
export default Page
