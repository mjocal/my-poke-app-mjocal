import { Grid } from "@mui/material";
import { FirebaseProvider } from "./contexts/FirebaseContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import MainMenu from "./components/MainMenu";
import Profile from "./components/Profile";
// import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Router>
        <FirebaseProvider>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/logIn" element={<Login />} />
            <Route path="/menu" element={<MainMenu />} />
            <Route path="/myProfile" element={<Profile />} />
            {/* <Route
              path="/myProfile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            /> */}
          </Routes>
        </FirebaseProvider>
      </Router>
    </Grid>
  );
}

export default App;

// <Route path="/signup" element={<Signup/>}/>
