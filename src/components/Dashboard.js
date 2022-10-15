import React from "react";
import {
  Card,
  CardMedia,
  CardActions,
  Button,
  ButtonGroup,
  Grid,
} from "@mui/material";
import welcome from "./../store/images/Welcome/welcome.jpg";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <Card>
        <CardMedia component="img" image={welcome} alt="welcome image" />
        <Grid>
          <CardActions
            style={{
              margin: "2rem auto",
              justifyContent: "center",
            }}
          >
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
          </CardActions>
        </Grid>
      </Card>
    </>
  );
}
