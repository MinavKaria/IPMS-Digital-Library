import React from "react";

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.slice(0, maxLength - 3) + "..." : text;
};

function Books({ text }) {
  return (
    <>
      <div className="bg-white p-5 rounded-2xl h-full flex flex-col justify-between">
        <img
          src="assets/image1.png"
          alt=""
          className="w-full h-[150px] object-cover rounded-lg"
        />
        <div className="flex-grow flex flex-col justify-between mt-4">
          <div className="mb-2">
            {truncateText(text, 106)}
          </div>
          <div className="text-sm">
            Ragnunath Patil, Rahul Fendavis, more
          </div>
        </div>
      </div>
    </>
  );
}

export default Books;
