import { Box, Typography } from "@mui/material";
import DonateComponent from '../components/DonateComponent';
import StudentCarousel from '../components/StudentCarousel';
import WorkForceComponent from '../components/WorkForceComponent';


export default function Home() {
  return (
    <Box>
      <Typography color="black">Home Page</Typography>
      {/* Render the components here for the given task */}
      <WorkForceComponent/>
      <StudentCarousel/>
      <DonateComponent/>
    </Box>
  );
}
