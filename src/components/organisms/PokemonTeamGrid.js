import React from "react";
import { TeamLeftColumn } from "./TeamLeftColumn";
import { TeamRightColumn } from "./TeamRightColumn";
import StyledTeamGrid from "../shared/styledTeamGrid";

export default function PokemonTeamGrid() {
  return (
    <StyledTeamGrid>
      <TeamLeftColumn />
      <TeamRightColumn />
    </StyledTeamGrid>
  );
}
