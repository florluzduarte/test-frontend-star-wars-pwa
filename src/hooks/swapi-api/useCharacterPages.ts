import { useEffect, useState } from "react"
import { CharacterPages, ErrorState } from "../../models";
import { getAllCharactersPages } from "../../services";

export type CharacterPagesState = CharacterPages[] | [];

export const useCharacterPages = () => {
  const [characterPages, setCharacterPages] = useState<CharacterPagesState>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState<ErrorState>(null);

  useEffect(() => {
    const loadPages = async () => {
      try {
        setIsLoading(true);
        const data = await getAllCharactersPages();
        setCharacterPages(data);
      } catch (err: unknown) {
        setHasError(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadPages();
  }, []);

  return { characterPages, isLoading, hasError };
}