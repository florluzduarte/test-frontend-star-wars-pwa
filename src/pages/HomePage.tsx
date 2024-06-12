import { useState } from "react";
import { CharactersSearchGrid, MainLayout, PaginationNav, Search } from "../components";
import { Divider } from "../components/ui/divider/Divider";
import { useStarWarsContext } from "../hooks/useStarWarsContext/useStarWarsContext";

export const HomePage = () => {

  const { characterPages, isLoading, hasError } = useStarWarsContext()!.characterPages;
  const [currentPage, setCurrentPage] = useState(0);

  const getMoreHeroes = () => {
    if (currentPage >= characterPages.length - 1) return;
    setCurrentPage(currentPage + 1);
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
        <button onClick={getMoreHeroes}>Cargar más</button>
        <PaginationNav />
      </>
    </MainLayout>
  )
};