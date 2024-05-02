import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div  id='contact' className= ' w-full bg-blue-50 mt-4 pb-32'>
       <div className=" w-[80%] mx-auto       ">
        <h3 className=" text-blue-600 font-light mt-28 inline-block  tracking-wider">CONTACT US</h3>
        <div className=' max-w-[400px]'>
          <h4 className="text-blue-600 leading-[1.5]  tracking-wide  font-normal text-3xl capitalize mb-2 mt-5">
          Any Help To Contact Us In Cleaning Service
          </h4> 
        </div>
      </div>
      <div className=' w-full md:w-[80%] flex-col  mx-auto  md:flex md:flex-row items-center'>
        <div className=' w-full mt-10 '>
          <form  className=''>
            <div className=' flex-col  flex px-2  md:flex-row w-full items-center gap-4 mb-4 md:gap-4 md:mb-8'>
              <input type="text" placeholder='Your Name' className=' w-full md:w-[45%] outline-none px-3 py-3 rounded-md border-gray-200 border-[0.3px] ' />
              <input type="email" placeholder='Your Email' className=' w-full md:w-[45%] outline-none px-3 py-3 rounded-md border-gray-200 border-[0.3px]' />
            </div>
            <div className=' flex flex-col px-2 md:flex-row  w-full items-center gap-4 mb-4 md:gap-4 md:mb-8'>
              <input type="number" placeholder='Your Phone' className=' w-full md:w-[45%] outline-none px-3 py-3 rounded-md border-gray-200 border-[0.3px]' />
              <input type="text" placeholder='Your Location' className=' w-full  md:w-[45%] outline-none px-3 py-3 rounded-md border-gray-200 border-[0.3px]' />
              </div>
              
           
            <div className=' flex flex-col px-2 md:flex-row w-full items-center gap-4 mb-4  md:gap-4 md:mb-8'>
              <select className=' w-full md:w-[45%] outline-none text-gray-400 px-3 py-4    rounded-md  '>
                <option className=' ' >Your Service</option>
                <option >Home Cleaning</option>
                <option >Office Cleaning</option>
                <option >Kitchen Cleaning</option>
              </select>
              <input type="text" placeholder='Your Date' className=' w-full md:w-[45%] px-3 py-3 rounded-md outline-none border-gray-200 border-[0.3px]' />
            </div>
            <div className=' w-full px-2'>
              <textarea  placeholder='Your Massage...' className=' h-28 rounded-md w-full  px-3 py-3  md:w-[92%] placeholder:text-gray-400 outline-none  border-[0.3px] text-lg'></textarea>
            </div>
            <div className=' w-full  ml-2 mt-6'>
              <button className=' bg-blue-800 text-white px-6 py-3 border-yellow-300 border-[4px] hover:bg-yellow-300 hover:text-blue-800 duration-300'>Send Message</button>
            </div>
          </form>
        </div>
        <Image src={'/contact.png'} width={600} height={600} alt='contact-img'/>
      </div>
    </div>
  )
}

export default Contact
