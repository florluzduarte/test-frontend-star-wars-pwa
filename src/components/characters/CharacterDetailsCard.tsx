import styled from "@emotion/styled";
import { colors, devices, gaps } from "../../styles";
import { CharacterDetails } from "../../models/characterDetails";
import { Heading1, CharacterPersonalData, CharacterInfo } from "../";
import { GoBackLink } from "../ui/links/GoBackLink";

interface CharacterDetailsCardProps {
  data: CharacterDetails;
}

const StyledCard = styled("div")`
  @media ${devices.laptop} {
    max-width: 90rem;
    margin: ${gaps.lg} auto;
  }

  @media ${devices.notebook} {
    max-width: 110rem;
    margin: ${gaps.xl} auto;
  }
`;

const StyledCardTitle = styled("div")`
  background-color: ${colors.main};
  padding: ${gaps.xs} ${gaps.sm};
`;

const StyledCardWrapper = styled("section")`
  background-color: ${colors.gray900};
  border: 1px solid ${colors.main};
  padding: ${gaps.xs};
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: ${gaps.md};

  @media ${devices.tablet} {
    grid-template-columns: 1fr 1fr;
    gap: ${gaps.md};
  }
`;

const StyledDetailsWrapper = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  margin: ${gaps.md} 0rem ${gaps.xs} 0rem;

  @media ${devices.tablet} {
    margin: 0rem;
  }

  @media ${devices.notebook} {
    grid-template-columns: 1fr 1fr;
    gap: ${gaps.xl};
    margin: ${gaps.md} ${gaps.md} 0rem 0rem;
  }
`;

const StyledCharacterImg = styled("img")`
  border: 1px solid ${colors.white};
`;

export const CharacterDetailsCard = ({ data }: CharacterDetailsCardProps) => {

  return (
    <StyledCard>
      <StyledCardTitle>
        <Heading1 color={colors.black}>{data.name}</Heading1>
      </StyledCardTitle>

      <StyledCardWrapper>

        <StyledCharacterImg src={data.photo} alt={`${data.name} profile picture`} />

        <StyledDetailsWrapper>
          <div>
            <CharacterPersonalData data={data} />
            <CharacterInfo items={data.films} title="Films" />
          </div>
          <div>
            <CharacterInfo items={data.species} title="Species" />
            <CharacterInfo items={data.vehicles} title="Vehicles" />
            <CharacterInfo items={data.starships} title="Starships" />
          </div>
        </StyledDetailsWrapper>

      </StyledCardWrapper>

      <GoBackLink path="/">Go back to search</GoBackLink>
    </StyledCard>
  )
};