"use client"
import React, { useContext } from 'react'
import { ThemeContext } from '../component/ThemeContext'

const UseContextSample = () => {
  const {state , dispatch} = useContext(ThemeContext);
  console.log(state)
  return (
    <div className='w-full h-[88vh] flex flex-col justify-center items-center'>
      <button className='bg-gradient-to-tr from-pink-700 to-blue-700 text-white p-4 rounded-lg mb-4' onClick={() => dispatch({type:"ChangeTheme"})}>Change Theme</button>
      <button className='bg-gradient-to-tr from-gray-600 to-green-700 text-white p-4 rounded-lg mb-4'onClick={() => dispatch({type:"ChangeFont" , payload:20})}>Change Font</button>
    </div>
  )
}

export default UseContextSample
