import React from "react";
import house1 from "../assets/house1.avif";
import house2 from "../assets/house2.avif";
import house3 from "../assets/house3.jpg";
import house4 from "../assets/house4.jpg";
import ap1 from "../assets/ap1.jpg";
import ap2 from "../assets/ap2.jpg";
import ap3 from "../assets/ap3.jpg";
import ap4 from "../assets/ap4.jpg";
import pet1 from "../assets/pet1.webp";
import pet2 from "../assets/pet2.webp";
import pet3 from "../assets/pet3.webp";
import pet4 from "../assets/pet4.webp";
import CardComponent from "./CardComponent";

const NewListings = () => {
  const houses = [
    { photo: house2, price: "$236,910", beds: 4, baths: 2, sqft: 3.747, sqftlot: 6.224, type: "Duplex House" },
    { photo: house3, price: "$346,410", beds: 5, baths: 2, sqft: 4.747, sqftlot: 8.233, type: "Single-Family House"  },
    { photo: house4, price: "$300,910", beds: 5, baths: 2, sqft: 5.747, sqftlot: 9.899, type: "Single-Family House"  },
    { photo: house1, price: "$396,910", beds: 6, baths: 3, sqft: 7.747, sqftlot: 12.456, type: "Single-Family House"  },
  ];
  const apartments = [
    { photo: ap1, price: "$136,910", beds: 2, baths: 1, sqft: 2.747, sqftlot: "-", type: "Apartment"  },
    { photo: ap2, price: "$146,410", beds: 2, baths: 1, sqft: 3.747, sqftlot: "-", type: "Apartment"  },
    { photo: ap3, price: "$200,910", beds: 3, baths: 2, sqft: 3.747, sqftlot: "-", type: "Apartment"  },
    { photo: ap4, price: "$196,910", beds: 3, baths: 2, sqft: 4.747, sqftlot: "-", type: "Apartment"  },
  ];
  const petfr = [
    { photo: pet1, price: "$146,910", beds: 2, baths: 1, sqft: 2.747, sqftlot: "-", type: "Pet-friendly Apartment"  },
    { photo: pet2, price: "$176,410", beds: 2, baths: 1, sqft: 3.747, sqftlot: "-", type: "Pet-friendly Apartment"  },
    { photo: pet3, price: "$220,910", beds: 3, baths: 2, sqft: 3.747, sqftlot: "-", type: "Pet-friendly Apartment"  },
    { photo: pet4, price: "$186,910", beds: 3, baths: 2, sqft: 4.747, sqftlot: "-", type: "Pet-friendly Apartment"  },
  ];
  return (
    <div className="mx-[10rem]">
      {/* Title */}
      <div className=" mt-10">
        <p className="text-[18.5px] font-medium ">
          New Listings in Spokeane, WA
        </p>
        <p className="text-blue-600 text-[15px]">View All New Listings</p>
      </div>
      {/* Listings */}
      <div className=" flex flex-nowrap pt-4 overflow-x-auto space-x-6 w-full pb-4 mb-20">
        {houses.map((house) => (
          <CardComponent  photo={house.photo} price={house.price} beds={house.beds} baths={house.baths} sqft={house.sqft} sqftlot={house.sqftlot} type={house.type} />
        ))}
      </div>
      {/* Title */}
      <div className=" mt-10">
        <p className="text-[18.5px] font-medium ">
          Apartments near you
        </p>
        <p className="text-blue-600 text-[15px]">View All New Apartments</p>
      </div>
      {/* Listings */}
      <div className=" flex flex-nowrap pt-4 overflow-x-auto space-x-6 w-full pb-4 mb-20">
        {apartments.map((app) => (
          <CardComponent  photo={app.photo} price={app.price} beds={app.beds} baths={app.baths} sqft={app.sqft} sqftlot={app.sqftlot} type={app.type} />
        ))}
      </div>
      {/* Title */}
      <div className=" mt-10">
        <p className="text-[18.5px] font-medium ">
          Pet-friendly apartments
        </p>
        <p className="text-blue-600 text-[15px]">View All Pet-friendly Apartments</p>
      </div>
      {/* Listings */}
      <div className=" flex flex-nowrap pt-4 overflow-x-auto space-x-6 w-full pb-4 mb-20">
        {petfr.map((pet) => (
          <CardComponent  photo={pet.photo} price={pet.price} beds={pet.beds} baths={pet.baths} sqft={pet.sqft} sqftlot={pet.sqftlot} type={pet.type} />
        ))}
      </div>
    </div>
  );
};

export default NewListings;