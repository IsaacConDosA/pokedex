import * as React from "react";
import { IBaseItem } from "../models/interfaces";
import PokemonGrid from "./PokemonGrid";

type LayoutProps = {
  fetchPokemonData: () => void;
  pokemonData: IBaseItem[];
};

const Layout = ({
  fetchPokemonData,
  pokemonData,
}: LayoutProps): JSX.Element => {
  return (
    <div>
      <title>Pokédex | Pokemon.com</title>
      <link
        href="https://assets.pokemon.com/static2/_ui/img/favicon.ico"
        rel="shortcut icon"
      ></link>
      <main className="bg-[url('https://assets.pokemon.com/static2/_ui/img/chrome/body_bg.png')] h-full justify-center">
        <div className="bg-[url('https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png')] bg-white mx-auto max-w-5xl">
          <PokemonGrid pokemonData={pokemonData} />
          <div className="bg-white flex justify-center mx-auto max-w-4xl px-2.5 w-full">
            <button
              className="bg-[#30a7d7] font-sans px-5 py-3 rounded-md text-white"
              onClick={fetchPokemonData}
            >
              Cargar más Pokémon
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
