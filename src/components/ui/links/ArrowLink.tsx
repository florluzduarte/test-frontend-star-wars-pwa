import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { LeftArrowIcon } from "../icons/LeftArrowIcon";
import { colors } from "../../../styles";
import { RightArrowIcon } from "../icons/RightArrowIcon";
import { ScreenReadersOnly } from "../screen-readers-only/ScreenReadersOnly";

interface ArrowLinkProps {
  direction: "left" | "right";
  path: string;
}

const StyledArrowLink = styled(Link)`
  padding: 1.2rem;
  display: block;
  max-width: fit-content;

  &:hover, &:focus {
    background-color: ${colors.gray900};
  }
`;

export const ArrowLink = ({ direction, path }: ArrowLinkProps) => {
  return (
    <>
      {
        direction === "left" && (
          <StyledArrowLink to={path}>
            <LeftArrowIcon />
            <ScreenReadersOnly altText="Previous Page" />
          </StyledArrowLink>
        )
      }

      {
        direction === "right" && (
          <StyledArrowLink to={path}>
            <RightArrowIcon />
            <ScreenReadersOnly altText="Next Page" />
          </StyledArrowLink>
        )
      }
    </>
  )
}