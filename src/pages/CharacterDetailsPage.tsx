import { CharacterDetailsCard, MainLayout } from "../components"
import { useParams } from "react-router-dom";
import { useStarWarsContext } from "../hooks/useStarWarsContext/useStarWarsContext";
import { NotFoundPage } from "./NotFoundPage";
import { useEffect, useState } from "react";
import { Characters } from "../models";

export const CharacterDetailsPage = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Characters>();
  const { characters, isLoading, hasError } = useStarWarsContext()!.characters;
  const params = useParams();

  useEffect(() => {
    console.log("CAMBIO EN CHARACTERS");
    setSelectedCharacter(characters[Number(params.id) - 1]);
  }, [characters, params.id])

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
    selectedCharacter ?
      (< MainLayout >
        <>
          <CharacterDetailsCard data={selectedCharacter} />
        </>
      </MainLayout >) :
      (<NotFoundPage />)
  )
};