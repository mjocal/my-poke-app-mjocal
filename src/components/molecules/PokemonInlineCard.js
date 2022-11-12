import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

export const PokemonInlineCard = ({ name, id }) => {
  return (
    <Card
      style={{
        display: "inline-flex",
        width: "15rem",
        marginBottom: "0.5rem",
      }}
    >
      <CardContent style={{ width: "100%" }}>
        <Typography
          variant="p"
          color="text.secondary"
          gutterBottom
          sx={{ textTransform: "capitalize" }}
        >
          #{id} {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add</Button>
      </CardActions>
    </Card>
  );
};
