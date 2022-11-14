import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  Input,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { usePokemonApi } from "../../contexts/PokemonContext";
import { PokemonImage } from "../molecules/PokemonImage";
import { PokemonTeamCard } from "../molecules/PokemonTeamCard";
import StyledRightColumn from "../shared/styledRightColumn";
import { PokemonDialog } from "../molecules/PokemonDialog";

export const TeamRightColumn = () => {
  const { pokemon } = usePokemonApi();
  const [teamCard, setTeamCard] = useState([]);
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

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
            <>
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
                  <PokemonDialog open={open} close={handleCloseList} />
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
            </>
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
