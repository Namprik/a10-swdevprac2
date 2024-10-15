import CardPanel from "@/components/CardPanel";
import getHospitals from "@/libs/getHospitals";
import HospitalCatalog from "@/components/HospitalCatalog";
export default async function Hospital() {
  const hospitals = await getHospitals();
  return (
    <main>
      <HospitalCatalog hospitalsJson={hospitals} />
    </main>
  );
}
