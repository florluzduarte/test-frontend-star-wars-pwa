import { useState, useEffect } from 'react';
import { Characters, ErrorState } from '../../models';
import { getAllCharacters } from '../../services';

export type CharactersState = Characters[] | [];

export const useCharacters = () => {
  const [characters, setCharacters] = useState<CharactersState>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState<ErrorState>(null);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        setIsLoading(true);
        const data = await getAllCharacters();
        setCharacters(data);
      } catch (err: unknown) {
        setHasError(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadCharacters();
  }, []);

  return { characters, isLoading, hasError };
};