import React from "react";
import { Card, CardContent } from "@mui/material";

export const PokemonImage = ({ image }) => {
  return (
    <Card
      style={{
        width: "8rem",
        marginBottom: "0.5rem",
        backgroundColor: "#fffded",
      }}
    >
      <CardContent>
        <img src={image} alt="pokemon" />
      </CardContent>
    </Card>
  );
};
