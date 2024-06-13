import { Heading1, MainLayout, MillenniumFalcon } from "../components";
import { GoBackLink } from "../components/ui/links/GoBackLink";
import { StyledWrapper } from "../styles";

export const NotFoundPage = () => {
  return (
    <MainLayout>
      <StyledWrapper>
        <MillenniumFalcon />
        <Heading1>404 - Not Found</Heading1>
        <GoBackLink path="/">Go back home</GoBackLink>
      </StyledWrapper>
    </MainLayout>
  )
};