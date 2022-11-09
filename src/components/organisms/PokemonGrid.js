import React from "react";
import { usePokemonApi } from "../../contexts/PokemonContext";

import StyledPokedexGrid from "../shared/styledPokedexGrid";
import { PokemonCard } from "../molecules/PokemonCard";

export const PokemonGrid = () => {
  const { pokemon, loading } = usePokemonApi();

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
          />
        ))
      )}
    </StyledPokedexGrid>
  );
};
