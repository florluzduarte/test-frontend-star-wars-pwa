import styled from "@emotion/styled";
import { Heading1, MainLayout, MillenniumFalcon } from "../components";
import { gaps } from "../styles";
import { GoBackLink } from "../components/ui/links/GoBackLink";

const Styled404Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: ${gaps.md};
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const NotFoundPage = () => {
  return (
    <MainLayout>
      <Styled404Wrapper>
        <MillenniumFalcon />
        <Heading1>404 - Not Found</Heading1>
        <GoBackLink path="/">Go back home</GoBackLink>
      </Styled404Wrapper>
    </MainLayout>
  )
};