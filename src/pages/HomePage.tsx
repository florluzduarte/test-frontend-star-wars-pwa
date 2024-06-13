import { useState } from "react";
import { CharactersSearchGrid, MainLayout, PaginationNav, Search } from "../components";
import { Divider } from "../components/ui/divider/Divider";
import { useStarWarsContext } from "../hooks/useStarWarsContext/useStarWarsContext";

export const HomePage = () => {

  const { characterPages, isLoading, hasError } = useStarWarsContext()!.characterPages;
  const [currentPage, setCurrentPage] = useState(0);

  const handleIndex = (index: number, operation?: 'set') => {
    if (operation === 'set') {
      setCurrentPage(index);
      return;
    }

    if (index !== -1 && currentPage >= characterPages.length - 1) return;
    if (index === -1 && currentPage <= 0) return;

    setCurrentPage(currentPage + index);
  }

  if (isLoading) return (
    <MainLayout>
      <p>Loading...</p>
    </MainLayout>
  );

  if (hasError) return (
    <MainLayout>
      <p>An error happened</p>
    </MainLayout>
  )

  return (
    <MainLayout>
      <>
        <Search />
        <Divider />
        <CharactersSearchGrid data={characterPages[currentPage]} />
        <PaginationNav currentPage={currentPage} characterPages={characterPages} handleIndex={handleIndex} />
      </>
    </MainLayout>
  )
};