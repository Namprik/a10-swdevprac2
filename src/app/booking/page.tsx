import DateReserve from "@/components/DateReserve";
import { Select, MenuItem, TextField, Button } from "@mui/material";

export default function Booking() {
  return (
    <main className="h-full flex justify-center items-center">
      <form className="flex flex-col w-1/2 p-3 border border-black rounded-xl space-y-4">
        <div className="text-center">Vaccine Booking</div>
        <TextField
          name="Name-Lastname"
          label="Name-Lastname"
          variant="standard"
        />
        <TextField name="Citizen ID" label="Citizen ID" variant="standard" />
        <Select id="hospital" variant="standard">
          <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
          <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
          <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
        </Select>
        <DateReserve />
        <Button variant="contained" name="Book Vaccine">
          Book Vaccine
        </Button>
      </form>
    </main>
  );
}
