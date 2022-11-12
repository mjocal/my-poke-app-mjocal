import React, { useState } from "react";
import { Card, CardContent, CardActionArea, Typography } from "@mui/material";
import { usePokemonApi } from "../../contexts/PokemonContext";
import { PokemonModal } from "./PokemonModal";
import { usePokemonMovesApi } from "../../contexts/PokemonMovesContext";

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
  const { getPokemonData } = usePokemonApi();
  const { getMovePowerA, getMovePowerB, getMovePowerC, getMovePowerD } =
    usePokemonMovesApi();
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

  const handleMovePowers = (moveA, moveB, moveC, moveD) => {
    getMovePowerA(moveA);
    getMovePowerB(moveB);
    getMovePowerC(moveC);
    getMovePowerD(moveD);
  };

  return (
    <>
      <Card
        id={id}
        key={id}
        style={{
          width: 200,
          backgroundColor: "#fffded",
        }}
        onClick={() => {
          handleOpen();
          handlePokemonId(id);
          handleMovePowers(moveA, moveB, moveC, moveD);
        }}
      >
        <CardActionArea>
          <img src={image} alt="pokemon" />
          <CardContent>
            <Typography variant="h6" component="div">
              #{id} {type}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ textTransform: "capitalize" }}
            >
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
