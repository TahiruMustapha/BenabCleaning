import React from 'react'

const NewsLetter = () => {
  return (
    <div className=  'bg-blue-50 px-2 md:px-0 h-[40vh] mt-12 pb-32' >
      <div className=' w-full  h-[40vh] flex flex-col md:flex-row items-center gap-10 md:gap-16 justify-center md:justify-end '>
        <p className=' text-3xl  md:tracking-wide text-gray-500 text-center'>Subcribe Today of Newletter</p>
        <div className=' w-full md:w-[45%] relative md:mr-14 '>
            <input type="email" placeholder='Your Email' className=' text-gray-400 py-[0.70rem] outline-none px-4 border-gray-200 rounded-md w-full md:w-[90%] border-[0.3px]' />
            <button className=' bg-blue-900 absolute right-2 md:right-[4.2rem] top-[0.40rem] md:top-2 text-white px-3 py-[0.30rem] rounded-md hover:bg-yellow-400 hover:text-black duration-300'>Suscribe</button>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
