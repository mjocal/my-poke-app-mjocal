import React, { useState } from "react";
import { Card, CardContent, CardActionArea, Typography } from "@mui/material";
import { usePokemonApi } from "../../contexts/PokemonContext";
import { PokemonModal } from "./PokemonModal";

export const PokemonCard = ({ image, name, id, type }) => {
  const { getPokemonData } = usePokemonApi();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handlePokemonId = (id) => {
    getPokemonData(id);
  };

  return (
    <>
      <Card
        id={id}
        key={id}
        style={{
          width: 200,
          backgroundColor: "#FAFAFA",
        }}
        onClick={() => {
          handleOpen();
          handlePokemonId(id);
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
      <PokemonModal open={open} close={handleClose} id={id} />
    </>
  );
};
