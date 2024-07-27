import React from 'react'

function FeaturedAuthor({text, image, title}) {
  return (
    <>
         <div className=' bg-[#0888A5] bg-opacity-20 border-cyan-100 border-2 flex flex-col justify-center items-center p-5 rounded-2xl min-h-80'>
                <img src={image} alt="" className='w-[80%] h-full object-cover object-center rounded-full'/>
                <p className='p-5 w-[80%]'>{text.length > 100 ? `${text.slice(0, 100)}...` : text}</p>
            <div className='self-end px-5 text-blue-500 cursor-pointer'>Follow {'>'}</div>
            </div>
    </>
  )
}

export default FeaturedAuthor