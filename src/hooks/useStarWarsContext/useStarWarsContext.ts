import { useContext } from "react";
import { StarWarsContext } from "../../context/starwars.context";

export const useStarWarsContext = () => {
  const context = useContext(StarWarsContext);
  if (context === undefined) {
    throw new Error("useStarWarsContext must be used within a StarWarsProvider");
  }
  return context;
};