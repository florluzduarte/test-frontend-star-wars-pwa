import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors, fontSizes, fontWeights, gaps } from "../../../styles";
import { LeftArrowIcon } from "../icons/LeftArrowIcon";

interface GoBackLinkProps {
  children: string;
  path: string;
  color?: string;
}

const StyledLink = styled(Link)`
  color: ${props => props.color};
  text-decoration: none;
  display: flex;
  gap: ${gaps.xs};
  align-items: center;
  font-size: ${fontSizes.normal};
  font-weight: ${fontWeights.bold};

  &:hover, &:focus {
    color: ${colors.mainLight};
  }
`;

const defaulColor = colors.main;

export const GoBackLink = ({ children, path, color = defaulColor }: GoBackLinkProps) => {
  return (
    <StyledLink to={path} color={color}>
      <LeftArrowIcon color={color} />
      {children}
    </StyledLink>
  )
};