import React from "react";
import { AiOutlineHeart } from 'react-icons/ai';
import { AiTwotoneHeart } from 'react-icons/ai';

const CardComponent = ({ photo, price, beds, baths, sqft, sqftlot, type }) => {
  return <div className="hover:shadow-lg cursor-pointer">
    {/* Image */}
    <div className="relative">
      <img src={photo} alt="building" className="min-w-[23rem] max-h-[16rem] rounded-t-[0.5rem]" />
      <div className="absolute right-2 bottom-2 rounded-full text-white text-[40px] group">
        <AiOutlineHeart />
        <AiTwotoneHeart className="text-red-500 absolute top-0 hidden group-hover:flex duration-20 ease-out"/>
      </div>
      <div className="absolute bg-[#1a52b8] text-white px-3 py-[2px] rounded-[0.2rem] text-[12px] top-2 left-2 shadow-lg">NEW</div>
    </div>
    {/* Description */}
    <div className="mt-2 pl-4 shadow-lg">
      <div className="flex items-center">
        <div className="w-3 h-3 bg-green-600 rounded-[1rem] mr-2"></div>
        <p>{type}</p>
      </div>
      <p className="font-bold text-[24px]">{price}</p>
      <div className="space-x-2">
        <span className="font-semibold">{beds}</span> bed 
        <span className="font-semibold">{baths}</span> bath 
        <span className="font-semibold">{sqft}</span> sqft
        <span className="font-semibold">{sqftlot}</span> sqft lot
      </div>
      <p>2052 Superior Ct</p>
      <p>Tracy, CA 95304</p>
    </div>
  </div>;
};

export default CardComponent;