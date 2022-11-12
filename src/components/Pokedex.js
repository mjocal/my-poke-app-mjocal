import React from "react";
import { Typography, Button, ButtonGroup, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { PokemonGrid } from "./organisms/PokemonGrid";
import StyledBackHomeDiv from "./shared/styledBackHomeDiv";
import StyledHeaderDiv from "./shared/styledHeaderDiv";

export default function Pokedex() {
  return (
    <Container
      style={{
        textAlign: "center",
        padding: 0,
      }}
    >
      <StyledHeaderDiv>
        <Typography variant="h3" component="div">
          Pokedex
        </Typography>
      </StyledHeaderDiv>
      <StyledBackHomeDiv>
        <ButtonGroup variant="contained">
          <Button
            component={Link}
            to="/home"
            style={{
              backgroundColor: "#000",
            }}
          >
            Back to home
          </Button>
        </ButtonGroup>
      </StyledBackHomeDiv>
      <PokemonGrid />
    </Container>
  );
}
