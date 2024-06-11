import styled from "@emotion/styled";

interface SROnlyProps {
  altText: string;
}

const StyledSROnly = styled("span")`
  position: absolute;
  width: 1px;
  height: 1px; 
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

export const ScreenReadersOnly = ({ altText }: SROnlyProps) => {
  return (
    <StyledSROnly>{altText}</StyledSROnly>
  )
};