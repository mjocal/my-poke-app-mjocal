import React, { useState } from "react";
import "../../styles/global.scss";
import "../../styles/shared/styledCard.scss";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { usePokemonApi } from "../../contexts/PokemonContext";
import { PokemonModal } from "./PokemonModal";
import { usePokemonMovesApi } from "../../contexts/PokemonMovesContext";

export const PokemonInlineCard = ({
  image,
  name,
  id,
  type,
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
      <Card className="white-inline-card margin-bottom-05">
        <CardContent className="full-width">
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
          <Button
            size="small"
            onClick={() => {
              handleOpen();
              handlePokemonId(id);
              handleMovePowers(moveA, moveB, moveC, moveD);
            }}
          >
            View
          </Button>
        </CardActions>
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
