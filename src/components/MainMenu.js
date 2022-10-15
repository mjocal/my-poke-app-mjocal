import React, { useState } from "react";
import {
  Card,
  CardMedia,
  Button,
  ButtonGroup,
  Grid,
  Alert,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import forest from "./../store/images/backgrounds/forest.jpg";
import { useAuth } from "../contexts/FirebaseContext";

export default function MainMenu() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
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
    <>
      <Card>
        <CardMedia component="img" image={forest} alt="forest image" />
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            gutterBottom
            variant="h5"
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
              <Button component={Link} to="" disabled>
                Go to Pokedex (WIP)
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
      </Card>
    </>
  );
}
