export const getCharacterID = (url: string) => {
  const urlSplited = url.split('/');
  const characterID = urlSplited[urlSplited.length - 2];
  return characterID;
};