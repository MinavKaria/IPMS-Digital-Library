import React from 'react'

export default function Author1() {
  return (
    <>
    <div className='w-full mx-auto'>
    <div className='w-full container mx-auto px-5 m-2'>
        <h1 className='text-black text-center text-4xl '>
          Paper Details</h1>
  <form
   className="container  flex flex-col gap-8 opacity-110 w-3/5 rounded-3xl p-6 m-2" >
      <div className='input flex flex-col'>
     
        <label htmlFor='Title'>Title</label>
        <input
        placeholder='Enter Title'
        type='text'
        className='form-control border-2 border-gray-300 rounded-md p-2
       bg-slate-200'/>
      </div>
        <div className='input flex flex-col'>
          <label htmlFor='abstract'>Abstract</label>
          <input
          placeholder='Enter Abstract'
           type='text'
           className='form-control border-2 border-gray-300 rounded-md 
          bg-slate-200
          p-2
          h-20
          w-15'
          />
        </div>
        <div className='input flex flex-col'>
          <label htmlFor='keywords'>Keywords</label>
          <input
          placeholder='Enter Keywords'
          type='text'
          className='form-control border-2 border-gray-300 rounded-md p-2
         bg-slate-200'
          />
        </div>
        <div className='input flex flex-col'>
          <label htmlFor='subject-area'>Subject</label>
          <input
          placeholder='Enter Subject'
           type='text'
           className='form-control border-2 border-gray-300 rounded-md p-2
          bg-slate-200'
          />
        </div>
        <div className='input flex flex-col'>
          <label htmlFor='Citation'>Citation</label>
          <input
          placeholder='Enter Citation'
           type='text'
           className='form-control border-2 border-gray-300 rounded-md p-2
          bg-slate-200'
          />
        </div>
      </form>
      <div className="flex items-center justify-center mt-4">
      <span className="mr-2">Page 1 of 2</span>

    </div>
    </div>
    </div>
    </>
  )
}
