import React from 'react'

function FeaturedCard({text, image, title}) {
  return (
    <>
         <div className=' bg-[#0888A5] bg-opacity-20 border-cyan-100 border-2 flex flex-col justify-center items-center p-3 rounded-2xl '>
                <img src={image} alt="" className='w-[80%] h-full object-cover object-center rounded-3xl max-h-60'/>
                <p className='p-5 w-[80%] min-h-24'>{text.length > 100 ? `${text.slice(0, 100)}...` : text}</p>
            <div className='self-end px-5 text-blue-500 cursor-pointer'>Read More {'>'}</div>
            </div>
    </>
  )
}

export default FeaturedCard