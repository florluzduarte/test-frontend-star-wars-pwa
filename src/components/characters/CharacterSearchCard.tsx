import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors, fontSizes, fontWeights, gaps } from "../../styles";
import { getCharacterID } from "../../utils";

interface CharacterSearchCardProps {
  name: string;
  imgSrc: string;
  selfUrl: string;
}


const StyledCardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: ${colors.white};
  border: 0.5px solid ${colors.gray100};
  outline: none;
  padding: ${gaps.xs};
  max-width: fit-content;

  &:hover, &:focus, &:active {
    outline: none;
    border-color: ${colors.main};
    color: ${colors.main};
    font-weight: ${fontWeights.bold};
  }

  &:hover img, &:focus img, &:active img {
    filter: none;
    -webkit-filter: none;
  }
`;

const StyledImg = styled("img")`
  border: 0.5px solid ${colors.gray100};
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
`;

const StyledName = styled("p")`
  font-size: ${fontSizes.small};
  margin: ${gaps.sm} 0rem ${gaps.xs} 0rem;
`;

export const CharacterSearchCard = ({ name, imgSrc, selfUrl }: CharacterSearchCardProps) => {

  const characterID = getCharacterID(selfUrl);

  return (
    <StyledCardLink to={`characters/${characterID}`}>
      <StyledImg src={imgSrc} alt={`${name} profile picture`} />
      <StyledName>{name}</StyledName>
    </StyledCardLink>
  )
};