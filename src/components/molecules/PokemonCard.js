import React from "react";
import { Card, CardContent, CardActionArea, Typography } from "@mui/material";

export const PokemonCard = ({ image, name, id, type }) => {
  return (
    <Card
      id={id}
      key={id}
      style={{
        width: 200,
        backgroundColor: "#FAFAFA",
      }}
    >
      <CardActionArea>
        <img src={image} alt="pokemon" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            Id: {id}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            Type: {type}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
