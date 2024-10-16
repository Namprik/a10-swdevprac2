import DateReserve from "@/components/DateReserve";
import { Select, MenuItem, TextField, Button } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import getUserProfile from "@/libs/getUserProfile";
export default async function Booking() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;
  const profile = await getUserProfile(session.user.token);
  var createdAt = new Date(profile.data.createdAt);
  return (
    <main className="h-full flex flex-col justify-center items-center space-y-9">
      <div>
        <div className="font-semibold text-center">User Profile</div>
        <table>
          <tr>
            <td>Name:</td>
            <td>{profile.data.name}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{profile.data.email}</td>
          </tr>
          <tr>
            <td>Tel.:</td>
            <td>{profile.data.tel}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{profile.data.email}</td>
          </tr>
          <tr>
            <td>Member Since:</td>
            <td>{createdAt.toString()}</td>
          </tr>
        </table>
      </div>
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
