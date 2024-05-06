import Image from 'next/image'
import React from 'react'

const Call = () => {
  return (
    <div className=' w-full py-20 md:py-0 px-2 md:px-3  mt-24 bg-blue-50'>
      <div className=' flex w-full items-center justify-end'>
      <div className=' text-center'>
      <h2 className=' text-blue-800 mb-10 text-2xl capitalize'>Just give us a call</h2>
      <p className=' text-base mb-10 text-gray-400'>If You Have any Problem Contact Us Immidiately Take Support +66541235</p>
      <button className=" bg-blue-800  text-white px-8 py-3 border-yellow-300 border-[4px] hover:bg-yellow-300 hover:text-blue-800 duration-300">
              Appointment
            </button>
      </div>
     <Image src={'/team2.jpg'} alt='img' width={400} height={400} className=' hidden md:inline-flex'/>
      </div>
     

    </div>
  )
}

export default Call
