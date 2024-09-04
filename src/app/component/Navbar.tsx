import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-16 w-full shadow-md shadow-gray-300 border-b border-gray-300 flex items-center rounded-md'>

        <div className='flex justify-between mx-6 w-full'>
            <div>Queens</div>
            <div className='flex gap-x-6'>

              <Link href={"/"}><p>Home</p></Link>
              <Link href={"/write"}><p>Write</p></Link>
              <Link href={"/ContactUs"}><p>Contact</p></Link>
              <Link href={"/themeContextApi"}>⭐</Link>

            </div>
        </div>
      
    </div>
  )
}

export default Navbar