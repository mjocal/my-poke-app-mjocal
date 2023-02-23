import React from "react";
import "../../styles/shared/styledCard.scss";
import { Card, CardContent } from "@mui/material";

export const PokemonImage = ({ image }) => {
  return (
    <Card className="light-yellow-image-card">
      <CardContent>
        <img src={image} alt="pokemon" />
      </CardContent>
    </Card>
  );
};
