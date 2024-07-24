import React from 'react'
import '../styles/Landing.css'
import Search from '../components/Search'

function Landing() {
  return (
    <>
      <div className='landing'>
          <div className='flex justify-center items-center h-full text-white flex-col'>
              <h1 className='font-saira text-[2.25rem]'>Search</h1>
              <h1 className='font-saira text-[1.125rem]'>with</h1>
              <h1 className='font-saira  text-[3.5rem]'>IPMS Digital Library</h1>
              <Search/>
              
          </div>
          <div>
             
          </div>
      </div>
    </>
  )
}

export default Landing