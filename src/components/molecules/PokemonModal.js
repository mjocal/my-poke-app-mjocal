import * as React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { usePokemonMovesApi } from "../../contexts/PokemonMovesContext";
import StyledPokedexGrid from "../shared/styledPokedexGrid";
import { Link } from "react-router-dom";

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
      <DialogTitle
        sx={{ m: 0, p: 2, fontWeight: "bold", textTransform: "uppercase" }}
        style={{
          backgroundColor: "#ff8177",
        }}
      >
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
      </DialogTitle>
      <DialogContent
        dividers
        style={{
          backgroundColor: "#CEECF5",
        }}
      >
        <StyledPokedexGrid>
          <Card
            style={{
              backgroundColor: "#FFF",
              alignSelf: "center",
            }}
          >
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
          <Card
            style={{
              backgroundColor: "#FFF",
              alignSelf: "center",
            }}
          >
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
        {/* <DialogActions>
          <Grid container justifyContent="center">
            <Button
              variant="contained"
              component={Link}
              to="/myTeam"
              sx={{ mt: 2, fontWeight: "bold", letterSpacing: 1 }}
              style={{
                backgroundColor: "#78c731",
                color: "#ffffff",
                textShadow: "1 1 #999",
              }}
            >
              Add to team
            </Button>
          </Grid>
        </DialogActions> */}
      </DialogContent>
    </Dialog>
  );
};
