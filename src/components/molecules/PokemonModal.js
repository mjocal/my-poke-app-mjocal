import * as React from "react";
import "../../styles/global.scss";
import "../../styles/shared/styledCard.scss";
import {
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { usePokemonMovesApi } from "../../contexts/PokemonMovesContext";
import StyledPokedexGrid from "../shared/styledPokedexGrid";
import StyledDialogTitle from "../shared/styledDialogTitle";

export const PokemonModal = ({
  open,
  close,
  id,
  name,
  type,
  image,
  hp,
  moveA,
  moveB,
  moveC,
  moveD,
}) => {
  const { attackPowerA, attackPowerB, attackPowerC, attackPowerD } =
    usePokemonMovesApi();
  return (
    <Dialog open={open} onClose={close}>
      <StyledDialogTitle className="salmon-bg">
        Basic Info
        {close ? (
          <IconButton
            aria-label="close"
            onClick={close}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "white",
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </StyledDialogTitle>
      <DialogContent dividers className="light-blue-bg">
        <StyledPokedexGrid>
          <Card className="white-bg align-self-center">
            <CardContent>
              <Grid container justifyContent="center">
                <img src={image} alt="pokemon" />
              </Grid>
              <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
                {name}
              </Typography>
              <Typography sx={{ textTransform: "capitalize" }}>
                Type: {type}
              </Typography>
              <Typography gutterBottom component="div">
                HP: {hp}
              </Typography>
            </CardContent>
          </Card>
          <Card className="white-bg align-self-center">
            <CardContent>
              <Typography variant="h5" gutterBottom component="div">
                Attacks:
              </Typography>
              <Typography sx={{ textTransform: "capitalize" }} gutterBottom>
                {moveA} - {attackPowerA}
              </Typography>
              <Typography sx={{ textTransform: "capitalize" }} gutterBottom>
                {moveB} - {attackPowerB}
              </Typography>
              <Typography sx={{ textTransform: "capitalize" }} gutterBottom>
                {moveC} - {attackPowerC}
              </Typography>
              <Typography sx={{ textTransform: "capitalize" }} gutterBottom>
                {moveD} - {attackPowerD}
              </Typography>
            </CardContent>
          </Card>
        </StyledPokedexGrid>
      </DialogContent>
    </Dialog>
  );
};
