import React from 'react'

function Contactus() {
  return (

    <>
    <div className=' w-full '>
    <div className=' container mx-auto px-5 font-saira mt-5'>
    <div className=' text-5xl text-gray-700 font-thin '>CONTACT US</div>
    <form className=' flex flex-col'>
      <div className=' flex flex-col bg-blue-200 justify-normal w-2/5'>
        <label>Name</label>
        <input type='text'></input>
      </div>
      <div>
        <label>Email Id</label>
        <input type='text'></input>
      </div>
      <div>
        <label>Organization Name</label>
        <input type='text'></input>
      </div>
      <div>
        <label>Subject</label>
        <input type='text'></input>
      </div>
      <div>
        <label>how can we help you?</label>
        <input type='text'></input>
      </div>
      
      
    </form>

    </div>
    </div>
    
    </>
  )
}

export default Contactus