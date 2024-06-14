import { useState, useEffect } from 'react';
import { CharacterPages, Characters, ErrorState } from '../../models';

export type CharactersState = Characters[] | [];

export const useCharacters = (characterPages: CharacterPages[]) => {
  const [characters, setCharacters] = useState<CharactersState>([]);
  const [isLoading] = useState(false);
  const [hasError] = useState<ErrorState>(false);

  useEffect(() => {
    if (characterPages.length > 0) {
      const allCharacters = characterPages.flatMap(page => page.results);
      setCharacters(allCharacters);
    }
  }, [characterPages]);

  return { characters, isLoading, hasError };
};