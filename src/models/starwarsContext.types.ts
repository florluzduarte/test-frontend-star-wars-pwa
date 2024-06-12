import { CharacterPagesState } from "../hooks/swapi-api/useCharacterPages";
import { CharactersState } from "../hooks/swapi-api/useCharacters";
import { SpeciesState } from "../hooks/swapi-api/useSpecies";
import { StarshipsState } from "../hooks/swapi-api/useStarships";
import { VehiclesState } from "../hooks/swapi-api/useVehicles";
import { ErrorState } from "./swapiResponses.types";

export interface ContextValue {
  characterPages: {
    characterPages: CharacterPagesState;
    isLoading: boolean;
    hasError: ErrorState;
  },
  characters: {
    characters: CharactersState,
    isLoading: boolean;
    hasError: ErrorState;
  },
  species: {
    species: SpeciesState;
    isLoading: boolean;
    hasError: ErrorState;
  },
  starships: {
    starships: StarshipsState;
    isLoading: boolean;
    hasError: ErrorState;
  },
  vehicles: {
    vehicles: VehiclesState;
    isLoading: boolean;
    hasError: ErrorState;
  }
}