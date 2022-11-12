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
import StyledPokedexGrid from "../shared/styledPokedexGrid";

export default function PokemonTeamGrid() {
  return (
    <StyledPokedexGrid>
      <Box sx={{ width: 1 }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3}>
          <Box gridColumn="span 5">
            <Card style={{ backgroundColor: "#ebf8ff" }}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  Pokemon List
                </Typography>
                <Card style={{ display: "inline-flex" }}>
                  <CardContent>
                    <Typography variant="p" color="text.secondary" gutterBottom>
                      Pokemon Name
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Add</Button>
                  </CardActions>
                </Card>
              </CardContent>
            </Card>
          </Box>
          <Box gridColumn="span 7">
            <Card style={{ backgroundColor: "#ebf8ff" }}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  Available Teams
                </Typography>
                <Card>
                  <CardContent>
                    <Typography variant="p" color="text.secondary" gutterBottom>
                      Team Name
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </StyledPokedexGrid>
  );
}
