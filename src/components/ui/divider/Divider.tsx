import styled from "@emotion/styled";
import { colors, gaps } from "../../../styles";

interface DividerProps {
  ariaHidden?: boolean;
}

const StyledDivider = styled("div")`
  height: 0.05rem;
  background-color: ${colors.gray300};
  width: 100%;
  margin: ${gaps.md} 0rem;
`;

export const Divider = ({ ariaHidden = true }: DividerProps) => {
  return (
    <StyledDivider aria-hidden={ariaHidden} />
  )
};