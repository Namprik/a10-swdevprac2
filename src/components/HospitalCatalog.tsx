import Link from "next/link";
import Card from "./Card";

export default async function HospitalCatalog({
  hospitalsJson,
}: {
  hospitalsJson: Promise<HospitalJson>;
}) {
  const hospitalsJsonReady = await hospitalsJson;
  return (
    <div
      style={{
        margin: "20px",
        display: "flex",
        flexDirection: "row",
        alignContent: "space-around",
        justifyContent: "space-around",
        flexWrap: "wrap",
        padding: "10px",
      }}
    >
      {hospitalsJsonReady.data.map(
        (
          hospitalItem: HospitalItem // Changed the name to hospitalItem
        ) => (
          <div key={hospitalItem.id} className="relative w-[250px]">
            {" "}
            {/* Accessing id */}
            <Link href={`/hospital/${hospitalItem.id}`}>
              <Card
                hospitalName={hospitalItem.name}
                imgSrc={hospitalItem.picture}
              />
            </Link>
          </div>
        )
      )}
    </div>
  );
}
