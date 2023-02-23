import React from "react";
import "../../styles/global.scss";
import "../../styles/shared/styledCard.scss";
import { Card, CardContent, Typography } from "@mui/material";
import { usePokemonApi } from "../../contexts/PokemonContext";
import StyledLeftColumn from "../shared/styledLeftColumn";

import { PokemonInlineCard } from "../molecules/PokemonInlineCard";

export const TeamLeftColumn = () => {
  const { pokemon } = usePokemonApi();

  return (
    <StyledLeftColumn>
      <Card className="left-list-cyan">
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Pokemon List
          </Typography>
          <div className="card-overflow">
            {pokemon.map((item, i) => (
              <div key={i}>
                <PokemonInlineCard
                  key={i}
                  image={item.sprites.front_default}
                  name={item.name}
                  id={item.id}
                  type={item.types[0].type.name}
                  height={item.height}
                  weight={item.weight}
                  hp={item.stats[0].base_stat}
                  moveA={item.moves[0].move.name}
                  moveB={
                    typeof item.moves[1] === "undefined"
                      ? item.moves[0].move.name
                      : item.moves[1].move.name
                  }
                  moveC={
                    typeof item.moves[2] === "undefined"
                      ? item.moves[0].move.name
                      : item.moves[2].move.name
                  }
                  moveD={
                    typeof item.moves[3] === "undefined"
                      ? item.moves[0].move.name
                      : item.moves[3].move.name
                  }
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </StyledLeftColumn>
  );
};
