import React from "react";
import house1 from "../assets/landscape.png";
import houses from "../assets/landscape.png";
import CardComponent from "./CardComponent";

const NewListings = () => {
  const cards = [
    { photo: house1, price: "$236,910", beds: 5, baths: 3, sqft: 3.747, sqftlot: 8.655 },
    { photo: houses, price: "$346,410", beds: 5, baths: 3, sqft: 3.747, sqftlot: 8.655 },
    { photo: house1, price: "$800,910", beds: 5, baths: 3, sqft: 3.747, sqftlot: 8.655 },
    { photo: houses, price: "$196,910", beds: 5, baths: 3, sqft: 3.747, sqftlot: 8.655 },
  ];
  return (
    <div className="mx-[10rem]">
      {/* Title */}
      <div className=" mt-10">
        <p className="text-[18.5px] font-medium ">
          New Listings in Spokeane, WA
        </p>
        <p className="text-blue-600 text-[15px]">View All 160 New Listings</p>
      </div>
      {/* Listings */}
      <div className=" flex flex-nowrap pt-4 overflow-x-auto space-x-6 w-full pb-4 mb-20">
        {cards.map((card) => (
          <CardComponent  photo={card.photo} price={card.price} beds={card.beds} baths={card.baths} sqft={card.sqft} sqftlot={card.sqftlot} />
        ))}
      </div>
    </div>
  );
};

export default NewListings;