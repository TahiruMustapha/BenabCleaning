import React from 'react'
import { IoArrowForwardCircle } from 'react-icons/io5'

const GetStarted = () => {
  return (
    <button className=' mt-6 mb-5  py-3 px-8 text-blue-800 text-lg bg-yellow-300 hover:bg-blue-800 hover:border-yellow-300 border-[4px]   border-transparent duration-200 hover:text-white flex items-center gap-1 rounded-3xl'>
      Get Started <IoArrowForwardCircle className=' text-lg' />
    </button>
  )
}

export default GetStarted
