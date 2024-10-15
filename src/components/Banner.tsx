"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Banner() {
  const covers = [
    "/img/cover.jpg",
    "/img/cover2.jpg",
    "/img/cover3.jpg",
    "/img/cover4.jpg",
  ];
  const [index, setIndex] = useState(0);
  const router = useRouter();

  return (
    <div className="block relative py-10" onClick={() => setIndex(index + 1)}>
      <Image
        src={covers[index % 4]}
        alt="cover"
        fill={true}
        objectFit="cover"
      />
      <div className="relative flex flex-col text-center">
        <p className="text-2xl font-extrabold">Vaccine Service Center</p>
        <p className="text-sm font-light text-slate-600">
          สามารถกดลงทะเบียนรับวัคซีนได้แล้ววันนี้
        </p>
      </div>
      <button
        className="absolute bg-[#e0f2fe] rounded right-0 z-30 p-1 mr-2 font-light text-sm text-slate-600 border border-slate-600 hover:text-white hover:bg-slate-600 hover:border-transparent"
        onClick={(e) => {
          e.stopPropagation();
          router.push("/hospital");
        }}
      >
        Select Hospital
      </button>
    </div>
  );
}
