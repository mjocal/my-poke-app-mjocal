import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { usePokemonApi } from "../../contexts/PokemonContext";
import { PokemonImage } from "../molecules/PokemonImage";
import StyledPokedexGrid from "../shared/styledPokedexGrid";
import StyledRightColumn from "../shared/styledRightColumn";

export const TeamRightColumn = () => {
  const { pokemon } = usePokemonApi();

  return (
    <StyledRightColumn>
      <Card style={{ backgroundColor: "#ebf8ff", height: "60vh" }}>
        <div
          style={{
            overflow: "auto",
            height: "60vh",
          }}
        >
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Available Teams
            </Typography>

            <CardActions>
              <Button size="small">Add Team</Button>
            </CardActions>
            <Card
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
            </Card>

            <div>
              <Card
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                <CardContent>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    Team 2: Name
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Edit</Button>
                </CardActions>
              </Card>
            </div>
            <div>
              <Card
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                <CardContent>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    Team 3: Name
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Edit</Button>
                </CardActions>
              </Card>
            </div>
          </CardContent>
        </div>
      </Card>
    </StyledRightColumn>
  );
};
