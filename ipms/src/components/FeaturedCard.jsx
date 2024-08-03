import React from 'react';

function FeaturedCard({ text, image, title }) {
  return (
    <div className="bg-[#0888A5] bg-opacity-5 border-cyan-200 border-2 flex flex-col justify-center items-center p-3 rounded-2xl">
      <img src={image} alt={title} className="w-[80%] h-full object-cover object-center rounded-3xl max-h-60" />
      <p className="p-5 lg:w-[90%] min-h-24 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-xl">
        {text}
      </p>
      <div className="self-end px-5 text-blue-500 cursor-pointer">Read More {'>'}</div>
    </div>
  );
}

export default FeaturedCard;
