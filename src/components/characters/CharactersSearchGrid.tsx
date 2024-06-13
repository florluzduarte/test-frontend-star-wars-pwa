import styled from "@emotion/styled";
// import tempData from "../../assets/tempData.json";
import { CharacterSearchCard } from "./CharacterSearchCard";
import { devices, gaps } from "../../styles";
import { CharacterPages } from "../../models";

interface CharacterSearchGrid {
  data: CharacterPages;
}

const StyledGrid = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${gaps.md};
  margin: ${gaps.md} 0rem;

  @media ${devices.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${gaps.lg};
    max-width: 64rem;
    margin: ${gaps.lg} auto;
  }

  @media ${devices.laptop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    max-width: 90rem;
  }

  @media ${devices.notebook} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    max-width: 110rem;
    gap: ${gaps.xl};
  }

  @media ${devices.desktop} {
    margin: 8rem auto;
  }
`;

export const CharactersSearchGrid = ({ data }: CharacterSearchGrid) => {
  return (
    <StyledGrid>
      {
        data && data.results?.length ? data.results?.map((character) => (
          <CharacterSearchCard key={character.name} imgSrc={""} name={character.name} />
        )) : (<>No Characters Found...</>)

      }
    </StyledGrid>
  )
};