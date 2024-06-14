import styled from "@emotion/styled";
import { fontSizes, gaps } from "../../../styles";

interface UnorderedListProps {
  items: string[];
}

export const StyledUnorderedList = styled("ul")`
  list-style-type: none;
  font-size: ${fontSizes.small};
  display: flex;
  flex-direction: column;
  gap: ${gaps.xs};
  margin: ${gaps.sm} 0rem;
  max-width: fit-content;

  & li, & p {
    margin-left: ${gaps.xs};
  }
`;

export const UnorderedList = ({ items }: UnorderedListProps) => {

  return (
    <StyledUnorderedList>
      {
        items.length > 0 && items.map((item) => (
          <li key={item}>{item}</li>
        ))
      }
      {
        items.length === 0 && <p>Not Available</p>
      }
    </StyledUnorderedList>
  )
};