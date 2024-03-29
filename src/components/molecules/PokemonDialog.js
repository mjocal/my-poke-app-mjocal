import React, { useState } from "react";
import "../../styles/global.scss";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { usePokemonApi } from "../../contexts/PokemonContext";
import StyledDialogTitle from "../shared/styledDialogTitle";

export const PokemonDialog = ({ open, close, pokemonTeam, value }) => {
  const { pokemon } = usePokemonApi();
  const [pokemonValue, setPokemonValue] = useState([]);

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 48 * 4.5 + 8,
        width: 250,
      },
    },
  };

  const handleChange = (e) => {
    setPokemonValue(e.target.value);
  };

  const handleAddTeam = () => {
    pokemonTeam = pokemonValue;
    value = pokemonValue;
    console.log("pokemonTeam", pokemonTeam);
    console.log("value", value);
    close();
  };

  return (
    <>
      <Dialog open={open} onClose={close}>
        <StyledDialogTitle className="salmon-bg">
          Select Pokemon
        </StyledDialogTitle>
        <DialogContent>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel>Select Pokemon</InputLabel>
            <Select
              multiple
              value={pokemonValue}
              onChange={handleChange}
              MenuProps={MenuProps}
              className="width-250"
              input={<OutlinedInput label="Select Pokemon" />}
              renderValue={(selected) => selected.join(", ")}
            >
              {pokemon?.map((item) => {
                return (
                  <MenuItem key={item.id} value={item.name}>
                    <Checkbox checked={pokemonValue.indexOf(item.name) > -1} />
                    <ListItemText primary={item.name} />
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleAddTeam();
            }}
          >
            Add
          </Button>
          <Button onClick={close}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
