import React from 'react'

const Blog = () => {
  return (
    <div id='blog' className=' mt-20'> 
     <div className=" flex flex-col  max-w-[480px] mx-auto  mt-5 items-center justify-between">
        <h3 className=" text-blue-600 font-light tracking-wider">BLOG</h3>
        <div>
          <h4 className="text-blue-600 leading-[1.5]  tracking-wide text-center font-normal text-3xl capitalize mt-5">
          Recent News
          </h4> 
        </div>
      </div>
    </div>
  )
}

export default Blog
