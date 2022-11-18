import React, { useState } from "react";
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
import { usePokemonApi } from "../../contexts/PokemonContext";
import { Box } from "@mui/system";

export const TeamRightColumn = () => {
  const [pokemonValue, setPokemonValue] = useState([]);
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

  const handleChange = (e) => {
    setPokemonValue(e.target.value);
  };

  const handleAddTeam = () => {
    if (value !== "") {
      setTeamCard([...teamCard, { name: value }]);
      setValue("");
    }
  };

  const handleValueChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleDeleteTeam = (id) => {
    setTeamCard(teamCard.filter((item, team) => team !== id));
  };

  const handleDisplayTeam = () => {
    setPokemonValue(pokemonValue);
    setOpen(false);
  };

  const handleOpenList = () => {
    setOpen(true);
  };

  const handleCloseList = () => {
    setOpen(false);
  };

  return (
    <StyledRightColumn>
      <Card
        style={{
          backgroundColor: "#ebf8ff",
          height: "60vh",
          overflow: "auto",
        }}
      >
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Available Teams
          </Typography>
          <CardActions>
            <FormControl variant="standard">
              <Input
                value={value}
                onChange={handleValueChange}
                placeholder="Enter New Team Name"
              />
            </FormControl>
            <Button
              size="small"
              endIcon={<AddIcon style={{ alignSelf: "flex-end" }} />}
              onClick={handleAddTeam}
            >
              Add
            </Button>
          </CardActions>
          {teamCard.map((item, id) => (
            <div key={id}>
              <Card
                key={id}
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                <CardContent>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    Team {id + 1}: {item.name}
                  </Typography>
                  {pokemonValue.map((i) => (
                    <div>
                      <Box
                        key={i}
                        sx={{
                          border: 1,
                          borderRadius: 2,
                          borderColor: "#1976d2",
                          mb: 1,
                        }}
                      >
                        {i}
                      </Box>
                    </div>
                  ))}
                  {/* pending mover el dialogo a otro js */}
                  {/* <PokemonDialog
                    open={open}
                    close={handleCloseList}
                    pokemonTeam={pokemonTeam}
                    value={value}
                  /> */}
                  <Dialog open={open} onClose={handleCloseList}>
                    <DialogTitle
                      sx={{
                        m: 0,
                        p: 2,
                        fontWeight: "bold",
                        textTransform: "uppercase",
                      }}
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
                                <Checkbox
                                  checked={pokemonValue.indexOf(item.name) > -1}
                                />
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
                          handleDisplayTeam();
                        }}
                      >
                        Add
                      </Button>
                      <Button onClick={handleCloseList}>Cancel</Button>
                    </DialogActions>
                  </Dialog>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => {
                      handleOpenList();
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
          {/* <Card
            style={{
              marginBottom: "0.5rem",
            }}
          >
            <CardContent
              style={{
                overflow: "auto",
              }}
            >
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Team 1: Name
              </Typography>
              <StyledPokedexGrid>
                {pokemon.slice(24, 30).map((item, i) => (
                  <PokemonImage
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.sprites.front_default}
                  />
                ))}
              </StyledPokedexGrid>
            </CardContent>
            <CardActions>
              <Button size="small">Edit</Button>
            </CardActions>
          </Card> */}
        </CardContent>
      </Card>
    </StyledRightColumn>
  );
};
