import React from 'react'

function Conference() {
  return (
    <>
        <div className="flex flex-col w-full">
              <div className="flex bg-slate-200 p-6 rounded-2xl gap-7 w-full">
                <div className="flex justify-center flex-col items-center">
                  <div className="text-4xl text-[#0888A5]">24 Jun - 27 Jun</div>
                  <div className=" font-bold">Mumbai, India</div>
                </div>
                <div className="flex justify-between flex-1 items-center">
                  <div>
                  <h1 className=" text-4xl">Conference on Computer Vision and Pattern Recognition</h1>
                  <div className="text-[#0888A5] font-semibold">Know More</div>
                  </div>

                  <div className=" font-bold text-2xl text-[#0888A5]">Register</div>
                </div>
              </div>
            </div>
    </>
  )
}

export default Conference