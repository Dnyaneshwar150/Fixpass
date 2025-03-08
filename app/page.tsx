import { Grid } from "@mui/material";
import Card from "./components/common/Card/page";


export default function Home() {
  return (
   <Card>this is my card    <Grid color={"var(--primary-red)"} fontSize={"2rem"}>this is my grid</Grid>
 </Card>
  );
}
