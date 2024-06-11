import styled from "@emotion/styled";
import { ArrowLink, PaginationLinks } from "../";
import { colors, gaps } from "../../styles";

const pages = [1, 2, "...", 9];

const StyledPaginationNav = styled("nav")`
  & a.active {
    outline-color: ${colors.main};
    border: 1px solid ${colors.main};
    background-color: ${colors.gray900};
  }
`;

const StyledList = styled("ul")`
  display: flex;
  justify-content: center;
  gap: ${gaps.xs};
  list-style-type: none;
`;

export const PaginationNav = () => {
  return (
    <StyledPaginationNav role="navigation" aria-label="Pagination navigation">
      <StyledList>
        <li>
          <ArrowLink direction="left" path="/characters" key="left" />
        </li>
        {
          pages.map((page, index) => (
            <li key={index}>
              <PaginationLinks
                path={page === 1 ? "/" : `/${page}`}
                page={page}
              />
            </li>
          ))
        }
        <li>
          <ArrowLink direction="right" path="/characters" key="right" />
        </li>
      </StyledList>
    </StyledPaginationNav>
  )
}