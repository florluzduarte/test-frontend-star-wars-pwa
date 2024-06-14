import styled from "@emotion/styled"
import { StyledParagraph, StyledWrapper, colors, fontSizes, fontWeights } from "../../styles"
import { MillenniumFalcon } from "../ui/icons/MillenniumFalcon"

const StyledCallToAction = styled("p")`
  color: ${colors.main};
  font-size: ${fontSizes.big};
  font-weight: ${fontWeights.bold};
`;

export const NoResultsFound = () => {
  return (
    <StyledWrapper>
      <MillenniumFalcon />
      <StyledParagraph>Seems like your hero is missing in a distant galaxy...</StyledParagraph>
      <StyledCallToAction>Search another one</StyledCallToAction>
    </StyledWrapper>
  )
}