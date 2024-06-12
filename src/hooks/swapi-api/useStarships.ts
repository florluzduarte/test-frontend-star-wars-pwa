import { useEffect, useState } from "react"
import { Starships, ErrorState } from "../../models";
import { getAllStarships } from "../../services";

export type StarshipsState = Starships[] | [];

export const useStarships = () => {
  const [starships, setStarships] = useState<StarshipsState>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState<ErrorState>(null);

  useEffect(() => {
    const loadStarships = async () => {
      try {
        setIsLoading(true);
        const data = await getAllStarships();
        setStarships(data);
      } catch (err: unknown) {
        setHasError(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadStarships();
  }, []);

  return { starships, isLoading, hasError };
}