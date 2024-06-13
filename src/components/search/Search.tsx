import { ChangeEvent, FormEvent, useState } from "react";
import { StyledForm, StyledFormButton, StyledInput, StyledInputWrapper, StyledLabel } from "./Search.styles";
import { useStarWarsContext } from "../../hooks/useStarWarsContext/useStarWarsContext";
import { CharacterPages, Characters } from "../../models";
import { getFilteredCharactersPages } from "../../utils/getFilteredCharactersPages";

interface SearchProps {
  handleCharacterFilter: (charactersFiltered?: CharacterPages[]) => void;
}

const filterCharacters = (characters: Characters[], filter: string) => {
  const result = characters.filter((character) => character.name?.toLowerCase().includes(filter));
  const filteredCharactersPages = getFilteredCharactersPages(result);
  return filteredCharactersPages;
}

export const Search = ({ handleCharacterFilter }: SearchProps) => {

  const { characters } = useStarWarsContext()!.characters;

  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event?.target.value);
  }

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    const hasValidInput = inputValue && inputValue.trim() != "";
    if (!hasValidInput) {
      handleCharacterFilter();
      return;
    }
    const filteredCharacters = filterCharacters(characters, inputValue.trim()?.toLowerCase());
    handleCharacterFilter(filteredCharacters);
  }

  return (
    <StyledForm onSubmit={handleSearch}>
      <StyledLabel htmlFor="search">Search Star Wars Heroes</StyledLabel>
      <StyledInputWrapper>
        <StyledInput
          name="search"
          type="text"
          placeholder="Character"
          id="search"
          value={inputValue}
          onChange={handleInputChange}
        />
        <StyledFormButton type="submit">Search</StyledFormButton>
      </StyledInputWrapper>
    </StyledForm>
  )
};