import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="w-full top-nav">
        <div className="container mx-auto h-16 xl:px-5 flex items-center justify-between md:px-10">
          <div className="text-3xl font-bold text-white flex font-saira gap-2 items-center">
            <div className="text-5xl">IPMS</div>
            <div>Digital Library</div>
          </div>
          <div className="text-white font-saira flex flex-row gap-10 items-center">
            <div className="text-xl">Help</div>
            <div className="text-xl">Login</div>
            <div className="text-2xl">Sign Up</div>
          </div>
        </div>

        <div className="nav text-white flex h-20 ">
          <div className="container mx-auto px-5 flex items-center flex-row justify-between">
            <div className="flex gap-7">
              <div>Recently</div>
              <div>Published</div>
              <div>Settings</div>
            </div>
            <div className="flex flex-row gap-7">
              <div className="text-white"> 
                <select className="bg-transparent focus:outline-none" >
                  <option value="all" className="bg-black">Guest</option>
                  <option value="Author" className="bg-black">Author </option>
                  <option value="Reviewer" className="bg-black">Reviewer  </option>
                  <option value="Editor " className="bg-black">Editor</option>
                  <option value="ce" className="bg-black">Chief Editor</option>
                </select>
              </div>
              <div>Setting</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;