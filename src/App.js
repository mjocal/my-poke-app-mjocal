import Register from "./components/Register";
import { Grid } from "@mui/material";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Register />
      </Grid>
    </AuthProvider>
  );
}

export default App;
