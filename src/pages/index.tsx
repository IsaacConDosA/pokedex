import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { IBaseItem } from "../models/interfaces";

const POKEDEX_API_LINK: string =
  "https://pokeapi.co/api/v2/pokemon?limit=12&offset=0";

const IndexPage = () => {
  const [pokemonData, setPokemonData] = useState<IBaseItem[]>([]);
  const [nextEndpoint, setNextEndpoint] = useState<string>(POKEDEX_API_LINK);
  const [, setLoading] = useState<boolean>(true); // TODO: usar este estado para mostrar un estado de carga
  const [, setRequestError] = useState<boolean>(false); // TODO: usar este estado para mostrar un estado de error

  const getPokemonData = useCallback(async () => {
    setLoading(true);
    const response = await fetch(nextEndpoint, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsonResponse = await response.json();
    setPokemonData((oldPokemonData) => [
      ...oldPokemonData,
      ...jsonResponse.results,
    ]);
    setNextEndpoint(jsonResponse.next);
    setLoading(false);
  }, [nextEndpoint, setPokemonData]);

  const fetchPokemonData = () => {
    try {
      getPokemonData();
    } catch (error) {
      console.log(error);
      setRequestError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  if (pokemonData) {
    return (
      <Layout fetchPokemonData={fetchPokemonData} pokemonData={pokemonData} />
    );
  } else return <h1>Ha ocurrido un error :(</h1>;
};

export default IndexPage;
