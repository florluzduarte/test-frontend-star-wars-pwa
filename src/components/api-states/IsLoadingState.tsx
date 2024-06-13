import { StyledParagraph, StyledWrapper } from "../../styles"
import { R2D2 } from "../ui/icons/R2D2"

export const IsLoadingState = () => {
  return (
    <StyledWrapper>
      <R2D2 />
      <StyledParagraph>A long time ago in a galaxy far, far away…</StyledParagraph>
    </StyledWrapper>
  )
}