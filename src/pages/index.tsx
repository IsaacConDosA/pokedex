import * as React from "react";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { IBaseItem } from "../models/interfaces";

const POKEDEX_API_LINK: string =
  "https://pokeapi.co/api/v2/pokemon?limit=12&offset=0";

const IndexPage = () => {
  const [pokemonData, setPokemonData] = useState<IBaseItem[] | null>(null);
  const [nextEndpoint, setNextEndpoint] = useState<string>(POKEDEX_API_LINK);
  const [requestError, setRequestError] = useState<boolean>(false);
  useEffect(() => {
    const getPokemonData = async () => {
      const response = await fetch(nextEndpoint, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const jsonResponse = await response.json();
      setPokemonData(jsonResponse.results);
      setNextEndpoint(jsonResponse.next);
    };

    try {
      getPokemonData();
    } catch (error) {
      console.log(error);
      setRequestError(true);
    }
  }, []);

  if (pokemonData) {
    return <Layout pokemonData={pokemonData} />;
  } else return <h1>Ha ocurrido un error :(</h1>;
};

export default IndexPage;
