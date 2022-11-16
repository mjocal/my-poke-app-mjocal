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
              MenuProps={MenuProps}
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
