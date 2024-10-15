"use client";

import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";
import { useState } from "react";

export default function Card({
  hospitalName,
  imgSrc,
  updateRating,
}: {
  hospitalName: string;
  imgSrc: string;
  updateRating?: (hospitalName: string, rating: number | null) => void;
}) {
  const [rating, setRating] = useState<number | null>(0);
  const ratingName = `${hospitalName} Rating`;

  return (
    <InteractiveCard>
      <div className="relative flex flex-col gap-1 w-full h-[300px]">
        <div className="relative w-full h-[70%]">
          <Image
            className="rounded-sm"
            src={imgSrc}
            alt="hospital image"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="text-center font-semibold">{hospitalName}</div>

        {/* Only render Rating if updateRating is provided */}

        <Rating
          id={ratingName}
          name={ratingName}
          data-testid={ratingName}
          className="pt-2  self-center"
          value={rating}
          onChange={(e, newValue) => {
            setRating(newValue);
            if (updateRating) {
              updateRating(hospitalName, newValue);
            }
          }}
        />
      </div>
    </InteractiveCard>
  );
}
