// import Image from "next/image";
import Link from "next/link";

export default function TopMenuItem({
  title,
  pageRef,
}: {
  title: string;
  pageRef: string;
}) {
  return (
    <div>
      <Link href={pageRef} className="text-sm hover:font-bold font-light">
        {title}
      </Link>
    </div>
  );
}
