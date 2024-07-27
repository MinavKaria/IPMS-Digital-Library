import React from 'react'

function Author3() {
  return (
<>
    <div className='w-full mx-auto'>
        <div className='w-full container mx-auto px-5 m-2'>
            <h1 className='text-black text-start text-4xl '>Other Details</h1>


            <form className="container flex flex-col gap-8 opacity-110 w-3/5 rounded-3xl p-6 m-2">
                <div className="input flex flex-col">
                    <label htmlFor="Title">Funding Institution</label>
                    <input placeholder="Enter Institution" type="text" className="form-control border-2 border-gray-300 rounded-md p-2 bg-slate-200"/>
                </div>
                <div className="input flex flex-col">
                    <label htmlFor="abstract">Conflict Of Interest</label>
                    <input placeholder="Enter Interest" type="text" className="form-control border-2 border-gray-300 rounded-md bg-slate-200 p-2 h-24"/>
                </div>
                <div className="input flex flex-col">
                    <label htmlFor="keywords">Submit Manuscript</label>
                    <div className="flex items-center">
                    <input placeholder="Enter Here" type="text" className="form-control border-2 border-gray-300 rounded-md p-2 bg-slate-200 flex-grow"/>
                    <input type="file" id="file" className="ml-2 p-2 bg-slate-200 border-gray-300 rounded-md cursor-pointer"/>
                    </div>
                </div>
            </form>
            <div className="flex justify-center gap-4 mt-8 mb-8">
                <button type="button" className="bg-gray-400 text-white px-4 py-2 rounded-full">
                Review </button>
                
                <button type="submit" className="bg-gray-400 text-white px-4 py-2 rounded-full">
                Submit </button>
            </div>
        </div>
    </div>
</>
  )
}
export default Author3
