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
      <div className=' w-full md:w-[80%]  mx-auto  md:flex items-center'>
        <div className=' w-full '>
          <form  className=''>
            <div className=' flex w-full items-center gap-4 mb-8'>
              <input type="text" placeholder='Your Name' className=' w-[45%] outline-none px-3 py-3 rounded-md border-gray-200 border-[0.3px]' />
              <input type="email" placeholder='Your Email' className=' w-[45%] outline-none px-3 py-3 rounded-md border-gray-200 border-[0.3px]' />
            </div>
            <div className=' flex w-full items-center gap-4 mb-8'>
              <input type="number" placeholder='Your Phone' className='w-[45%] outline-none px-3 py-3 rounded-md border-gray-200 border-[0.3px]' />
              <input type="text" placeholder='Your Location' className='w-[45%] outline-none px-3 py-3 rounded-md border-gray-200 border-[0.3px]' />
              </div>
              
           
            <div className=' flex w-full items-center gap-4 mb-8'>
              <select className='w-[45%] outline-none text-gray-400 px-3 py-4    rounded-md  '>
                <option className=' ' >Your Service</option>
                <option >Home Cleaning</option>
                <option >Office Cleaning</option>
                <option >Kitchen Cleaning</option>
              </select>
              <input type="text" placeholder='Your Date' className='w-[45%] px-3 py-3 rounded-md outline-none border-gray-200 border-[0.3px]' />
            </div>
            <div>
              <textarea  placeholder='Your Massage...' className=' h-28 rounded-md  px-3 py-3  w-[92%] placeholder:text-gray-400 outline-none  border-[0.3px] text-lg'></textarea>
            </div>
          </form>
        </div>
        <Image src={'/contact.png'} width={600} height={600} alt='contact-img'/>
      </div>
    </div>
  )
}

export default Contact
