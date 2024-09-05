"use client"
import React, { useContext } from 'react'
import { ThemeContext } from '../component/ThemeContext'
import "@/styles/app.scss"
const UseContextSample = () => {
  const {state , dispatch} = useContext(ThemeContext);
  console.log(state)
  return (
    <div>
    <div className='w-full h-[40vh] flex flex-col justify-center items-center'>
      <button className='bg-gradient-to-tr from-pink-700 to-blue-700 text-white p-4 rounded-lg mb-4' onClick={() => dispatch({type:"ChangeTheme"})}>Change Theme</button>
      <button className='bg-gradient-to-tr from-gray-600 to-green-700 text-white p-4 rounded-lg mb-4'onClick={() => dispatch({type:"ChangeFont" , payload:20})}>Change Font</button>
    </div>
    <div className='container'>
      <button className='button_Sass' >Hey Sass button!</button>
      <h1>Hey Sass heading</h1>
      <p>Hey Sass pTag</p>
    </div>
    </div>
  )
}

export default UseContextSample
