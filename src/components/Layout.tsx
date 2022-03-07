import * as React from "react";
import { IBaseItem } from "../models/interfaces";
import PokemonGrid from "./PokemonGrid";

type LayoutProps = {
  pokemonData: IBaseItem[];
};

const Layout = ({ pokemonData }: LayoutProps): JSX.Element => {
  return (
    <div>
      <title>Pokédex | Pokemon.com</title>
      <link
        rel="shortcut icon"
        href="https://assets.pokemon.com/static2/_ui/img/favicon.ico"
      ></link>
      <main className="bg-[url('https://assets.pokemon.com/static2/_ui/img/chrome/body_bg.png')] h-full justify-center">
        <div className="bg-[url('https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png')] bg-white mx-auto max-w-5xl">
          <PokemonGrid pokemonData={pokemonData} />
        </div>
      </main>
    </div>
  );
};

export default Layout;
