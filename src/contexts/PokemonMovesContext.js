import React, { createContext, useContext, useState, useEffect } from "react";

const PokemonMovesContext = createContext({
  attackPowerA: [],
  attackPowerB: [],
  attackPowerC: [],
  attackPowerD: [],
  getMovePowerA: () => Promise.resolve(),
  getMovePowerB: () => Promise.resolve(),
  getMovePowerC: () => Promise.resolve(),
  getMovePowerD: () => Promise.resolve(),
});

export function PokemonMovesProvider({ children }) {
  const [attackPowerA, setAttackPowerA] = useState(0);
  const [attackPowerB, setAttackPowerB] = useState(0);
  const [attackPowerC, setAttackPowerC] = useState(0);
  const [attackPowerD, setAttackPowerD] = useState(0);

  const pokeApi = "https://pokeapi.co/api/v2/move/";

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  async function getMovePowerA(move, power) {
    if (move !== undefined) {
      try {
        power = await fetch(`${pokeApi}${move}`)
          .then((response) => response.json())
          .then((data) => {
            power = data.power;
            return power > 0 ? power : getRandomInt(80);
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
        power = await fetch(`${pokeApi}${move}`)
          .then((response) => response.json())
          .then((data) => {
            power = data.power;
            return power > 0 ? power : getRandomInt(80);
          });
        setAttackPowerB(power);
        return power;
      } catch (error) {
        console.log("error: ", error);
      }
    }
  }

  async function getMovePowerC(move, power) {
    if (move !== undefined) {
      try {
        power = await fetch(`${pokeApi}${move}`)
          .then((response) => response.json())
          .then((data) => {
            power = data.power;
            return power > 0 ? power : getRandomInt(80);
          });
        setAttackPowerC(power);
        return power;
      } catch (error) {
        console.log("error: ", error);
      }
    }
  }

  async function getMovePowerD(move, power) {
    if (move !== undefined) {
      try {
        power = await fetch(`${pokeApi}${move}`)
          .then((response) => response.json())
          .then((data) => {
            power = data.power;
            return power > 0 ? power : getRandomInt(80);
          });
        setAttackPowerD(power);
        return power;
      } catch (error) {
        console.log("error: ", error);
      }
    }
  }

  useEffect(() => {
    getMovePowerA();
    getMovePowerB();
    getMovePowerC();
    getMovePowerD();
  }, []);

  const contextValue = {
    attackPowerA,
    attackPowerB,
    attackPowerC,
    attackPowerD,
    getMovePowerA,
    getMovePowerB,
    getMovePowerC,
    getMovePowerD,
  };

  return (
    <PokemonMovesContext.Provider value={contextValue}>
      {children}
    </PokemonMovesContext.Provider>
  );
}

export const usePokemonMovesApi = () => useContext(PokemonMovesContext);
