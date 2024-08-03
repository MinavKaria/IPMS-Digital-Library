import React from 'react'

function Contactus() {
  return (

    <>
    
    <div className=' container mx-auto px-5 font-saira mt-5 w-full'>
    <div className=' text-5xl text-gray-700 font-thin '>CONTACT US</div>
    <hr></hr>


    <div  className='flex justify-between space-x-2 mb-9 mt-5' id='form+links'>

    <div className='item w-full'>
    <form className=' flex flex-col w-2/5'>

      <div className=' flex flex-col mb-2  justify-normal p-1'>
        <input type='text' placeholder='Name' className='form-control border-2 placeholder-[#0888A5] bg-[#C9EAF2] rounded-md p-2'></input>
      </div>

      <div className=' flex flex-col mb-2 justify-normal p-1'>
        <input type='email' placeholder='Email Id' className='form-control border-2 placeholder-[#0888A5] bg-[#C9EAF2] rounded-md p-2'></input>
      </div>

      <div className=' flex flex-col mb-2 justify-normal  p-1'>
        <input type='text' placeholder='Organization Name' className='form-control border-2 placeholder-[#0888A5] bg-[#C9EAF2] rounded-md p-2'></input>
      </div>

      <div className=' flex flex-col mb-2  justify-normal  p-1'>
        <input type='text' placeholder='Subject' className='form-control border-2  placeholder-[#0888A5] bg-[#C9EAF2] rounded-md p-2'></input>
      </div>

      <div className=' flex flex-col mb-2 justify-normal p-1'>
        <input placeholder='How can we help you?' type='text' className='form-control border-2 placeholder-[#0888A5] bg-[#C9EAF2]  rounded-md p-6'></input>
      </div>
      
      <div className=' flex gap-5'>
        <input type='checkbox'></input>
        <label>I have read and accept the <a href='#' >IPMS Privacy Policy</a></label>
      </div>

      <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue transition duration-300 mt-5">
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