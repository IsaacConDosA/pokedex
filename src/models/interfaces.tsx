export interface IBaseItem {
  name: string;
  url: string;
}

interface IGameIndex {
  game_index: number;
  url: string;
}

interface IMove {
  move: IBaseItem;
  version_group_details: {
    level_learned_at: number;
    move_learn_method: IBaseItem;
    version_group: IBaseItem;
  }[];
}

interface ISprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
    home: {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    "official-artwork": {
      front_default: string | null;
    };
  };
}

interface IVersions {
  [key: string]: {
    [key: string]: {
      [key: string]: string | null;
    };
  };
}

interface IStats {
  base_stat: number;
  effort: number;
  stat: IBaseItem;
}

interface IType {
  slot: number;
  type: IBaseItem;
}

export interface IPokemonDetails {
  abilities: IBaseItem[];
  base_experience: number;
  forms: IBaseItem[];
  game_indices: IGameIndex[];
  height: number;
  held_items: IBaseItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: IMove;
  name: string;
  order: number;
  past_types: IBaseItem;
  species: IBaseItem;
  sprites: ISprites;
  versions: IVersions;
  stats: IStats[];
  types: IType[];
}
