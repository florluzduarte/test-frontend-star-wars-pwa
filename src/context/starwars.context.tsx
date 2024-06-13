import { createContext } from "react";
import { useCharacterPages, useCharacters, useSpecies, useStarships, useVehicles } from "../hooks";
import { ContextValue } from "../models";

interface ProviderProps {
  children: JSX.Element;
}

type ContextInitialValue = ContextValue | null;

export const StarWarsContext = createContext<ContextInitialValue>(null);

export const StarWarsProvider = ({ children }: ProviderProps) => {
  const characterPages = useCharacterPages();
  const characters = useCharacters();
  const species = useSpecies();
  const starships = useStarships();
  const vehicles = useVehicles();

  return (
    <StarWarsContext.Provider value={{ characterPages, characters, species, starships, vehicles }}>
      <>
        {children}
      </>
    </StarWarsContext.Provider>
  )
};