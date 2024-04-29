import React from 'react'
import { IoIosPlay } from 'react-icons/io'

const PlayBtn = () => {
  return (
    <button className='px-7 bg-blue-800 text-white duration-200 hover:text-blue-800 hover:bg-yellow-300 rounded-sm border-yellow-300 border-[4px]  py-4'>
     <IoIosPlay className='   text-xl' />
    </button>
  )
}

export default PlayBtn
