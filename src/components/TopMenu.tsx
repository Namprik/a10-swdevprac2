import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { Link } from "@mui/material";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex flex-row-reverse items-center justify-between bg-white gap-x-8 rounded-full m-3 border border-black p-2">
      {/* Logo on the left */}
      <div className="flex items-center">
        <Image
          src={"/img/logo.png"}
          alt="logo"
          width={100}
          height={100}
          sizes="100vh"
          className="mr-2 p-2 size-14 "
        />
      </div>

      {/* Navigation Items */}
      <div className="flex gap-x-4">
        <TopMenuItem title="Booking" pageRef="/booking" />
      </div>

      {/* Sign-In or Sign-Out button on the right */}
      <div className="ml-auto grow px-4">
        {session ? (
          <Link href="/api/auth/signout">
            <div>Sign-Out</div>
          </Link>
        ) : (
          <Link href="/api/auth/signin">
            <div>Sign-In</div>
          </Link>
        )}
      </div>
    </div>
  );
}
