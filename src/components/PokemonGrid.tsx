import * as React from "react";
import { IBaseItem } from "../models/interfaces";
import PokemonCell from "./PokemonCell";

type PokemonGridProps = {
  pokemonData: IBaseItem[];
};

const PokemonGrid = ({ pokemonData }: PokemonGridProps): JSX.Element => {
  return (
    <div className="bg-white grid grid-cols-4 mx-auto max-w-4xl px-2.5">
      {pokemonData.map((pokemonInfo) => (
        <PokemonCell key={pokemonInfo.name} pokemonInfo={pokemonInfo} />
      ))}
    </div>
  );
};

export default PokemonGrid;
