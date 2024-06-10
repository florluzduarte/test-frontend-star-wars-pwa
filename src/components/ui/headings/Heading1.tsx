import styled from "@emotion/styled";
import { colors, fontSizes, fontWeights } from "../../../styles";

interface Heading1Props {
  children: string;
  color?: string;
}

const StyledHeading1 = styled("h1")`
  font-size: ${fontSizes.big};
  font-weight: ${fontWeights.bold};
  color: ${props => props.color};
`;

const defaultColor = colors.white;

export const Heading1 = ({ children, color = defaultColor }: Heading1Props) => {
  return (
    <StyledHeading1 color={color} >{children}</StyledHeading1>
  )
};
