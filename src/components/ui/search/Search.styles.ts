import styled from "@emotion/styled";
import { colors, devices, fontFamily, fontSizes, gaps } from "../../../styles";

export const StyledForm = styled("form")`
  @media ${devices.tablet} {
    max-width: 64rem;
    margin: 0rem auto;
  }
`;

export const StyledLabel = styled("label")`
  color: ${colors.gray100};
  font-size: ${fontSizes.small};
`;

export const StyledInputWrapper = styled("div")`
  display: grid;
  grid-template-columns: 70% 30%;
  width: 100%;
`;

export const StyledInput = styled("input")`
  background-color: ${colors.black};
  padding: 1.4rem;
  margin: ${gaps.sm} 0rem;
  font-size: ${fontSizes.normal};
  border: 1px solid ${colors.white};
  border-start-start-radius: 999rem;
  border-end-start-radius: 999rem;
  color: ${colors.white};

  &::placeholder {
    color: ${colors.gray300};
    font-family: ${fontFamily};
  }

  &:focus {
    outline: none;
    border-color: ${colors.main};
  }
`;

export const StyledFormButton = styled("button")`
  font-family: ${fontFamily};
  font-size: ${fontSizes.normal};
  color: ${colors.white};
  background-color: ${colors.gray900};
  border: 1px solid ${colors.white};
  border-start-end-radius: 999rem;
  border-end-end-radius: 999rem;
  margin: ${gaps.sm} 0rem;
  padding: 1.4rem;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${colors.main};
  }
`;