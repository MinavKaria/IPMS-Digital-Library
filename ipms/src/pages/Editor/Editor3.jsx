import React from 'react';

function Editor3() {
  return (
    <div className='container mx-auto'>
        <h1 className='text-start text-4xl m-10'>
            Dashboard
        </h1>
        <div className="flex flex-row m-10">
            <div className="w-1/2  pr-5" style={{ width: '60%' }}>
                <div className="p-5 h-auto rounded-3xl" style={{ backgroundColor: '#FDE49B',height:'400px' }}>
                    <div className="mb-4">
                        <label className="bg-white text-gray-700 border border-black rounded-xl px-4 m-5">12-02-2023</label>
                        <label className="bg-white text-gray-700 w-15 px-4 rounded-xl ml-4"><b>Paper ID:</b> 12144345</label>
                    </div>
                    <div className="mb-4 m-5">
                        <label className="block bg-white text-gray-700 px-4 rounded-xl"><b>Title:</b> New Quantum effect on surroundings. Experimental Data acquiring using atomic frequency and oscillations.</label>
                    </div>
                    <div className="mb-4 m-5">
                        <label className="block px-4 bg-white text-gray-700 rounded-xl"><b>Author:</b> Ragnunath P. Patil, Satnam Shinde</label>
                    </div>
                    <div className="mb-4 m-5">
                        <label className="block bg-white text-gray-700 px-4 rounded-xl"><b>Co-Author:</b> Ananya P. Patil, Harsh Thakur</label>
                    </div>
                    <div className="mb-4 m-5">
                        <label className="block bg-white text-gray-700 px-4 rounded-xl"><b>Abstract:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas gravida tellus, et consectetur sem interdum at. Nullam lectus quam, hendrerit ut ante sit amet, fringilla pellentesque sapien. Aliquam ut ante non ante egestas faucibus sed sit amet odio. Aenean nunc ante, sodales sed.</label>
                    </div>
                    <div className='m-5'>
                        <label className="block bg-white text-gray-700 px-4 rounded-xl"><b>Keywords:</b> Machine learning, Artificial intelligence, quantum mechanics, atomic frequency, chemistry</label>
                    </div>
                </div>
            </div>
            <div className="w-2/5 pl-5">
                <div className="bg-blue-100 p-5 m-10 h-auto rounded-3xl">
                    <div className="mb-4">
                        <h2 className="text-lg text-blue-600 ">Revisions</h2>
                    </div>
                   
                   <div>
                    <div className='flex justify-center items-center text-gray-600 rounded-3xl space-x-2 mb-4'>
                        <div>
                            <label className='block bg-white text-gray-700 px-4 rounded-xl '>14-08-24</label>
                        </div>
                        <div>
                            <button className='block bg-gray-300 text-gray-700 px-4 rounded-xl'>View</button>
                        </div>
                    </div>
                    <div className='flex justify-center items-center text-gray-600 rounded-3xl space-x-2 mb-4'>
                        <div>
                            <label className='block bg-white text-gray-700 px-4 rounded-xl '>14-08-24</label>
                        </div>
                        <div>
                            <button className='block bg-gray-300 text-gray-700 px-4 rounded-xl'>View</button>
                        </div>
                    </div>
                    <div className='flex justify-center items-center text-gray-600 rounded-3xl space-x-2 mb-4'>
                        <div>
                            <label className='block bg-white text-gray-700 px-4 rounded-xl '>14-08-24</label>
                        </div>
                        <div>
                            <button className='block bg-gray-300 text-gray-700 px-4 rounded-xl'>View</button>
                        </div>
                    </div>
                    <div className='flex justify-center items-center text-gray-600 rounded-3xl space-x-2 mb-4'>
                        <div>
                            <label className='block bg-white text-gray-700 px-4 rounded-xl '>14-08-24</label>
                        </div>
                        <div>
                            <button className='block bg-gray-300 text-gray-700 px-4 rounded-xl'>View</button>
                        </div>
                    </div>
                    
                   </div>
                   <div className="mb-4">
                        <h2 className="text-lg text-blue-600 ">View Reviewer's Report</h2>
                    </div>
                   
                   <div>
                    <div className='flex justify-center items-center text-gray-600 rounded-3xl space-x-2 mb-4'>
                        <div>
                            <label className='block bg-white text-gray-700 px-4 rounded-xl '>Reviewer 1</label>
                        </div>
                        <div>
                            <button className='block bg-gray-300 text-gray-700 px-4 rounded-xl'>View</button>
                        </div>
                    </div>
                    <div className='flex justify-center items-center text-gray-600 rounded-3xl space-x-2 mb-4'>
                        <div>
                            <label className='block bg-white text-gray-700 px-4 rounded-xl '>Reviewer 2</label>
                        </div>
                        <div>
                            <button className='block bg-gray-300 text-gray-700 px-4 rounded-xl'>View</button>
                        </div>
                    </div>
                    <div className='flex justify-center items-center text-gray-600 rounded-3xl space-x-2 mb-4'>
                        <div>
                            <label className='block bg-white text-gray-700 px-4 rounded-xl '>Reviewer 3</label>
                        </div>
                        <div>
                            <button className='block bg-gray-300 text-gray-700 px-4 rounded-xl'>View</button>
                        </div>
                    </div>
                    <div className='flex justify-center items-center text-gray-600 rounded-3xl space-x-2 mb-4'>
                        <div>
                            <label className='block bg-white text-gray-700 px-4 rounded-xl '>Reviewer 4</label>
                        </div>
                        <div>
                            <button className='block bg-gray-300 text-gray-700 px-4 rounded-xl'>View</button>
                        </div>
                    </div>
                    
                   </div>
                
                </div>
                <div className="flex justify-center items-center text-gray-700 px-4 py-2 rounded-xl space-x-4">
                        <button className="text-green-700 border bg-yellow-200 px-6 py-3 rounded-2xl">Accept</button>
                        <button className="text-red-700 border bg-yellow-200 px-6 py-3 rounded-2xl">Reject</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Editor3;
