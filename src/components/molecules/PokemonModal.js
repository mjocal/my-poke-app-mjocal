import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { usePokemonApi } from "../../contexts/PokemonContext";

export const PokemonModal = ({
  open,
  close,
  id,
  name,
  type,
  height,
  weight,
  hp,
  moveA,
  moveB,
}) => {
  const { attackPowerA, attackPowerB } = usePokemonApi();
  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Basic Info {id} {name} {moveA} {attackPowerA}
        {close ? (
          <IconButton
            aria-label="close"
            onClick={close}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          {moveA} - {attackPowerA}
        </Typography>
        <Typography gutterBottom>
          {moveB} - {attackPowerB}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};
