import { StyledParagraph, StyledWrapper } from "../../styles"
import { DeathStar } from "../ui/icons/DeathStar"
import { GoBackLink } from "../ui/links/GoBackLink"

export const HasErrorState = () => {
  return (
    <StyledWrapper>
      <DeathStar />
      <StyledParagraph>Looks like something went wrong... Awfully wrong</StyledParagraph>
      <GoBackLink path="/">Go Back Home</GoBackLink>
    </StyledWrapper>
  )
}