import { Box } from "@mui/material";
import React from "react";
import { TeamLeftColumn } from "../molecules/TeamLeftColumn";
import { TeamRightColumn } from "../molecules/TeamRightColumn";

import StyledPokedexGrid from "../shared/styledPokedexGrid";

export default function PokemonTeamGrid() {
  return (
    <StyledPokedexGrid>
      <Box sx={{ width: 1 }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3}>
          <TeamLeftColumn />
          <TeamRightColumn />
        </Box>
      </Box>
    </StyledPokedexGrid>
  );
}
