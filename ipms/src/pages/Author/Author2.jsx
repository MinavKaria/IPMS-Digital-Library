import React from "react";
import { Link } from "react-router-dom";

export default function Author2() {
  return (
    <>
      <div className="container mx-auto px-4">
        <form className="container  flex flex-col gap-8 opacity-110  rounded-3xl p-6 m-2" onSubmit={(e)=>{
          e.preventDefault()
        }}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col m-4">
              <p className="text-2xl mt-5 mb-2">Primary author details</p>
              <p className="text-lg text-cyan-400 mb-2">Author email id</p>
              <input
                type="text"
                className="bg-gray-300 w-3/12 h-10 p-2 rounded-lg"
                placeholder="Author email"
              />
            </div>

            <div className="flex flex-row m-4 mt-10">
              <div className="w-1/2">
                <p className="text-lg text-cyan-400 mb-2">Author name</p>
                <input
                  type="text"
                  className="bg-gray-300 w-7/12 h-10 p-2 rounded-lg"
                  placeholder="Author name"
                />
              </div>
              <div className="w-1/2">
                <p className="text-lg text-cyan-400 mb-2">
                  Author contact number
                </p>
                <input
                  type="text"
                  className="bg-gray-300 w-7/12 h-10 p-2 rounded-lg"
                  placeholder="Author contact"
                />
              </div>
            </div>

            <div className="flex flex-row m-4 mt-10">
              <div className="w-1/2">
                <p className="text-lg text-cyan-400 mb-2">Author name</p>
                <input
                  type="text"
                  className="bg-gray-300 w-7/12 h-10 p-2 rounded-lg"
                  placeholder="Author name"
                />
              </div>
              <div className="w-1/2">
                <p className="text-lg text-cyan-400 mb-2">
                  Author contact number
                </p>
                <input
                  type="text"
                  className="bg-gray-300 w-7/12 h-10 p-2 rounded-lg"
                  placeholder="Author contact"
                />
              </div>
            </div>

            <div className="flex justify-center mt-20">
              <button className="text-sm bg-gray-400 px-6 py-2 rounded-full">
                Add Author
              </button>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center mt-4">
              <span className="mr-2">Page 2 of 3</span>
            </div>
            <div className="flex items-center justify-center gap-10 mt-4">
              <Link className="btn btn-primary" to="/author/paperdetails/1"> {"<"} Back</Link>
              <Link className="btn btn-primary" to="/author/paperdetails/3">Next {">"}</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
