import React from "react";
import { TeamLeftColumn } from "../molecules/TeamLeftColumn";
import { TeamRightColumn } from "../molecules/TeamRightColumn";
import StyledTeamGrid from "../shared/styledTeamGrid";

export default function PokemonTeamGrid() {
  return (
    <StyledTeamGrid>
      <TeamLeftColumn />
      <TeamRightColumn />
    </StyledTeamGrid>
  );
}
