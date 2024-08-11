import React from 'react'


function Editor2() {
    return (
       <>
         <div className="container mx-auto px-4">
         <h1 className='text-start text-4xl mb-1 m-10'>
              Reviewer Details
          </h1>
          <h2 className='text-start text-2xl mb-1 m-10'>
              Primary Reviwer Details
          </h2>
          <form className="container  flex flex-col gap-8 opacity-110  rounded-3xl p-6 m-2" onSubmit={(e)=>{
            e.preventDefault()
          }}>
            <div className="container mx-auto px-4">
              <div className="flex flex-row m-4 mt-10">
                <div className="w-1/2">
                  <p className="text-lg text-cyan-400 mb-2">Reviewer Email ID</p>
                  <input
                    type="text"
                    className="bg-gray-300 w-7/12 h-10 p-2 rounded-lg"
                    placeholder="Reviewer 1"
                  />
                </div>
                <div className="w-1/2">
                  <p className="text-lg text-cyan-400 mb-2">
                    Retrieve Details
                  </p>
                  <input
                    type="text"
                    className="bg-gray-300 w-7/12 h-10 p-2 rounded-lg"
                    placeholder="--"
                  />
                </div>
              </div>
  
              <div className="flex flex-row m-4 mt-10">
                <div className="w-1/2">
                  <p className="text-lg text-cyan-400 mb-2">Reviewer name</p>
                  <input
                    type="text"
                    className="bg-gray-300 w-7/12 h-10 p-2 rounded-lg"
                    placeholder="Reviewer 1"
                  />
                </div>
                <div className="w-1/2">
                  <p className="text-lg text-cyan-400 mb-2">
                    Reviewer contact number
                  </p>
                  <input
                    type="text"
                    className="bg-gray-300 w-7/12 h-10 p-2 rounded-lg"
                    placeholder="Reviewer 1"
                  />
                </div>
              </div>
  
              <div className="flex flex-row m-4 mt-10">
                <div className="w-1/2">
                  <p className="text-lg text-cyan-400 mb-2">Reviewer Institution</p>
                  <input
                    type="text"
                    className="bg-gray-300 w-7/12 h-10 p-2 rounded-lg"
                    placeholder="Reviewer 1"
                  />
                </div>
                <div className="w-1/2">
                  <p className="text-lg text-cyan-400 mb-2">
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
      </>
    )
  }
  
  export default Editor2