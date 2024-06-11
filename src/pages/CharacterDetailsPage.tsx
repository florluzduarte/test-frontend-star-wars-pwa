import { CharacterDetailsCard, MainLayout } from "../components"
import tempData from "../assets/tempData.json";

const data = tempData.results[1];

export const CharacterDetailsPage = () => {
  return (
    <MainLayout>
      <>
        <CharacterDetailsCard data={data} />
      </>
    </MainLayout>
  )
};