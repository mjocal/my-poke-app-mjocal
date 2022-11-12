import React from "react";
import { Typography, Button, ButtonGroup, Container } from "@mui/material";
import { Link } from "react-router-dom";
import StyledBackHomeDiv from "./shared/styledBackHomeDiv";
import StyledHeaderDiv from "./shared/styledHeaderDiv";
import PokemonTeamGrid from "./organisms/PokemonTeamGrid";

export default function Teams() {
  return (
    <Container
      style={{
        textAlign: "center",
        padding: 0,
      }}
    >
      <StyledHeaderDiv>
        <Typography variant="h3" component="div">
          My Team
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
        <ButtonGroup
          variant="contained"
          style={{
            marginLeft: "5px",
          }}
        >
          <Button
            component={Link}
            to="/pokedex"
            style={{
              backgroundColor: "#000",
            }}
          >
            View Pokedex
          </Button>
        </ButtonGroup>
      </StyledBackHomeDiv>
      <PokemonTeamGrid />
    </Container>
  );
}
