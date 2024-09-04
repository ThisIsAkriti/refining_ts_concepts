import React from 'react'

const Cards = (props: PropType) => {
  return (
    <div className='flex flex-col gap-x-4 md:mx-10 mx-20 my-4 justify-center items-center border border-gray-400 shadow-gray-600 shadow-md py-8 rounded-lg'>
      <h1 className='font-semibold text-xl mb-2'>{props.title}</h1>
      <p className=' w-3/4 text-center'>{props.description}</p>
    </div>
  )
}

export default Cards
