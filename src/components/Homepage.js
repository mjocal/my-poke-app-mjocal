import React, { useState } from "react";
import {
  CardMedia,
  Button,
  ButtonGroup,
  Grid,
  Alert,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import homepage from "./../store/images/backgrounds/homepage.jpg";
import { useFirebaseAuth } from "../contexts/FirebaseContext";
import StyledFormCard from "./shared/styledFormCard";

export default function MainMenu() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useFirebaseAuth();
  const navigate = useNavigate();

  async function handleLogOut() {
    setError("");

    try {
      await logout();
      navigate("/");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <main>
      <StyledFormCard style={{ backgroundColor: "#e6f4ff" }}>
        <CardMedia component="img" image={homepage} alt="homepage image" />
        <Grid>
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            style={{
              margin: "1rem auto",
            }}
          >
            Welcome {currentUser.email}
          </Typography>

          {error && <Alert severity="error">{error}</Alert>}

          <div>
            <ButtonGroup variant="contained">
              <Button component={Link} to="/myProfile" disabled>
                My Profile (WIP)
              </Button>
            </ButtonGroup>
          </div>
          <div
            style={{
              marginTop: "1rem",
            }}
          >
            <ButtonGroup variant="contained">
              <Button component={Link} to="/pokedex">
                View Pokedex
              </Button>
            </ButtonGroup>
          </div>
          <div
            style={{
              marginTop: "1rem",
            }}
          >
            <ButtonGroup variant="contained">
              <Button component={Link} to="/myTeam">
                Manage my Team (WIP)
              </Button>
            </ButtonGroup>
          </div>
          <div
            style={{
              marginTop: "1rem",
            }}
          >
            <ButtonGroup variant="contained">
              <Button component={Link} to="" disabled>
                BATTLE ! (WIP)
              </Button>
            </ButtonGroup>
          </div>
          <div
            style={{
              margin: "1rem auto",
            }}
          >
            <ButtonGroup variant="contained">
              <Button onClick={handleLogOut}>Log Out</Button>
            </ButtonGroup>
          </div>
        </Grid>
      </StyledFormCard>
    </main>
  );
}
