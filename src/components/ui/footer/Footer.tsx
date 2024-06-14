import Styled from "@emotion/styled";
import { fontSizes, colors, fontWeights, gaps } from "../../../styles";

const StyledFooter = Styled("footer")`
  max-width: 26rem;
  text-align: center;
  font-size: ${fontSizes.small};
  margin: ${gaps.md} auto;
`;

const StyledAnchor = Styled("a")`
  text-decoration: none;
  font-weight: ${fontWeights.bold};
  color: ${colors.white};

  &:hover, &:focus, &:active {
    color: ${colors.main};
  };
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <p id="footer-desc">Made with React, Vite and love by&nbsp;
        <StyledAnchor
          href="https://github.com/florluzduarte"
          target="_blank"
          aria-labelledby="footer-desc"
        >
          FlorLuzDuarte
        </StyledAnchor>
      </p>
    </StyledFooter>
  )
};