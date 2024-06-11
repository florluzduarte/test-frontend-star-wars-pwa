import styled from "@emotion/styled";
import { colors, fontSizes, fontWeights } from "../../../styles";

interface Heading2Props {
  children: string;
  color?: string;
}

const StyledHeading2 = styled("h2")`
  font-size: ${fontSizes.normal};
  font-weight: ${fontWeights.bold};
  color: ${props => props.color};
`;

const defaultColor = colors.main;

export const Heading2 = ({ children, color = defaultColor }: Heading2Props) => {
  return (
    <StyledHeading2 color={color}>{children}</StyledHeading2>
  )
};