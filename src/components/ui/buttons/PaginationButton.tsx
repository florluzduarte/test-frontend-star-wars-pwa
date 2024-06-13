import styled from "@emotion/styled";
import { colors, devices, fontSizes, fontWeights } from "../../../styles";
import { ScreenReadersOnly } from "../screen-readers-only/ScreenReadersOnly";

interface PaginationLinksProps {
  index: number;
  handleIndex: (index: number, operation?: 'set') => void;
}

const StyledPaginationButton = styled("button")`
  padding: 1rem;
  max-width: fit-content;
  color: ${colors.white};
  font-size: ${fontSizes.small};
  font-weight: ${fontWeights.bold};
  border: none;
  background-color: ${colors.black};

  &:hover, &:focus {
    background-color: ${colors.gray900};
    color: ${colors.main};
  }

  @media ${devices.tablet} {
    font-size: ${fontSizes.normal};
  }
`;

export const PaginationButton = ({ index, handleIndex }: PaginationLinksProps) => {
  return (
    <StyledPaginationButton onClick={() => handleIndex(index, "set")}>
      <ScreenReadersOnly altText={"Go to page"} />
      {index + 1}
    </StyledPaginationButton>
  )
};