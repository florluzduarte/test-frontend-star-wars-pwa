
import styled from "@emotion/styled";
import { LeftArrowIcon } from "../icons/LeftArrowIcon";
import { colors, devices } from "../../../styles";
import { RightArrowIcon } from "../icons/RightArrowIcon";
import { ScreenReadersOnly } from "../screen-readers-only/ScreenReadersOnly";

interface ArrowLinkProps {
  direction: "left" | "right";
  handleIndex: (index: number, operation?: 'set') => void;
}

const StyledArrowButton = styled("button")`
  
  padding: 0.8rem;
  display: inline-block;
  border: none;
  background-color: ${colors.black};
  color: ${colors.white};
  max-width: fit-content;
  display: none;

  &:hover, &:focus {
    background-color: ${colors.gray900};
  }

  @media ${devices.tablet} {
    display: inline-block;
  }
`;

export const ArrowButton = ({ direction, handleIndex }: ArrowLinkProps) => {
  return (
    <>
      {
        direction === "left" && (
          <StyledArrowButton onClick={() => handleIndex(-1)}>
            <LeftArrowIcon />
            <ScreenReadersOnly altText="Previous Page" />
          </StyledArrowButton>
        )
      }

      {
        direction === "right" && (
          <StyledArrowButton onClick={() => handleIndex(1)}>
            <RightArrowIcon />
            <ScreenReadersOnly altText="Next Page" />
          </StyledArrowButton>
        )
      }
    </>
  )
}