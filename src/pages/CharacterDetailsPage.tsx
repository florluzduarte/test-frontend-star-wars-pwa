import { CharacterDetailsCard, HasErrorState, IsLoadingState, MainLayout } from "../components"
import { useParams } from "react-router-dom";
import { useStarWarsContext } from "../hooks/useStarWarsContext/useStarWarsContext";
import { NotFoundPage } from "./NotFoundPage";
import { useCallback, useEffect, useState } from "react";
import { Characters } from "../models";
import { getItemID } from "../utils";

export const CharacterDetailsPage = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Characters>();
  const { characters, isLoading, hasError } = useStarWarsContext()!.characters;
  const params = useParams();

  const getSelectedCharacterFromContext = useCallback(
    () => {
      const selectedByPosition = characters[Number(params?.id) - 1];
      const selectedByPositionID = getItemID(selectedByPosition?.url);
      if (selectedByPositionID == params?.id) return selectedByPosition;
      return characters.find(character => getItemID(character?.url) == params?.id);
    }, [characters, params.id])

  useEffect(() => {
    const selectedCharacter = getSelectedCharacterFromContext();
    setSelectedCharacter(selectedCharacter);
  }, [getSelectedCharacterFromContext])

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
    selectedCharacter ?
      (< MainLayout >
        <>
          <CharacterDetailsCard data={selectedCharacter} />
        </>
      </MainLayout >) :
      (<NotFoundPage />)
  )
};