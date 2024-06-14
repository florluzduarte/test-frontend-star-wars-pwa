import styled from "@emotion/styled";
import { Navbar, Footer } from "../";
import { Divider } from "../ui/divider/Divider";
import { devices } from "../../styles";
import PWABadge from "../ui/pwa-badge/PWABadge";

interface MainLayoutProps {
  children: JSX.Element;
}

const StyledLayout = styled("div")`
  padding: 2.4rem;

  @media ${devices.notebook} {
    padding: 0rem;
    max-width: 120rem;
    margin: 0rem auto;
  }
`;

const StyledMain = styled("main")`
  min-height: 100vh;
`;

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <StyledLayout>
      <Navbar />
      <Divider />
      <StyledMain>
        {children}
      </StyledMain>
      <PWABadge />
      <Divider />
      <Footer />
    </StyledLayout>
  );
}