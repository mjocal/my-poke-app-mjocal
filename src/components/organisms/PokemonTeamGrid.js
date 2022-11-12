import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { usePokemonApi } from "../../contexts/PokemonContext";
import { PokemonInlineCard } from "../molecules/PokemonInlineCard";

import StyledPokedexGrid from "../shared/styledPokedexGrid";

export default function PokemonTeamGrid() {
  const { pokemon } = usePokemonApi();

  return (
    <StyledPokedexGrid>
      <Box sx={{ width: 1 }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3}>
          <Box gridColumn="span 5">
            <Card
              style={{
                backgroundColor: "#ebf8ff",
                height: "60vh",
              }}
            >
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  Pokemon List
                </Typography>
                <div
                  style={{
                    overflow: "auto",
                    height: "50vh",
                  }}
                >
                  {pokemon.map((item, i) => (
                    <div key={i}>
                      <PokemonInlineCard
                        key={i}
                        name={item.name}
                        id={item.id}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Box>
          <Box gridColumn="span 7">
            <Card style={{ backgroundColor: "#ebf8ff", height: "60vh" }}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  Available Teams
                </Typography>
                <div>
                  <Card
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="p"
                        color="text.secondary"
                        gutterBottom
                      >
                        Team 1: Name
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
                      <Typography
                        variant="p"
                        color="text.secondary"
                        gutterBottom
                      >
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
                      <Typography
                        variant="p"
                        color="text.secondary"
                        gutterBottom
                      >
                        Team 3: Name
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Edit</Button>
                    </CardActions>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </StyledPokedexGrid>
  );
}
