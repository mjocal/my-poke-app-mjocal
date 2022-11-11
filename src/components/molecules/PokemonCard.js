import React, { useState } from "react";
import { Card, CardContent, CardActionArea, Typography } from "@mui/material";
import { usePokemonApi } from "../../contexts/PokemonContext";
import { PokemonModal } from "./PokemonModal";

export const PokemonCard = ({
  image,
  name,
  id,
  type,
  height,
  weight,
  hp,
  moveA,
  moveB,
  moveC,
  moveD,
}) => {
  const { getPokemonData, getMovePowerA, getMovePowerB } = usePokemonApi();
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

  const handleMovePowers = (moveA, moveB) => {
    getMovePowerA(moveA);
    getMovePowerB(moveB);
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
          handleMovePowers(moveA, moveB);
        }}
      >
        <CardActionArea>
          <img src={image} alt="pokemon" />
          <CardContent>
            <Typography variant="h6" component="div">
              # {id} {type}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <PokemonModal
        open={open}
        close={handleClose}
        id={id}
        name={name}
        type={type}
        height={height}
        weight={weight}
        hp={hp}
        moveA={moveA}
        moveB={moveB}
        moveC={moveC}
        moveD={moveD}
        image={image}
      />
    </>
  );
};
