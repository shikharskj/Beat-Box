import React from 'react'
import loader from '../assets/images/loader.svg'
const Loader = ({title}) => {
  return (
    <div className='w-full flex justify-center items-center flex-col py-6 mt-24'>
        <img src={loader} alt='loading' className='w-32 h-32 object-contain'/>
        <h1 className='md:text-2xl text-xl text-white mt-2'> {title || "Loading..." } </h1>
    </div>
  )
}

export default Loader