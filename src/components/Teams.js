import React from "react";
import "../styles/global.scss";
import { Typography, Button, ButtonGroup, Container } from "@mui/material";
import { Link } from "react-router-dom";
import StyledBackHomeDiv from "./shared/styledBackHomeDiv";
import StyledHeaderDiv from "./shared/styledHeaderDiv";
import PokemonTeamGrid from "./organisms/PokemonTeamGrid";

export default function Teams() {
  return (
    <Container className="align-center">
      <StyledHeaderDiv>
        <Typography variant="h3" component="div">
          My Team
        </Typography>
      </StyledHeaderDiv>
      <StyledBackHomeDiv>
        <ButtonGroup variant="contained">
          <Button component={Link} to="/home" className="black-bg">
            Back to home
          </Button>
        </ButtonGroup>
        <ButtonGroup variant="contained" className="margin-left-5">
          <Button component={Link} to="/pokedex" className="black-bg">
            View Pokedex
          </Button>
        </ButtonGroup>
      </StyledBackHomeDiv>
      <PokemonTeamGrid />
    </Container>
  );
}
