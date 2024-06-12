import { CharacterPages, Characters, Species, Starships, Vehicles } from "../models";

const baseUrl = "https://swapi.dev/api";

export const getAllCharactersPages = async () => {
  let characterPages: CharacterPages[] = [];
  let nextUrl = `${baseUrl}/people/?page=1`;

  while (nextUrl) {
    const response = await fetch(nextUrl);
    const data = await response.json();
    characterPages = [...characterPages, data];
    nextUrl = data.next;
  }
  console.log({ characterPages });
  return characterPages;
};

export const getAllCharacters = async () => {
  let characters: Characters[] = [];
  let nextUrl = `${baseUrl}/people/?page=1`;

  while (nextUrl) {
    const response = await fetch(nextUrl);
    const data = await response.json();
    characters = [...characters, ...data.results];
    nextUrl = data.next;
  }

  console.log({ characters });
  return characters;
};

export const getAllVehicles = async () => {
  let vehicles: Vehicles[] = [];
  let nextUrl = `${baseUrl}/vehicles/?page=1`;

  while (nextUrl) {
    const response = await fetch(nextUrl);
    const data = await response.json();
    vehicles = [...vehicles, ...data.results];
    nextUrl = data.next;
  }
  console.log({ vehicles });
  return vehicles;
};

export const getAllSpecies = async () => {
  let species: Species[] = [];
  let nextUrl = `${baseUrl}/species/?page=1`;

  while (nextUrl) {
    const response = await fetch(nextUrl);
    const data = await response.json();
    species = [...species, ...data.results];
    nextUrl = data.next;
  }
  console.log({ species });
  return species;
};

export const getAllStarships = async () => {
  let starships: Starships[] = [];
  let nextUrl = `${baseUrl}/starships/?page=1`;

  while (nextUrl) {
    const response = await fetch(nextUrl);
    const data = await response.json();
    starships = [...starships, ...data.results];
    nextUrl = data.next;
  }
  console.log({ starships });
  return starships;
};