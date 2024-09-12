import React, { useState } from "react";
import { useGlobalContext } from "../actions/Context";
import { Link } from "react-router-dom";

function Navbar2() {
  const [activeTab, setActiveTab] = useState("Guidelines");
  const { accessLevel } = useGlobalContext();

  const tabs = [
    {
      name: "Dashboard",
      icon: "/dashboard.svg",
      routeTo: "/author/dashboard",
      accessLevel: 2,
    },
    {
      name: "Guidelines",
      icon: "/menu_book.svg",
      routeTo: "/author/guidelines",
      accessLevel: 2,
    },
    {
        name: "Dashboard",
        icon: "/dashboard.svg",
        routeTo: "/reviewer/dashboard",
        accessLevel: 3,
    },
    {
      name: "Contact Us",
      icon: "/contact_mail.svg",
      routeTo: "/contactus",
      accessLevel: 0,
    },
    
  ];

  return (
    <>
      <div className="nav text-white flex h-20 ">
        <div className="container mx-auto px-5 flex items-center flex-row justify-between">
          <div className="flex gap-7">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="flex flex-row gap-7">
            <div className="text-white">
              <select
                className="bg-transparent focus:outline-none"
                value={
                  accessLevel === 1
                    ? "Guest"
                    : accessLevel === 2
                    ? "Author"
                    : accessLevel === 3
                    ? "Reviewer"
                    : accessLevel === 4
                    ? "Editor"
                    : accessLevel === 5
                    ? "Chief Editor"
                    : ""
                }
              >
                {accessLevel >= 1 && (
                  <option value="Guest" className="bg-black">
                    Guest
                  </option>
                )}
                {accessLevel >= 2 && (
                  <option value="Author" className="bg-black">
                    Author
                  </option>
                )}
                {accessLevel >= 3 && (
                  <option value="Reviewer" className="bg-black">
                    Reviewer
                  </option>
                )}
                {accessLevel >= 4 && (
                  <option value="Editor" className="bg-black">
                    Editor
                  </option>
                )}
                {accessLevel >= 5 && (
                  <option value="Chief Editor" className="bg-black">
                    Chief Editor
                  </option>
                )}
              </select>
            </div>
            <img src="/alert.svg" alt="" />
          </div>
        </div>
      </div>


      <div className=" bg-black text-white flex justify-center items-center space-x-4 py-2">
        {tabs.filter((tab) => (tab.accessLevel === accessLevel || tab.accessLevel===0)).map((tab) => (
          <Link
            to={tab.routeTo}
            key={tab.name}
            className={`flex flex-col items-center cursor-pointer ${
              activeTab === tab.name ? "bg-orange-500" : "nav"
            } p-2 rounded`}
            onClick={() => {
              setActiveTab(tab.name);
            }}
          >
            <div className=" rounded-full flex items-center justify-center">
              <img src={tab.icon} alt="" className="" />
            </div>
            <span className="text-sm mt-1">{tab.name}</span>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Navbar2;