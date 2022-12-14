import React from "react";
import "../styles/global.scss";
import { CardMedia, Button, ButtonGroup } from "@mui/material";
import welcome from "./../store/images/Welcome/welcome.jpg";
import { Link } from "react-router-dom";
import StyledCardActions from "./shared/styledCardActions";
import StyledFormCard from "./shared/styledFormCard";

export default function Dashboard() {
  return (
    <main>
      <StyledFormCard>
        <CardMedia component="img" image={welcome} alt="welcome image" />
        <StyledCardActions>
          <ButtonGroup variant="contained" size="large">
            <Button component={Link} to="/login">
              Log In
            </Button>
          </ButtonGroup>
          <ButtonGroup variant="contained" size="large">
            <Button component={Link} to="/signin">
              Create an Account
            </Button>
          </ButtonGroup>
        </StyledCardActions>
      </StyledFormCard>
    </main>
  );
}
