import React from 'react'

function Contactus() {
  return (

    <>
    
    <div className=' container mx-auto px-5 font-saira mt-5 w-full'>
    <div className=' text-5xl text-gray-700 font-thin '>CONTACT US</div>
    <hr></hr>


    <div  className='flex justify-between space-x-2 mb-9 mt-5' id='form+links'>

    <div className='item'>
    <form className=' flex flex-col'>

      <div className=' flex flex-col mb-2 bg-blue-200 justify-normal w-5/5 p-1'>
        <label>Name</label>
        <input type='text' className='form-control border-2 border-gray-400 rounded-md p-2'></input>
      </div>

      <div className=' flex flex-col mb-2 bg-blue-200 justify-normal w-5/5 p-1'>
        <label>Email Id</label>
        <input type='email' className='form-control border-2 border-gray-400 rounded-md p-2'></input>
      </div>

      <div className=' flex flex-col mb-2 bg-blue-200 justify-normal w-5/5 p-1'>
        <label>Organization Name</label>
        <input type='text' className='form-control border-2 border-gray-400 rounded-md p-2'></input>
      </div>

      <div className=' flex flex-col mb-2 bg-blue-200 justify-normal w-5/5 p-1'>
        <label>Subject</label>
        <input type='text' className='form-control border-2 border-gray-400 rounded-md p-2'></input>
      </div>

      <div className=' flex flex-col mb-2 bg-blue-200 justify-normal w-5/5 p-1'>
        <label>how can we help you?</label>
        <input type='text' className='form-control border-2 border-gray-400 rounded-md p-6'></input>
      </div>
      
      <div id='policy'>
        <input type='checkbox'></input>
        <label>I have read and accept the <a href='#' >IPMS Privacy Policy</a></label>
      </div>

      <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue transition duration-300">
          Submit
      </button>

    </form>
    
    </div>

    <div className='item flex flex-col' id='links'>
      <div className='text-3xl'>
        <h1>Helpul Links</h1>
      </div>
      <hr></hr>
      <div className='m-4'>
        <a href='#'>Resources and help</a>
      </div>
      <hr></hr>
      <div className='m-4'>
        <a href='#'>Traininng and User Tips</a>
      </div>
      <hr></hr>
      <div className='m-4'>
        <a href='#'>Report Misuse</a>
      </div>
      <hr></hr>
      <div className='m-4'>
        <a href='#'>Media Inquiries</a>
      </div>
      <hr></hr>
    </div>
    

    </div>

   </div>
    
    </>
  )
}

export default Contactus