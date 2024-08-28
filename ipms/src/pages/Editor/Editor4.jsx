import React from 'react';

const ReviewFeedback = () => {
  return (
    <div className='max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg'>
      <header className='text-center mb-8'>
        <h1 className='text-3xl font-bold text-gray-800'>Reviewers Feedback</h1>
      </header>

      <div className='flex'>
        {/* Left side (blank) */}
        <div className='w-1/2 p-4 bg-gray-100 rounded-lg mr-4'>
          {/* Placeholder for left side */}
          <div className="h-full flex items-center justify-center text-gray-500">
            <span>paper</span>
          </div>
        </div>

        {/* Right side (form) */}
        <div className='w-1/2'>
          <div className='bg-gray-100 p-6 rounded-lg mb-8'>
            <div className="mb-4">
              <b className="block text-gray-700">Paper ID</b>
              <p className="text-gray-600">12144345</p>
            </div>
            <div className="mb-4">
              <b className="block text-gray-700">Track</b>
              <p className="text-gray-600">OTCJD24P</p>
            </div>
            <div>
              <b className="block text-gray-700">Paper Title</b>
              <p className="text-gray-600">Quantum state of electrons in an atom</p>
            </div>
          </div>

          <div>
            <h2 className='text-2xl font-semibold text-gray-700 mb-4'>Review Feedback</h2>

            {[
              "Technical Content and Scientific Rigor",
              "Relevance and Timeliness",
              "Familiarity"
            ].map((question, index) => (
              <div key={index} className='mb-8'>
                <label className='block text-lg font-medium text-gray-800 mb-2'>
                  {index + 1}. {question} <span className="text-red-500">*</span>
                </label>
                <textarea
                  className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-100 mb-4'
                  placeholder='Comment'
                  rows="2"
                ></textarea>
                <input
                  type='range'
                  min='0'
                  max='10'
                  className='w-full appearance-none h-2 bg-gray-300 rounded-full slider-thumb focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
            ))}

            <div className='flex justify-between mt-8'>
              <button className='bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600'>
                Submit
              </button>
              <button className='bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600'>
                Save Draft
              </button>
              <button className='bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600'>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewFeedback;
