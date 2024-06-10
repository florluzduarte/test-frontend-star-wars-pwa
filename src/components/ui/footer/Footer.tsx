import Styled from "@emotion/styled";
import { fontSizes, colors, fontWeights } from "../../../styles";

const StyledFooter = Styled("footer")`
  max-width: 26rem;
  text-align: center;
  font-size: ${fontSizes.small};
`;

const StyledAnchor = Styled("a")`
  text-decoration: none;
  font-weight: ${fontWeights.bold};
  color: ${colors.white};

  &:hover {
    color: ${colors.main};
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <span>Made with React, Vite and love by <StyledAnchor href="https://github.com/florluzduarte" target="_blank">FlorLuzDuarte</StyledAnchor></span>
    </StyledFooter>
  )
};