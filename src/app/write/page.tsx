'use client'
import React from 'react'

const page = () => {
  
  const handleClickPost = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("posted")
  }

  const handleChangeText = (e:React.ChangeEvent<HTMLInputElement>) =>{
    console.log(e.target.value)
  }

  const handleDelete = (e:React.MouseEvent<HTMLButtonElement> , id:number) => {
    e.preventDefault()
    console.log(`Post ${id} has been deleted!`)
  }

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='flex flex-col justify-center items-center w-4/5' >
        <form className=' w-4/5 grid grid-cols-5 gap-x-2 mb-10'>
          <input className=' outline-none py-2 px-2 bg-gray-50 border border-gray-400 rounded-md col-span-4' type="text" placeholder='Write anything' onChange={handleChangeText} />
          <button className='border border-gray-400 px-4 py-2 rounded-md' onClick={handleClickPost}>Post</button>
        </form>
       
        <div className='w-4/5'>
          <p className='font-bold text-3xl mb-3'>Where Beauty Reigns Supreme</p>
          <p className=''>In the ever-evolving landscape of beauty, Queens stands as an emblem of elegance, empowerment, and unapologetic self-expression. From the moment you uncap their opulent packaging, you’re transported into a realm where every stroke of makeup becomes a brushstroke on the canvas of your identity.</p>
          <button onClick={(e) => handleDelete(e,1)} className='bg-red-600 px-6 py-2 mt-4 rounded-md text-gray-100' >Delete</button>
        </div>
      </div>
    </div>
  )
}

export default page
