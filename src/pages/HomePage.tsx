import { useCallback, useEffect, useState } from "react";
import { CharactersSearchGrid, HasErrorState, IsLoadingState, MainLayout, PaginationNav, Search } from "../components";
import { Divider } from "../components/ui/divider/Divider";
import { useStarWarsContext } from "../hooks/useStarWarsContext/useStarWarsContext";
import { CharacterPages } from "../models";

export const HomePage = () => {

  const { characterPages, isLoading, hasError } = useStarWarsContext()!.characterPages;
  const [displayedCharacters, setDisplayedCharacters] = useState(characterPages);
  const [currentPage, setCurrentPage] = useState(0);

  const handleCharacterFilter = useCallback((charactersFiltered: CharacterPages[] = characterPages) => {
    setDisplayedCharacters(charactersFiltered);
  }, [characterPages]);

  useEffect(() => {
    handleCharacterFilter(characterPages);
  }, [characterPages, handleCharacterFilter])

  const handleIndex = (index: number, operation?: 'set') => {
    if (operation === 'set') {
      setCurrentPage(index);
      return;
    }

    if (index !== -1 && currentPage >= displayedCharacters.length - 1) return;
    if (index === -1 && currentPage <= 0) return;

    setCurrentPage(currentPage + index);
  }

  if (isLoading) return (
    <MainLayout>
      <IsLoadingState />
    </MainLayout>
  );

  if (hasError) return (
    <MainLayout>
      <HasErrorState />
    </MainLayout>
  )

  return (
    <MainLayout>
      <>
        <Search handleCharacterFilter={handleCharacterFilter} />
        <Divider />
        <CharactersSearchGrid data={displayedCharacters[currentPage]} />
        <PaginationNav currentPage={currentPage} characterPages={displayedCharacters} handleIndex={handleIndex} />
      </>
    </MainLayout>
  )
};