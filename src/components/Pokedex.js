import React from "react";
import { Typography, Button, ButtonGroup, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { PokemonGrid } from "./organisms/PokemonGrid";
import StyledBackHomeDiv from "./shared/styledBackHomeDiv";
import StyledHeaderDiv from "./shared/styledHeaderDiv";
import "../styles/global.scss";

export default function Pokedex() {
  return (
    <Container className="align-center">
      <StyledHeaderDiv>
        <Typography variant="h3" component="div">
          Pokedex
        </Typography>
      </StyledHeaderDiv>
      <StyledBackHomeDiv>
        <ButtonGroup variant="contained">
          <Button component={Link} to="/home" className="black-bg">
            Back to home
          </Button>
        </ButtonGroup>
        <ButtonGroup variant="contained" className="margin-left-5">
          <Button component={Link} to="/myTeam" className="black-bg">
            My Team
          </Button>
        </ButtonGroup>
      </StyledBackHomeDiv>
      <PokemonGrid />
    </Container>
  );
}
