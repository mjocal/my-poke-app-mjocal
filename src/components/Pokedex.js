import React from "react";
import { Typography, Button, ButtonGroup, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { PokemonGrid } from "./organisms/PokemonGrid";

export default function Pokedex() {
  return (
    <Container
      style={{
        textAlign: "center",
      }}
    >
      <Typography gutterBottom variant="h3" component="div">
        Pokedex
      </Typography>
      <ButtonGroup
        variant="contained"
        style={{
          marginBottom: "2rem",
        }}
      >
        <Button component={Link} to="/home">
          Back to home
        </Button>
      </ButtonGroup>
      <PokemonGrid />
    </Container>
  );
}
