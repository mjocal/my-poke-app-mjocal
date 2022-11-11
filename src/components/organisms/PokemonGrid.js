import React, { useState } from "react";
import { usePokemonApi } from "../../contexts/PokemonContext";

import StyledPokedexGrid from "../shared/styledPokedexGrid";
import { PokemonCard } from "../molecules/PokemonCard";

export const PokemonGrid = () => {
  const { pokemon } = usePokemonApi();
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <StyledPokedexGrid>
      {loading ? (
        <p>Loading...</p>
      ) : (
        pokemon.map((item, i) => (
          <PokemonCard
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
                ? "hello!"
                : item.moves[1].move.name
            }
            moveC={
              typeof item.moves[2] === "undefined"
                ? "hi!"
                : item.moves[2].move.name
            }
            moveD={
              typeof item.moves[3] === "undefined"
                ? "morning!"
                : item.moves[3].move.name
            }
          />
        ))
      )}
    </StyledPokedexGrid>
  );
};
