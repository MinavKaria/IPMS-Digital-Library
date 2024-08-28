import React from 'react';

export default function Ce4() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Review Form</h1>
      
      <div className="bg-gray-100 p-4 rounded-md mb-6">
        <div className="mb-4">
          <b className="block">Paper ID</b>
          <p>12144345</p>
        </div>
        <div className="mb-4">
          <b className="block">Paper Title</b>
          <p>Quantum State of Electron in an Atom</p>
        </div>
        <div className="mb-4">
          <b className="block">Track</b>
          <p>OTCJD24P</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Review Questions</h2>

        {[
          "Relevance of manuscript to the conference",
          "Research Contribution",
          "Structure of the manuscript well documented",
          "Standard of English",
          "Relevance and clarity of drawing, graphs and tables",
          "Appropriateness of abstract as a description of the paper",
          "Reference list is recent, adequate, and correctly cited",
          "All Figures and Tables are properly captioned and mentioned in text",
          "Paper is formatted in IEEE template",
          "Data, result, validations, and analysis discussed",
          "Provide your additional technical comments for further improvements",
        ].map((question, index) => (
          <div key={index} className="mb-6">
            <label className="block text-lg font-medium text-gray-800 mb-2">
              {index + 1}. {question}
              <span className="text-red-500">*</span>
              <span className="text-gray-500 text-sm ml-2 italic">
                (Visible to other reviewers)
              </span>
            </label>
            <input
              type="text"
              className="w-full bg-blue-100 rounded-full border border-blue-200 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Enter your response for question ${index + 1}`}
            />
          </div>
        ))}

        <div className="flex justify-between mt-6">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
            Submit
          </button>
          <button className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600">
            Save Draft
          </button>
          <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}





