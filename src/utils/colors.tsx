interface ITypeLabelColor {
  primaryColor: string;
  otherColor: string | null;
  textColor: string;
}

interface ITypeColorMap {
  [type: string]: ITypeLabelColor;
}

export const getPokemonTypeLabelColors = (type: string): ITypeLabelColor => {
  const typeColorMap: ITypeColorMap = {
    bug: { primaryColor: "#729f3f", otherColor: null, textColor: "#fff" },
    dark: { primaryColor: "#707070", otherColor: null, textColor: "#fff" },
    dragon: {
      primaryColor: "#53a4cf",
      otherColor: "#f16e57",
      textColor: "#fff",
    },
    electric: {
      primaryColor: "#eed535",
      otherColor: null,
      textColor: "#212121",
    },
    fairy: { primaryColor: "#fdb9e9", otherColor: null, textColor: "#212121" },
    fighting: { primaryColor: "#d56723", otherColor: null, textColor: "#fff" },
    fire: { primaryColor: "#fd7d24", otherColor: null, textColor: "#fff" },
    flying: {
      primaryColor: "#3dc7ef",
      otherColor: "#bdb9b8",
      textColor: "#212121",
    },
    ghost: { primaryColor: "#7b62a3", otherColor: null, textColor: "#fff" },
    grass: { primaryColor: "#9bcc50", otherColor: null, textColor: "#212121" },
    ground: {
      primaryColor: "#f7de3f",
      otherColor: "#ab9842",
      textColor: "#212121",
    },
    ice: { primaryColor: "#51c4e7", otherColor: null, textColor: "#212121" },
    normal: { primaryColor: "#a4acaf", otherColor: null, textColor: "#212121" },
    psychic: { primaryColor: "#f366b9", otherColor: null, textColor: "#fff" },
    poison: { primaryColor: "#b97fc9", otherColor: null, textColor: "#fff" },
    rock: { primaryColor: "#a38c21", otherColor: null, textColor: "#fff" },
    steel: { primaryColor: "#9eb7b8", otherColor: null, textColor: "#212121" },
    water: { primaryColor: "#4592c4", otherColor: null, textColor: "#fff" },
  };
  return (
    typeColorMap[type as keyof typeof typeColorMap] || {
      primaryColor: "#fff",
      otherColor: null,
      textColor: "#212121",
    }
  );
};

export default { getPokemonTypeLabelColors };
