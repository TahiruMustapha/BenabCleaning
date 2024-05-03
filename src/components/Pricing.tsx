import React from 'react'

const Pricing = () => {
  return (
    <div id='pricing' className=' w-[80%] mx-auto'>
      <div className=" w-full   mx-auto flex flex-col items-center justify-center       ">
        <h3 className=" text-blue-600 font-light mt-28 inline-block  tracking-wider">PRICING</h3>
        <div className=' max-w-[400px]'>
          <h4 className="text-blue-600 leading-[1.5]  tracking-wide  font-normal text-2xl md:text-3xl capitalize mb-2 mt-5">
          Flexible Plans
          </h4> 
        
        </div>
        <div className=' flex items-center  border-gray-200 border-[0.4px] px-3 py-1 rounded-md'>
            <button className=' bg-red-700 rounded-md px-6 py-3 text-white'>Monthly</button>
            <button className=' text-blue-800 ml-4'>Yearly</button>
            <button className=' bg-blue-900 ml-1 text-white px-2 mr-5 text-sm rounded-md py-[0.10rem]'>20% Off</button>
          </div>
      </div>
    </div>
  )
}

export default Pricing
