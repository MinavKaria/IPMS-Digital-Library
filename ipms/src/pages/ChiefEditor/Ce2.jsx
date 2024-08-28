import React from 'react';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-700">Dashboard</h1>
      </header>

      <div className="grid grid-cols-3 gap-8">
        {/* Left section */}
        <div className="col-span-2">
          {/* Date */}
          <div className="mb-4">
            <p className="text-gray-600 font-semibold">12 - 02 - 2023</p>
          </div>

          {/* Paper Details */}
          <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
            {/* Title */}
            <div className="mb-4">
              <b className="block text-gray-700 text-lg">Title:</b>
              <p className="text-gray-800 bg-white p-3 rounded-md">New Quantum effect on surroundings. Experimental Data acquiring using atomic frequency and oscillations.</p>
            </div>

            {/* Author */}
            <div className="mb-4">
              <b className="block text-gray-700 text-lg">Author:</b>
              <p className="text-gray-800 bg-white p-3 rounded-md">Ragunath P. Patil, Satnam Shinde</p>
            </div>

            {/* Co-Author */}
            <div className="mb-4">
              <b className="block text-gray-700 text-lg">Co-Author:</b>
              <p className="text-gray-800 bg-white p-3 rounded-md">Ananya P. Patil, Harsh Thakur</p>
            </div>

            {/* Abstract */}
            <div className="mb-4">
              <b className="block text-gray-700 text-lg">Abstract:</b>
              <p className="text-gray-800 bg-white p-4 rounded-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas gravida tellus, et consectetur sem interdum id. Nullam lectus quam, hendrerit ut ante sit amet, fringilla pellentesque sapien. Aliquam at enim nunc. Aliquam tincidunt, arcu sit amet commodo pretium, nulla arcu sodales lacus, id cursus odio nisl libero.
              </p>
            </div>

            {/* Keywords */}
            <div>
              <b className="block text-gray-700 text-lg">Keywords:</b>
              <p className="text-gray-800 bg-white p-3 rounded-md">Machine learning, Artificial intelligence, quantum mechanics, atomic frequency, chemistry</p>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="col-span-1">
          {/* Revisions */}
          <div className="bg-sky-100 p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Revisions</h2>
            {['14 - 03 - 2023', '26 - 03 - 2023', '05 - 04 - 2023', '17 - 04 - 2023', '29 - 04 - 2023'].map((date, index) => (
              <div key={index} className="mb-2 flex justify-between">
                <span className="text-gray-700">{date}</span>
                <button className="bg-blue-300 text-gray-700 px-4 py-1 rounded-md hover:bg-blue-400 transition duration-200">
                  View
                </button>
              </div>
            ))}
          </div>

          {/* View Reviewer's Reports */}
          <div className="bg-sky-100 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">View Reviewer's Report</h2>
            {['Reviewer 1', 'Reviewer 2', 'Reviewer 3', 'Reviewer 4', 'Reviewer 5'].map((reviewer, index) => (
              <div key={index} className="mb-2 flex justify-between">
                <span className="text-gray-700">{reviewer}</span>
                <button className="bg-blue-300 text-gray-700 px-4 py-1 rounded-md hover:bg-blue-400 transition duration-200">
                  View
                </button>
              </div>
            ))}

            <div className="flex justify-between mt-8">
              <button className="bg-yellow-200 text-red-600 px-6 py-2 rounded-md hover:bg-yellow-300 transition duration-200">
                Reject
              </button>
              <button className="bg-yellow-200 text-green-600 px-6 py-2 rounded-md hover:bg-yellow-300 transition duration-200">
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
