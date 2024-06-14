import { Characters } from "../models";

export const getFilteredCharactersPages = (characters: Characters[]) => {
  if (characters.length <= 0) return [];
  if (characters.length <= 10) return [{ results: characters }];

  const paginationSize = 10;
  const characterPages = [];

  for (let i = 0; i < characters.length; i += paginationSize) {
    characterPages.push(characters.slice(i, i + paginationSize));
  }

  const characterPageModeled = characterPages.map((page) => {
    return { results: page }
  })

  return characterPageModeled;
};