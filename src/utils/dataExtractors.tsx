import { IPokemonDetails } from "../models/interfaces";

export const getPokemonImage = (
  pokemonDetails: IPokemonDetails | null
): string => {
  return (
    pokemonDetails?.sprites?.other["official-artwork"]["front_default"] || ""
  );
};

export const getPokemonName = (
  pokemonDetails: IPokemonDetails | null
): string => {
  return pokemonDetails?.name || "";
};

export const getPokemonNumber = (
  pokemonDetails: IPokemonDetails | null
): string | number => {
  return pokemonDetails?.id || "";
};

export const getPokemonTypes = (
  pokemonDetails: IPokemonDetails | null
): string[] => {
  return (
    pokemonDetails?.types
      ?.slice()
      .sort((a, b) => a.slot - b.slot)
      .map((type) => type.type.name) || []
  );
};

const getAttributesMap = {
  image: getPokemonImage,
  name: getPokemonName,
  number: getPokemonNumber,
  types: getPokemonTypes,
};

export const getPokemonInformation = (
  pokemonDetails: IPokemonDetails | null,
  attributes: string[]
): {
  image?: string;
  name?: string;
  number?: string | number;
  types?: string[];
} => {
  return attributes.reduce(
    (pokemonData, attr: string) => ({
      ...pokemonData,
      [attr]:
        getAttributesMap[attr as keyof typeof getAttributesMap](pokemonDetails),
    }),
    {}
  );
};

export default { getPokemonImage, getPokemonInformation };
