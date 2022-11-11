import React, { createContext, useContext, useState, useEffect } from "react";

const PokemonContext = createContext({
  pokemon: [],
  pokemonId: [],
  attackPowerA: [],
  attackPowerB: [],
  getPokemons: () => Promise.resolve(),
  getPokemonData: () => Promise.resolve(),
  getMovePowerA: () => Promise.resolve(),
  getMovePowerB: () => Promise.resolve(),
});

export function PokemonProvider({ children }) {
  const [pokemon, setPokemon] = useState({});
  const [attackPowerA, setAttackPowerA] = useState(0);
  const [attackPowerB, setAttackPowerB] = useState(0);
  const [pokemonId, setPokemonId] = useState();

  const pokeApi = "https://pokeapi.co/api/v2";

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  async function getPokemons() {
    try {
      const data = await fetch(`${pokeApi}/pokemon?limit=151`)
        .then((response) => response.json())
        .then((data) => {
          return data;
        });

      const pokemonArray = await Promise.all(
        data.results.map((item) =>
          fetch(item.url).then((response) => response.json())
        )
      );
      setPokemon(pokemonArray);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  async function getPokemonData(id) {
    if (id > 0) {
      try {
        const response = await fetch(`${pokeApi}/pokemon/${id}`);
        const data = await response.json();
        console.log("data", data);
        setPokemonId(data);
        return data;
      } catch (error) {
        console.log("error: ", error);
      }
    }
  }

  async function getMovePowerA(move, power) {
    if (move !== undefined) {
      try {
        power = await fetch(`${pokeApi}/move/${move}`)
          .then((response) => response.json())
          .then((data) => {
            power = data.power;
            return power > 0 ? power : getRandomInt(26);
          });
        setAttackPowerA(power);
        return power;
      } catch (error) {
        console.log("error: ", error);
      }
    }
  }

  async function getMovePowerB(move, power) {
    if (move !== undefined) {
      try {
        power = await fetch(`${pokeApi}/move/${move}`)
          .then((response) => response.json())
          .then((data) => {
            power = data.power;
            return power > 0 ? power : getRandomInt(26);
          });
        setAttackPowerB(power);
        return power;
      } catch (error) {
        console.log("error: ", error);
      }
    }
  }

  useEffect(() => {
    getPokemons();
    getPokemonData();
    getMovePowerA();
    getMovePowerB();
  }, []);

  const contextValue = {
    pokemon,
    pokemonId,
    attackPowerA,
    attackPowerB,
    getPokemons,
    getPokemonData,
    getMovePowerA,
    getMovePowerB,
  };

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
}

export const usePokemonApi = () => useContext(PokemonContext);
