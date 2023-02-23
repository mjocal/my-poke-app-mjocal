import React, { useState } from "react";
import "../../styles/global.scss";
import "../../styles/shared/styledCard.scss";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import StyledRightColumn from "../shared/styledRightColumn";
import StyledPokemonBox from "../shared/styledPokemonBox";
import StyledDialogTitle from "../shared/styledDialogTitle";

import { usePokemonApi } from "../../contexts/PokemonContext";

export const TeamRightColumn = () => {
  const [pokemonValue, setPokemonValue] = useState([]);
  const [pokemonTeam, setPokemonTeam] = useState([]);
  const [teamCard, setTeamCard] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const { pokemon } = usePokemonApi();

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 48 * 4.5 + 8,
        width: 250,
      },
    },
  };

  const handleAddNewTeam = () => {
    if (value !== "") {
      setTeamCard([...teamCard, { name: value }]);
      setValue("");
    }
  };

  const handleTeamName = ({ target: { value } }) => {
    setValue(value);
  };

  const handleDeleteTeam = (id) => {
    setTeamCard(teamCard.filter((item, team) => team !== id));
  };

  const handleSelectMenu = (e) => {
    setPokemonValue(e.target.value);
  };

  const handleDisplaySelectedPokemon = () => {
    setPokemonTeam(
      pokemonValue.map((i) => (
        <div key={i}>
          <StyledPokemonBox key={i}>{i}</StyledPokemonBox>
        </div>
      ))
    );
    setOpen(false);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <StyledRightColumn>
      <Card className="right-list-cyan">
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Available Teams
          </Typography>
          <CardActions>
            <FormControl variant="standard">
              <Input
                value={value}
                onChange={handleTeamName}
                placeholder="Enter New Team Name"
              />
            </FormControl>
            <Button
              size="small"
              endIcon={<AddIcon style={{ alignSelf: "flex-end" }} />}
              onClick={handleAddNewTeam}
            >
              Add
            </Button>
          </CardActions>
          {teamCard.map((item, id) => (
            <div key={id}>
              <Card key={id} className="margin-bottom-05">
                <CardContent>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    Team {id + 1}: {item.name}
                  </Typography>
                  {pokemonTeam}
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => {
                      handleOpenModal();
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    onClick={() => {
                      handleDeleteTeam(id);
                    }}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))}
          {/* <StyledPokedexGrid>
                {pokemon.slice(24, 30).map((item, i) => (
                  <PokemonImage
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.sprites.front_default}
                  />
                ))}
              </StyledPokedexGrid> */}
        </CardContent>
      </Card>
      {/* pending mover el dialogo a otro js */}
      {/* <PokemonDialog
                    open={open}
                    close={handleCloseList}
                    pokemonTeam={pokemonTeam}
                    value={value}
                  /> */}
      <Dialog open={open} onClose={handleCloseModal}>
        <StyledDialogTitle className="salmon-bg">
          Select Pokemon
        </StyledDialogTitle>
        <DialogContent>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel>Select Pokemon</InputLabel>
            <Select
              multiple
              value={pokemonValue}
              onChange={handleSelectMenu}
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
              handleDisplaySelectedPokemon();
            }}
          >
            Add
          </Button>
          <Button onClick={handleCloseModal}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </StyledRightColumn>
  );
};
