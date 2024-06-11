import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { colors, fontSizes, fontWeights } from "../../../styles";
import { ScreenReadersOnly } from "../screen-readers-only/ScreenReadersOnly";

interface PaginationLinksProps {
  page: number | string;
  path: string;
}

const StyledPaginationLink = styled(NavLink)`
  padding: 1.2rem;
  display: block;
  max-width: fit-content;
  text-decoration: none;
  color: ${colors.white};
  font-size: ${fontSizes.normal};
  font-weight: ${fontWeights.bold};

  &:hover, &:focus {
    background-color: ${colors.gray900};
    color: ${colors.main};
  }
`;

export const PaginationLinks = ({ page, path }: PaginationLinksProps) => {
  return (
    <StyledPaginationLink
      to={path}
      end
    >
      {
        ({ isActive }) => (
          <>
            <ScreenReadersOnly altText={isActive ? "Active page" : page === "..." ? "More pages available" : "Go to page"} />
            {page}
          </>
        )
      }
    </StyledPaginationLink>
  )
};