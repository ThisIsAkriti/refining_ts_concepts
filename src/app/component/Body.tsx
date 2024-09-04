import React from 'react'
import Cards from './Cards'
import cardData from "@/utils/data.json"
const Body = () => {
  return (
    <>
    <h1 className='text-3xl font-bold text-center my-6'>Unleash Your Beauty, Unveil Your Grace</h1>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-col-1'>
      {cardData.info.map((data)=>{
        return <Cards key={data.id} {...data} />
      })}
    </div>
    </>
  )
}

export default Body
