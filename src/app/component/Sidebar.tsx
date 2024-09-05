"use client";
import React, { useState } from 'react'
import "@/styles/app.scss"
import Link from 'next/link'
import Image from 'next/image';
const Sidebar = () => {
    const [open , setOpen] = useState(true);
    const toggleMenuHandler = () => {
        setOpen(!open)
    }
  return (
    <div className="sidebar">
        <div className='menu' onClick={toggleMenuHandler}>
            <Image src={"/hamburgerMenu.png"} alt='arrow' width={30} height={10}/>
        </div>
        <div className={`${open? "sidebar_components": "sidebarComponents_close"}`}>
            <Link href={"/"}><p>Home</p></Link>
            <Link href={"/themeContextApi"}><p>Theme</p></Link>
            <Link href={"/write"}><p>Write</p></Link>
            <Link href={"/ContactUs"}><p>contact</p></Link>
        </div>
    </div>
    
  )
}

export default Sidebar
