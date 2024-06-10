import { StyledForm, StyledFormButton, StyledInput, StyledInputWrapper, StyledLabel } from "./Search.styles";

export const Search = () => {
  return (
    <StyledForm>
      <StyledLabel htmlFor="search">Search Star Wars Heroes</StyledLabel>
      <StyledInputWrapper>
        <StyledInput type="text" placeholder="Character" id="search" />
        <StyledFormButton>Search</StyledFormButton>
      </StyledInputWrapper>
    </StyledForm>
  )
};