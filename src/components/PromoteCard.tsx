import VideoPlayer from "./VideoPlayer";
import { useState } from "react";
import { useWindowListener } from "@/hooks/useWindowListener";

export default function PromoteCard() {
  const [playing, setPlaying] = useState(true);
  useWindowListener("contextmenu", (e) => e.preventDefault());
  return (
    <div className="flex flex-row m-5 p-5 gap-5 border border-black rounded-md">
      <VideoPlayer vdoSrc="/vdo/getvaccine.mp4" isPlaying={playing} />
      <div className="w-full relative">
        <p>Get your vaccine today.</p>
        <button
          className="absolute bottom-0 w-1/12 text-sm font-light text-center rounded-xl px-3 py-1 bg-[#3f6f8f] text-[#e0f2fe] hover:bg-[#e0f2fe] hover:border hover:border-black hover:text-black"
          onClick={() => setPlaying(!playing)}
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}
