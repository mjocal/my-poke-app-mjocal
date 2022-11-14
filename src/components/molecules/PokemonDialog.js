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
import React, { useState } from "react";
import { usePokemonApi } from "../../contexts/PokemonContext";

export const PokemonDialog = ({ open, close, value }) => {
  const { pokemon } = usePokemonApi();
  const [pokemonValue, setPokemonValue] = useState([]);

  const handleChange = (event) => {
    setPokemonValue(event.target.value);
  };

  return (
    <>
      <Dialog open={open} onClose={close}>
        <DialogTitle
          sx={{ m: 0, p: 2, fontWeight: "bold", textTransform: "uppercase" }}
          style={{
            backgroundColor: "#ff8177",
          }}
        >
          Select Pokemon
        </DialogTitle>
        <DialogContent>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel>Select Pokemon</InputLabel>
            <Select
              multiple
              value={pokemonValue}
              onChange={handleChange}
              style={{ width: "250px" }}
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
          <Button onClick={close}>Add</Button>
          <Button onClick={close}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
