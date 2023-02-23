import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export const PokemonTeamCard = (id, name, close) => {
  return (
    <Card className="margin-bottom-05">
      <CardContent>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Team {id}:
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small" onClick={close}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
