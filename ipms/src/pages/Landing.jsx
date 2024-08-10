import React from "react";
import "../styles/Landing.css";
import Search from "../components/Search";
import FeaturedCard from "./../components/FeaturedCard";
import FeaturedAuthor from "../components/FeaturedAuthors";
import Conference from "../components/Conference";
import RecentPub from "../components/RecentPub";
import Books from "../components/Books";

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.slice(0, maxLength - 3) + "..." : text;
};

function Landing() {
  return (
    <>
      <div className="w-full">
        <div className="landing">
          <div className="flex justify-center items-center h-full text-white flex-col">
            <h1 className="font-saira text-[2.25rem]">Search</h1>
            <h1 className="font-saira text-[1.125rem]">with</h1>
            <h1 className="font-saira  text-[3.5rem]">IPMS Digital Library</h1>
            <Search />
          </div>
        </div>
        <div className="container mx-auto font-saira mt-5 px-5">
          <h1 className=" text-5xl mb-5">Featured Article</h1>
          <div className=" grid grid-cols-3 gap-5 xl:grid-cols-4 lg:grid-cols-3">
            <FeaturedCard
              text="Dual-Band Dual-Polarized Planar Antenna for 5G Millimeter-Wave Antenna-in-Package Applications"
              image="assets/demo-feature-pic.png"
            />

            <FeaturedCard
              text="Dual-Band Dual-Polarized Planar Antenna for 5G Millimeter-Wave Antenna-in-Package Applications"
              image="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            />

            <FeaturedCard
              text="Dual-Band Dual-Polarized Planar "
              image="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
            />

            <FeaturedCard
              text="Dual-Band Dual-Polarized Planar Antenna for 5G Millimeter-Wave Antenna-in-Package Applications"
              image="https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg"
            />
          </div>
        </div>
        <div>
          <div className="container mx-auto font-saira mt-5 px-5">
            <h1 className=" text-5xl mb-5">Featured Authors</h1>
            <div className="">
              <div className=" grid grid-cols-4 gap-5 ">
                <FeaturedAuthor
                  text="Master of Smile"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s"
                />

                <FeaturedAuthor
                  text="Master of Smile"
                  image="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                />

                <FeaturedAuthor
                  text="Master of Smile"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s"
                />

                <FeaturedAuthor
                  text="Master of Smile"
                  image="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-5">
        <div className=" bg-[#1F2833] bg-opacity-20 mt-5 px-5 py-5 font-saira rounded-xl">
          <div className="flex justify-between text-3xl my-3 text-white">
            <h1>Recent Publications</h1>
            <h3>More</h3>
          </div>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex flex-col flex-[2] bg-white p-8 rounded-2xl justify-center">
              <img
                src="assets/image1.png"
                alt=""
                className="w-full object-cover rounded-xl"
              />
              <div className="min-h-[20%] mt-4">
                <div className="text-2xl md:text-4xl">
                  {truncateText(
                    "New Quantum effect on surroundings. Experimental Data acquiring using atomic frequency and oscillations.",
                    106
                  )}
                </div>
                <div className="text-lg md:text-xl">
                  Ragnunath Patil, Rahul Fendavis, more
                </div>
              </div>
            </div>
            <div className="flex flex-[3]">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                <RecentPub text="New Quantum effect on surroundings. Experimental Data acquiring using atomic frequency and oscillations." />
                <RecentPub text="Advancements in Quantum Computing: Understanding the role of qubits and entanglement." />
                <RecentPub text="Exploring the Atomic Structure: New insights from recent experimental data." />
                <RecentPub text="Oscillatory Behavior in Quantum Systems: Implications for future technologies." />
                <RecentPub text="Quantum Field Theory: A new approach to understanding particle interactions." />
                <RecentPub text="Applications of Quantum Mechanics in Modern Physics: Bridging theory and practice." />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto bg-[#1F2833] bg-opacity-20 mt-5 px-5 py-5 font-saira rounded-xl">
          <div className="flex justify-between text-3xl my-3 text-white">
            <h1>Books</h1>
            <h3>More</h3>
          </div>
          <div className="flex flex-[3]">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
              <Books text="New Quantum effect on surroundings. Experimental Data acquiring using atomic frequency and oscillations." />
              <Books text="Advancements in Quantum Computing: Understanding the role of qubits and entanglement." />
              <Books text="Exploring the Atomic Structure: New insights from recent experimental data." />
              <Books text="Oscillatory Behavior in Quantum Systems: Implications for future technologies." />
              <Books text="Quantum Field Theory: A new approach to understanding particle interactions." />
              <Books text="Applications of Quantum Mechanics in Modern Physics: Bridging theory and practice." />
            </div>
          </div>
        </div>
        </div>
        <div>
          <div className="container mx-auto font-saira mt-5 px-5">
            <div className="flex flex-col gap-6">
              <h1 className=" text-5xl mb-5">Conferences</h1>
              <Conference />
              <Conference />
            </div>
            <div className=" font-bold my-5">
              Show more upcoming conferences
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
