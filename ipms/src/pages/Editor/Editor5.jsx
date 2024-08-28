import React from 'react'

const ReviewForm2 = () => {
  return (
    <div className='max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg'>
      <h1 className='text-2xl font-bold text-center text-gray-800 mb-6'>Review Form</h1>
      
      <div className='bg-gray-100 p-4 rounded-md mb-6'>
        <b className="block mb-1">Paper ID</b>
        <p className="mb-4">12144345</p>

        <b className="block mb-1">Paper Title</b>
        <p className="mb-4">Quantum State of electron in an atom</p>

        <b className="block mb-1">Track</b>
        <p className="mb-4">OTCJD24P</p>
      </div>

      <div>
        <h2 className='text-xl font-semibold text-gray-700 mb-4'>Review Questions</h2>

        {/* Review questions section */}
        {[
          "Technical Content and Scientific Rigor",
          "Novelty and Originality",
          "Quality and Presentation",
          "Relevance and Timeliness",
          "Familiarity",
          "Recommendation",
          "Strong Aspects",
          "Weak Aspects",
          "Paper is formatted in IEEE template",
          "Recommend changes"
        ].map((question, index) => (
          <div key={index} className="mb-6">
            <label className="block text-lg font-medium text-gray-800 mb-2">
              {index + 1}. {question}
              <span className="text-red-500"> *</span>
              <span className="text-sm text-blue-600 ml-2 italic">
                (Visible to other reviewers)
              </span>
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-100"
              placeholder={`Enter your response for question ${index + 1}`}
            />
          </div>
        ))}

        {/* Buttons section */}
        <div className='flex justify-between mt-6'>
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
  )
}

export default ReviewForm2
