"use client";

import Link from "next/link";
import Card from "./Card";
import { useReducer } from "react";

export default function CardPanel() {
  const ratingReducer = (
    ratingList: Map<string, number>,
    action: { type: string; hospitalName: string; rating?: number }
  ) => {
    switch (action.type) {
      case "update": {
        // Create a new map and update the rating for the given hospitalName
        const newRatingList = new Map(ratingList);
        newRatingList.set(action.hospitalName, action.rating ?? 0); // Ensure rating is never null
        return newRatingList;
      }
      case "remove": {
        // Create a new map and remove the hospitalName
        const newRatingList = new Map(ratingList);
        newRatingList.delete(action.hospitalName);
        return newRatingList;
      }
      default:
        return ratingList;
    }
  };

  const initialState = new Map<string, number>([
    ["Chulalongkorn Hospital", 0],
    ["Rajavithi Hospital", 0],
    ["Thammasat University Hospital", 0],
  ]);

  const mockHospitalRepo = [
    { hid: "001", name: "Chulalongkorn Hospital", image: "/img/chula.jpg" },
    { hid: "002", name: "Rajavithi Hospital", image: "/img/rajavithi.jpg" },
    {
      hid: "003",
      name: "Thammasat University Hospital",
      image: "/img/thammasat.jpg",
    },
  ];

  const [ratingList, dispatchRating] = useReducer(ratingReducer, initialState);

  const updateRating = (hospitalName: string, rate: number | null) =>
    dispatchRating({
      type: "update",
      hospitalName,
      rating: rate ?? 0, // Default to 0 if null
    });

  return (
    <div>
      {mockHospitalRepo.map((hospitalItem) => (
        <div key={hospitalItem.hid}>
          <Link href={`/hospital/${hospitalItem.hid}`}>
            <Card
              hospitalName={hospitalItem.name}
              imgSrc={hospitalItem.image}
              updateRating={updateRating}
            />
          </Link>
        </div>
      ))}

      <div className="m-5">
        <p className="font-bold text-lg pb-1">
          Hospital List Rating: {ratingList.size}
        </p>
        {Array.from(ratingList.entries()).map(([hospitalName, rate]) => (
          <div
            key={hospitalName}
            data-testid={hospitalName} // Correctly using hospitalName
            onClick={() =>
              dispatchRating({
                type: "remove",
                hospitalName,
              })
            }
          >
            {hospitalName} Rating: {rate} {/* Correctly display hospitalName */}
          </div>
        ))}
      </div>
    </div>
  );
}
