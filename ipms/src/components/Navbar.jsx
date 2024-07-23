import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="w-full top-nav">
        <div className="container mx-auto h-16">
          <h1 className="text-3xl font-bold text-white ">
            IPMS Digital Library
          </h1>
        </div>
        <div className="nav text-white flex h-20">
          <div className="container mx-auto ">
            Recently 
            Published 
            Browse 
            Setting 
            Alerts
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
