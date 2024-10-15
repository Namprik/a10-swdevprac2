import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <div className="flex flex-row-reverse bg-white gap-x-8 items-center rounded-full m-3 border border-black">
      <Image
        src={"/img/logo.png"}
        alt="logo"
        width={100}
        height={100}
        sizes="100vh"
        className="justify-self-end p-2 size-14 mr-2"
      />
      <TopMenuItem title="Booking" pageRef="/booking" />
    </div>
  );
}
