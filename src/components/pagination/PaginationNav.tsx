import styled from "@emotion/styled";
import { ArrowButton, PaginationButton } from "../";
import { colors, gaps } from "../../styles";
import { CharacterPagesState } from "../../hooks/swapi-api/useCharacterPages";

interface PaginationNavProps {
  currentPage: number;
  characterPages: CharacterPagesState;
  handleIndex: (index: number, operation?: 'set') => void;
}

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
  align-items: center;
  list-style-type: none;
  gap: ${gaps.xs};

  & li.active {
    border: 1px solid ${colors.main};
  }
`;

export const PaginationNav = ({ characterPages, handleIndex, currentPage }: PaginationNavProps) => {

  const hasCharacters = characterPages.length > 0;

  if (!hasCharacters) {
    return (<></>);
  }

  return (
    <StyledPaginationNav role="navigation" aria-label="Pagination navigation">
      <StyledList>
        <li>
          <ArrowButton direction="left" key="left" handleIndex={handleIndex} />
        </li>
        {
          characterPages.map((page, index) => (
            <li key={index} className={index === currentPage ? "active" : ""}>
              <PaginationButton
                handleIndex={handleIndex}
                index={index}
              />
            </li>
          ))
        }
        <li>
          <ArrowButton direction="right" key="right" handleIndex={handleIndex} />
        </li>
      </StyledList>
    </StyledPaginationNav>
  )
}