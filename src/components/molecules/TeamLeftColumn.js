import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { usePokemonApi } from "../../contexts/PokemonContext";
import StyledLeftColumn from "../shared/styledLeftColumn";

import { PokemonInlineCard } from "./PokemonInlineCard";

export const TeamLeftColumn = () => {
  const { pokemon } = usePokemonApi();

  return (
    <StyledLeftColumn>
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
