import React, { useState } from "react";
import "../styles/Navbar.css";
import {Link} from 'react-router-dom'

function Navbar() {
  const [accessLevel,setAccessLevel] = useState(1);
  return (
    <>
      <div className="w-full top-nav">
        <div className="container mx-auto h-16 xl:px-5 flex items-center justify-between md:px-10">
          <Link className="text-3xl font-bold text-white flex font-saira gap-2 items-center" to='/'>
            <div className="text-5xl">IPMS</div>
            <div>Digital Library</div>
          </Link>
          <div className="text-white font-saira flex flex-row gap-10 items-center">
            <div className="text-xl">Help</div>
            <Link className="text-xl" to="/sign/login">Login</Link>
            <Link className="text-2xl" to="/sign/signup">Sign Up</Link>
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
              <select className="bg-transparent focus:outline-none">
                  {accessLevel >= 1 && <option value="Guest" className="bg-black">Guest</option>}
                  {accessLevel >= 2 && <option value="Author" className="bg-black">Author</option>}
                  {accessLevel >= 3 && <option value="Reviewer" className="bg-black">Reviewer</option>}
                  {accessLevel >= 4 && <option value="Editor" className="bg-black">Editor</option>}
                  {accessLevel >= 5 && <option value="Chief Editor" className="bg-black">Chief Editor</option>}
                </select>
              </div>
              <div>Alerts</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
