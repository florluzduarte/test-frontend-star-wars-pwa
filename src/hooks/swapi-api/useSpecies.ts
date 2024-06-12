import { useEffect, useState } from "react"
import { Species, ErrorState } from "../../models";
import { getAllSpecies } from "../../services";

export type SpeciesState = Species[] | [];

export const useSpecies = () => {
  const [species, setSpecies] = useState<SpeciesState>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState<ErrorState>(null);

  useEffect(() => {
    const loadSpecies = async () => {
      try {
        setIsLoading(true);
        const data = await getAllSpecies();
        setSpecies(data);
      } catch (err: unknown) {
        setHasError(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadSpecies();
  }, []);

  return { species, isLoading, hasError };
}