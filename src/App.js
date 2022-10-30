import "./App.css";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";

function App() {
  return (
    <Grid container>
      <Button
        variant={"mainButton"}
        className={"margin"}
        sx={{
          width: 200,
          boxShadow: 0,
        }}
      >
        <Typography variant={"h1"}>Register</Typography>
      </Button>
    </Grid>
  );
}

export default App;
