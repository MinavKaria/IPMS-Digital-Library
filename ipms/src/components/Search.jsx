import React from "react";
import "../styles/Search.css";

function Search() {
  return (
    <>
      <div className="w-full items-center flex justify-center flex-col gap-5 mt-5">
        <div className="flex w-1/2 justify-center items-center gap-5">

          <div className="bg-white text-black h-[50px] flex justify-center items-center w-36 rounded-tl-2xl rounded-bl-2xl">
            <select className="bg-white text-black h-full w-full rounded-tl-2xl rounded-bl-2xl p-2 focus:outline-none">
              <option value="all">All</option>
              <option value="dev">Web dev</option>
              <option value="ai">AI/ML</option>
              <option value="cyber">Cyber</option>
              <option value="health">Health Care</option>
            </select>
          </div>

          <div className="w-full flex gap-5 h-[50px] items-center bg-white rounded-tr-2xl rounded-br-2xl">
            <input type="text" placeholder="Search" className="w-full h-full p-5 focus:outline-none text-black font-saira" />
            <div>
              <div className="text-black p-5">
                <img src="assets/search-icon.png" alt="Search Icon" />
              </div>
            </div>
          </div>

        </div>

        <div className="w-1/2 flex justify-end">
          Advanced Search
        </div>

      </div>
    </>
  );
}

export default Search;
