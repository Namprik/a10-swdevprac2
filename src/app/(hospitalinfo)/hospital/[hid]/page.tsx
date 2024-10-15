import Image from "next/image";
import getHospital from "@/libs/getHospital";

export default async function HospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {
  const hospitalsJsonReady = await getHospital(params.hid);

  return (
    <main>
      <div key={hospitalsJsonReady.data.id}>
        {" "}
        {/* Add a unique key for each item */}
        <h1 className="text-center font-bold text-2xl underline">
          {hospitalsJsonReady.data.name}
        </h1>
        <div className="flex flex-row m-5">
          <Image
            src={hospitalsJsonReady.data.picture}
            alt="Hospital Image"
            width={500} // Set a specific width
            height={300} // Set a specific height
            sizes="100vw"
            className="rounded-lg w-[30%] bg-black"
          />
          <div className="p-5 flex flex-col">
            <p className="text-lg">Name: {hospitalsJsonReady.data.name}</p>
            <p className="text-lg">
              Address: {hospitalsJsonReady.data.address}
            </p>
            <p className="text-lg">
              District: {hospitalsJsonReady.data.district}
            </p>
            <p className="text-lg">
              Postal Code: {hospitalsJsonReady.data.postalcode}
            </p>
            <p className="text-lg">Tel: {hospitalsJsonReady.data.tel}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
