import * as React from "react";
import { useEffect, useState } from "react";
import TypeLabel from "./TypeLabel";
import { getPokemonInformation } from "../utils/dataExtractors";
import {
  capitalizeFirstLetter,
  formatPokemonNumber,
  translatePokemonType,
} from "../utils/formatters";
import { getPokemonTypeLabelColors } from "../utils/colors";
import { IBaseItem, IPokemonDetails } from "../models/interfaces";

type PokemonCellProps = {
  pokemonInfo: IBaseItem;
};

const PokemonCell = ({ pokemonInfo }: PokemonCellProps): JSX.Element => {
  console.log("pokemoninfo", pokemonInfo);
  const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetails | null>(
    null
  );
  useEffect(() => {
    const getPokemonDetails = async () => {
      const response = await fetch(pokemonInfo.url);
      const jsonResponse = await response.json();
      setPokemonDetails(jsonResponse);
    };
    try {
      getPokemonDetails();
    } catch (e) {}
  }, []);

  const { image, name, number, types } = getPokemonInformation(pokemonDetails, [
    "image",
    "name",
    "number",
    "types",
  ]);

  return (
    <div className="flex-1 mb-12 mt-0 mx-1.5 w-52 hover:animate-pokecard">
      <div className="bg-[#f2f2f2] p-2.5 rounded-md">
        <img alt="A kitten" className="w-52" src={image} />
      </div>
      <div className="flex-col pl-5">
        <span className="font-medium font-sans text-[#919191] text-xs">{`N.º${formatPokemonNumber(
          number ?? ""
        )}`}</span>
        <h5 className="text-2xl">{capitalizeFirstLetter(name ?? "")}</h5>
        <div className="flex flex-row">
          {types?.map((type) => {
            const { otherColor, primaryColor, textColor } =
              getPokemonTypeLabelColors(type);
            const colorStyle = {
              backgroundColor: primaryColor,
              color: textColor,
              ...(otherColor
                ? {
                    background: `linear-gradient(180deg, ${primaryColor} 50%, ${otherColor} 50%)`,
                  }
                : {}),
            };
            return (
              <TypeLabel
                colorStyle={colorStyle}
                key={type}
                text={capitalizeFirstLetter(translatePokemonType(type))}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonCell;
