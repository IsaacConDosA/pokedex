interface ITranslationMap {
  [type: string]: string;
}

export const capitalizeFirstLetter = (name: string): string =>
  name.charAt(0).toUpperCase() + name.slice(1);

export const formatPokemonNumber = (number: number | string): string =>
  number.toString().padStart(3, "0");

export const translatePokemonType = (type: string): string => {
  const translationMap: ITranslationMap = {
    bug: "bicho",
    dark: "siniestro",
    dragon: "dragón",
    electric: "eléctrico",
    fairy: "hada",
    fighting: "luchador",
    fire: "fuego",
    flying: "volador",
    ghost: "fantasma",
    grass: "planta",
    ground: "tierra",
    ice: "hielo",
    normal: "normal",
    psychic: "psíquico",
    poison: "veneno",
    rock: "roca",
    steel: "acero",
    water: "agua",
  };
  return translationMap[type as keyof typeof translationMap] || type;
};

export default {
  capitalizeFirstLetter,
  formatPokemonNumber,
  translatePokemonType,
};
