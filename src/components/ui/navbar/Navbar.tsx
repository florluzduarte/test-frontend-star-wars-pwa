import styled from "@emotion/styled";
import { StarWarsLogo } from "../icons/StarWarsLogo";
import { Link } from "react-router-dom";

const StyledNavbar = styled("nav")`
  display: flex;
  justify-content: center;
  margin: 2.4rem 0rem;
  cursor: pointer;
`;

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/" aria-label="Go to home page">
        <StarWarsLogo width="111" height="50" />
      </Link>
    </StyledNavbar>
  )
};