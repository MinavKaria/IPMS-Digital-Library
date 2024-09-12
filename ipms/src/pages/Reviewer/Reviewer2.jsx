import React, { useState } from "react";
import { Link } from "react-router-dom";

function Reviewer2() {
  const [feedback, setFeedback] = useState({
    "Technical Content and Scientific Rigor": 0,
    "Relevance and Timeliness": 0,
    Familiarity: 0,
  });

  const pdfUrl =
    "https://firebasestorage.googleapis.com/v0/b/datastorage-9b3b6.appspot.com/o/CGV_1.2.pdf?alt=media&token=44523f6a-43ad-4e8e-b346-833cf18eabec";
  const googleDocsViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(
    pdfUrl
  )}&embedded=true`;

  return (
    <div className="flex min-h-[80vh] font-saira">
      <div className="w-2/3">
        <div className="px-5">
          <div className="flex justify-between w-1/2 gap-5">
            <div>
              <h1 className="text-xl font-semibold">Paper ID</h1>
              <p className="text-md">CGV_1.2</p>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Track ID</h1>
              <p className="text-md">12121212</p>
            </div>
          </div>
          <br />
          <div>
            <h1 className="text-xl font-semibold">Title</h1>
            <p className="text-md">
              New Quantum effect on surroundings. Experimental Data acquiring
              using atomic frequency and oscillations.
            </p>
          </div>
        </div>
        <div className=" bg-gray-200 ">
          <iframe
            src={googleDocsViewerUrl}
            className="w-full min-h-[75vh] "
          ></iframe>
        </div>
      </div>

      <div className="w-1/3 p-4">
        <h2 className="text-2xl font-semibold mb-4">Reviewers feedback</h2>
        {[
          "Technical Content and Scientific Rigor",
          "Relevance and Timeliness",
          "Familiarity",
        ].map((category, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-medium mb-2">
              {index + 1}. {category} <span className="text-red-500">*</span>
            </h3>
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
                onChange={(e) =>
                  setFeedback({ ...feedback, [category]: e.target.value })
                }
              />
              <span>
                {feedback[category] == 0 ? "Unrated" : feedback[category]}
              </span>
            </div>
          </div>
        ))}
        <br />
        <Link className="bg-[#676565] text-white px-4 py-2 rounded-2xl" to="/reviewer/paperdetails/2">
            Next
        </Link>
      </div>
      
      
    </div>
  );
}

export default Reviewer2;
