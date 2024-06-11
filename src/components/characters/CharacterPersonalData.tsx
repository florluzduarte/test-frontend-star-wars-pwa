import styled from "@emotion/styled";
import { CharacterDetails } from "../../models/characterDetails";
import { Heading2 } from "../ui/headings/Heading2"
import { StyledUnorderedList } from "../ui/lists/UnorderedList"
import { fontWeights } from "../../styles";

interface CharacterPersonalDataProps {
  data: CharacterDetails;
}

const StyledCharacteristicsList = StyledUnorderedList;

const StyledItem = styled("span")`
  font-weight: ${fontWeights.bold};
`;

export const CharacterPersonalData = ({ data }: CharacterPersonalDataProps) => {

  const { height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld } = data;

  return (
    <>
      <Heading2>Personal Data</Heading2>
      <StyledCharacteristicsList>
        <li>Height: <StyledItem>{height}</StyledItem></li>
        <li>Mass: <StyledItem>{mass}</StyledItem></li>
        <li>HairColor: <StyledItem>{hair_color}</StyledItem></li>
        <li>Skin Color: <StyledItem>{skin_color}</StyledItem></li>
        <li>Eye Color: <StyledItem>{eye_color}</StyledItem></li>
        <li>Birth Year: <StyledItem>{birth_year}</StyledItem></li>
        <li>Gender: <StyledItem>{gender}</StyledItem></li>
        <li>Homeworld: <StyledItem>{homeworld}</StyledItem></li>
      </StyledCharacteristicsList>
    </>
  )
};