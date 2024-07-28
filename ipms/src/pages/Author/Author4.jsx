import React from "react";

function Author4() {
  return (
    <>
      <div className="container mx-auto px-4 grid grid-cols-3 gap-4 h-screen font-saira mt-5">
        <div className="col-span-2 h-full overflow-y-scroll pr-5">
          <h1 className="text-black text-5xl font-semibold">Dashboard</h1>
          <form className="flex flex-col gap-8 opacity-110 rounded-3xl " onSubmit={(e)=>{
            e.preventDefault()
          }}>
            <div className="flex flex-row mt-10">
              <div className="w-2/4">
                <label className="bg-slate-300 p-5 h-10 rounded-3xl flex items-center justify-between">
                  <span>Your submission is under review</span>
                  <button className="bg-white text-grey border-black px-4 rounded">
                    View
                  </button>
                </label>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="w-full">
                <div className="bg-slate-300 p-5 h-auto rounded-3xl">
                  <div className="mb-4 flex">
                    <div className="bg-white text-grey border-black rounded-xl px-4">
                      12-02-2023
                    </div>
                    <div className="bg-white text-grey w-15 px-4 rounded-xl ml-4">
                      <b>Paper ID:</b> 12144345
                    </div>
                    
                  </div>
                  <div className="mb-4">
                    <label className="block bg-white text-grey px-4 rounded-xl">
                      <b>Title:</b> New Quantum effect on surroundings.
                      Experimental Data acquiring using atomic frequency and
                      oscillations.
                    </label>
                  </div>
                  <div className="mb-4">
                    <label className="block px-4 bg-white text-grey rounded-xl">
                      <b>Author:</b> Ragnunath P. Patil, Satnam Shinde
                    </label>
                  </div>
                  <div className="mb-4">
                    <label className="block bg-white text-grey px-4 rounded-xl">
                      <b>Co-Author:</b> Ananya P. Patil, Harsh Thakur
                    </label>
                  </div>
                  <div className="mb-4">
                    <label className="block bg-white text-grey px-4 rounded-xl">
                      <b>Abstract:</b> Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Sed egestas gravida tellus, et
                      consectetur sem interdum at. Nullam lectus quam, hendrerit
                      ut ante sit amet, fringilla pellentesque sapien. Aliquam
                      ut ante non ante egestas faucibus sed sit amet odio.
                      Aenean nunc ante, sodales sed.
                    </label>
                  </div>
                  <div>
                    <label className="block bg-white text-grey px-4 rounded-xl">
                      <b>Keywords:</b> Machine learning, Artificial
                      intelligence, quantum mechanics, atomic frequency,
                      chemistry
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="col-span-1">
          <div className="flex flex-col gap-8 opacity-110 rounded-3xl p-6 m-2">
            <div className="bg-slate-300 h-20 p-5 rounded-lg flex items-center justify-between">
              <button className="bg-white text-grey border-black px-4 rounded">
                Edit
              </button>
              <button className="bg-white text-grey border-black px-4 rounded">
                Request Changes
              </button>
              <button className="bg-white text-grey border-black px-4 rounded">
                Add New Paper
              </button>
            </div>

            <div className="bg-slate-300 p-5 h-auto rounded-3xl">
              <div className="mb-4">
                <h2 className="text-lg font-bold">Reviews</h2>
              </div>
              <div className="flex justify-between items-center bg-white text-grey px-4 py-2 rounded-xl">
                <span>12-02-2023</span>
                <button className="bg-white text-grey border-black px-4 rounded">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Author4;
