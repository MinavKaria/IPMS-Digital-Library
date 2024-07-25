import React from 'react'

export default function Author1() {
  return (
    <>
    <div className='w-full'>
    <div className='w-full container mx-auto px-5 ' >
        <h1 className='text-black text-center  '>Paper Details</h1>
      <div className='input flex flex-col'>
        <label htmlFor='Title'>Title</label>
        <input
        type='text'
        />
      </div>
      <div className='input flex flex-col'>
        <label htmlFor='Title'>abstract</label>
        <input
        type='text'
        />
      </div>
      <div className='input flex flex-col'>
        <label htmlFor='Title'>keywords</label>
        <input
        type='text'
        />
      </div>
      <div className='input flex flex-col'>
        <label htmlFor='Title'>subject area</label>
        <input
        type='text'
        />
      </div>
    </div>
    </div>
    </>
  )
}
