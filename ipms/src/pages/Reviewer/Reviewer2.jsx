import React, { useState } from 'react';

function Reviewer2() {
  const [feedback, setFeedback] = useState({
    'Technical Content and Scientific Rigor': 0,
    'Relevance and Timeliness': 0,
    'Familiarity': 0,
  });

  const pdfUrl = "https://firebasestorage.googleapis.com/v0/b/datastorage-9b3b6.appspot.com/o/CGV_1.2.pdf?alt=media&token=44523f6a-43ad-4e8e-b346-833cf18eabec";
  const googleDocsViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`;

  return (
    <div className="flex min-h-screen">
      <div className="w-2/3 bg-gray-200 ">
        <iframe
          src={googleDocsViewerUrl}
          className="w-full h-screen"
          frameBorder="0"
        ></iframe>
      </div>

      <div className="w-1/3 p-4">
        <h2 className="text-2xl font-semibold mb-4">Reviewers feedback</h2>
        {['Technical Content and Scientific Rigor', 'Relevance and Timeliness', 'Familiarity'].map((category, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-medium mb-2">{index + 1}. {category} <span className="text-red-500">*</span></h3>
            <textarea
              className="w-full p-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Comment"
              rows="3"
            />
            <div className="flex items-center">
              <input
                type="range"
                min="0"
                max="10"
                className="flex-grow mr-2"
                value={feedback[category]}
                onChange={(e) => setFeedback({ ...feedback, [category]: e.target.value })}
              />
              <span>{feedback[category] == 0 ? 'Unrated' : feedback[category]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviewer2;