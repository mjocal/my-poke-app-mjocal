import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import StyledPokedexGrid from "../shared/styledPokedexGrid";
import { PokemonCard } from "../molecules/PokemonCard";
import { useFirebaseAuth } from "./FirebaseContext";

const PokemonContext = createContext({
  pokemon: [],
  //  selectedTeam: [],
  getNextPokemon: () => Promise.resolve(),
  getPreviousPokemon: () => Promise.resolve(),
});

export const PokemonProvider = ({ children }) => {
  const { firebaseUser } = useFirebaseAuth();
  const [pokemon, setPokemon] = useState({});
  const [pokemonLimit, setPokemonLimit] = React.useState(20);
  const [pokemonOffset, setPokemonOffset] = React.useState(0);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  const pokemonArray = [];

  const getAllPokemons = useCallback(() => {}, []);

  async function getAllData(offset, limit) {
    const [data] = await Promise.all([
      fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
      ),
    ]);

    const [pokemonListData] = await Promise.all([data.json()]);

    setResult(
      pokemonListData.results.map((item) => {
        fetch(item.url)
          .then((response) => response.json())
          .then((allpokemon) => pokemonArray.push(allpokemon));
        setPokemon(pokemonArray);
      })
    );
  }

  //   const contextValue = useMemo(
  //     () => ({ pokemon, getNextPokemon, getPreviousPokemon, loading }),
  //     [pokemon, getNextPokemon, getPreviousPokemon, loading]
  //   );

  //   return (
  //     <PokemonContext.Provider value={contextValue}>
  //       {children}
  //     </PokemonContext.Provider>
  //   );
};

export const usePokemonApi = () => useContext(PokemonContext);
