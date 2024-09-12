import React from 'react'


function Editor2() {
    return (
       <>
       <div className='w-full'>
         <div className="container mx-auto px-5">
         <h1 className="text-black text-5xl font-semibold mb-1 mt-3">Reviewer Details</h1>
         <h1 className="text-black text-2xl font-semibold">Primary Reviewer Details</h1>
          <form className="container  flex flex-col gap-8 opacity-110  rounded-3xl " onSubmit={(e)=>{
            e.preventDefault()
          }}>
            <div className=" ">
              <div className="flex flex-row  mt-10">
                <div className="w-1/2">
                  <p className="text-lg text-cyan-700 mb-2">Reviewer Email ID</p>
                  <input
                    type="text"
                    className="bg-gray-300 w-7/12 h-10 p-2 rounded-lg"
                    placeholder="Reviewer 1"
                  />
                </div>
                <div className="w-1/2">
                  <p className="text-lg text-cyan-700 mb-2">
                    Retrieve Details
                  </p>
                  <input
                    type="text"
                    className="bg-gray-300 w-7/12 h-10 p-2 rounded-lg"
                    placeholder="--"
                  />
                </div>
              </div>
  
              <div className="flex flex-row mt-10">
                <div className="w-1/2">
                  <p className="text-lg text-cyan-700 mb-2">Reviewer name</p>
                  <input
                    type="text"
                    className="bg-gray-300 w-7/12 h-10 p-2 rounded-lg"
                    placeholder="Reviewer 1"
                  />
                </div>
                <div className="w-1/2">
                  <p className="text-lg text-cyan-700 mb-2">
                    Reviewer contact number
                  </p>
                  <input
                    type="text"
                    className="bg-gray-300 w-7/12 h-10 p-2 rounded-lg"
                    placeholder="Reviewer 1"
                  />
                </div>
              </div>
  
              <div className="flex flex-row mt-10">
                <div className="w-1/2">
                  <p className="text-lg text-cyan-700 mb-2">Reviewer Institution</p>
                  <input
                    type="text"
                    className="bg-gray-300 w-7/12 h-10 p-2 rounded-lg"
                    placeholder="Reviewer 1"
                  />
                </div>
                <div className="w-1/2">
                  <p className="text-lg text-cyan-700 mb-2">
                  Reviewer Affiliation
                  </p>
                  <input
                    type="text"
                    className="bg-gray-300 w-7/12 h-10 p-2 rounded-lg"
                    placeholder="Reviewer 1"
                  />
                </div>
              </div>

              <div className="flex justify-center mt-20">
                <button className="text-sm bg-blue-300  px-6 py-2 rounded-full">
                  Assign Reviewer
                </button>
                <button className="text-sm bg-gray-400 px-6 py-2 ml-5 rounded-full">
                  Add Reviewer
                </button>
              </div>
             </div>
          </form>
        </div>
        <br />
        <br />
        </div>
      </>
    )
  }
  
  export default Editor2