import React from "react";
import { Card, CardContent } from "@mui/material";

export const PokemonImage = ({ image, name }) => {
  return (
    <Card
      style={{
        width: "8rem",
        marginBottom: "0.5rem",
        backgroundColor: "#fffded",
      }}
    >
      <CardContent>
        <img src={image} alt={name} />
      </CardContent>
    </Card>
  );
};
